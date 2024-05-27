import * as cdk from 'aws-cdk-lib';
import { PreviewStack } from '../lib/stack';

const app = new cdk.App();

new PreviewStack(app, 'sites', {
  env: {
    account: '511361162520',
    region: 'eu-central-1',
  },
  feature: app.node.tryGetContext('feature'), // gets the feature to preview from the context
});
