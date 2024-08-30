import { type AngularAwsPath } from './courses-data.types';

export const awsDevPath: AngularAwsPath[] = [
  {
    id: 1,
    title: 'Module 1. Cloud Introduction',
    list: [
      'Fundamental theory about cloud computing',
      'Cloud service models, cloud deployment models, infrastructure-as-code',
      'Monolith vs microservices vs serverless',
      'AWS intro, registration, Cloud Watch, IAM Repository structure',
    ],
  },
  {
    id: 2,
    title: 'Module 2. Serving SPA',
    list: [
      'AWS Simple Storage Service overview',
      'Services & tools overview',
      'AWS CloudFront overview',
      'Basic overview of deployment process to CloudFront and S3',
      'AWS CLI overview',
    ],
  },
  {
    id: 3,
    title: 'Module 3. Serverless API',
    list: [
      'AWS Lambda overview',
      'Introduction to collecting logs with AWS CloudWatch',
      'Lambda advanced features and configuration',
    ],
  },
  {
    id: 4,
    title: 'Module 4. Integration with NoSQL Database',
    list: ['Easy way to store data in cloud', 'AWS DynamoDB and how to use it'],
  },
  {
    id: 5,
    title: 'Module 5. Integration with S3',
    list: [
      'AWS S3 in-depth introduction',
      'S3 storage classes and their use cases',
      'S3 access control & encryption',
      'S3 versioning, lifecycle management & events',
      'Integration with S3 and Lambda overview',
    ],
  },
  {
    id: 6,
    title: 'Module 6. Async Microservices Communication',
    list: [
      'Async messaging overview',
      'AWS SQS overview',
      'AWS SNS overview',
      'Integration with SQS, SNS, and Lambda overview',
    ],
  },
  {
    id: 7,
    title: 'Module 7. Authorization',
    list: [
      'Authentication & authorization overview',
      'Lambda authorizer & API Gateway',
      'AWS Cognito overview',
      'Cognito user pool',
      'Cognito identity pool',
    ],
  },
  {
    id: 8,
    title: 'Module 8. Integration with SQL Database',
    list: [
      'Relational databases theory',
      'SQL overview',
      'Overview of AWS database offering',
      'AWS RDS and its engines',
      'Serverless functions & AWS RDS',
    ],
  },
  {
    id: 9,
    title: 'Module 9. Containerization',
    list: [
      'Docker overview',
      'Dockerfiles & images',
      'Containers & VMs',
      'Docker build optimizations',
      'AWS Elastic Beanstalk overview',
      'AWS EB CLI',
    ],
  },
  {
    id: 10,
    title: 'Module 10. Backend for Frontend',
    list: [
      'Backend for frontend overview',
      'BFF as pattern',
      'API Gateway as BFF',
      'AWS Elastic Beanstalk configuration',
    ],
  },
];
