#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { S3CloudfrontOasStack } from '../lib/s3-cloudfront-oas-stack';


const app = new cdk.App();

new S3CloudfrontOasStack(app, 'S3CfOasStack', {});
