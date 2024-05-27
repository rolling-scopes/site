import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';

import * as s3 from 'aws-cdk-lib/aws-s3';
import * as certificatemanager from 'aws-cdk-lib/aws-certificatemanager';

type StackProps = cdk.StackProps & {
  feature: string;
};

export class PreviewStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const frontendBucket = s3.Bucket.fromBucketName(this, 'sites-frontend', 'sites-frontend');
    const originAccessIdentity = cloudfront.OriginAccessIdentity.fromOriginAccessIdentityId(
      this,
      'frontendOAI',
      'frontendOAI',
    );
    frontendBucket.grantRead(originAccessIdentity);

    const rollingscopesZone = route53.HostedZone.fromHostedZoneAttributes(this, 'rollingscopes-com-zone', {
      hostedZoneId: 'Z05583041ZL7RPE3RAJ8A',
      zoneName: 'rollingscopes.com',
    });
    const rollingScopesCertificate = certificatemanager.Certificate.fromCertificateArn(
      this,
      'rolling-scopes-certificate',
      'arn:aws:acm:us-east-1:511361162520:certificate/f6d49443-ab59-4992-8005-aff7c780270a',
    );
    const rsSchoolCertificate = certificatemanager.Certificate.fromCertificateArn(
      this,
      'rs-school-certificate',
      'arn:aws:acm:us-east-1:511361162520:certificate/18117ca9-6cd8-4c3a-a7bb-73d7e5f8018c',
    );
    const rsSchoolZone = route53.HostedZone.fromHostedZoneAttributes(this, 'rs-school-zone', {
      hostedZoneId: 'Z060689922CU3BKTLJ3DO',
      zoneName: 'rs.school',
    });

    const redirectToIndexHtmlFunction = cloudfront.Function.fromFunctionAttributes(
      this,
      'redirect-to-index-html-function',
      {
        functionName: 'redirect-to-index-html-function',
        functionArn: 'arn:aws:cloudfront::511361162520:function:append-index-html',
      },
    );

    const rsSchoolDistribution = new cloudfront.Distribution(this, 'rs-school-distribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(frontendBucket, {
          originPath: `/rs-school-preview/${props.feature}`,
          originAccessIdentity,
        }),
        functionAssociations: [
          {
            function: redirectToIndexHtmlFunction,
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
          },
        ],
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
      defaultRootObject: 'index.html',
      certificate: rsSchoolCertificate,
      domainNames: [`${props.feature}.rs.school`],
    });
    new route53.ARecord(this, `rs-school-record`, {
      zone: rsSchoolZone,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(rsSchoolDistribution)),
      recordName: `${props.feature}.rs.school`,
    });

    const rollingScopesDistribution = new cloudfront.Distribution(this, 'rolling-scopes-com-distribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(frontendBucket, {
          originPath: `/rolling-scopes-com-preview/${props.feature}`,
          originAccessIdentity,
        }),
        functionAssociations: [
          {
            function: redirectToIndexHtmlFunction,
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
          },
        ],
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
      defaultRootObject: 'index.html',
      certificate: rollingScopesCertificate,
      domainNames: ['rollingscopes.com'],
    });
    new route53.ARecord(this, `rolling-scopes-com-record`, {
      zone: rollingscopesZone,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(rollingScopesDistribution)),
      recordName: `${props.feature}.rollingscopes.com`,
    });
  }
}
