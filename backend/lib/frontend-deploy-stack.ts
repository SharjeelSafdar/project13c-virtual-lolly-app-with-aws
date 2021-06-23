import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as lambda from "@aws-cdk/aws-lambda";
import * as cloudFront from "@aws-cdk/aws-cloudfront";
import * as origins from "@aws-cdk/aws-cloudfront-origins";
import * as ddb from "@aws-cdk/aws-dynamodb";

interface FrontendDeployStackProps extends cdk.StackProps {
  lolliesTableName: string;
}

export class FrontendDeployStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props: FrontendDeployStackProps
  ) {
    super(scope, id, props);

    // Create a bucket to upload the Gatsby static web app
    // We will deploy our static site through GitHub Actions into this bucket.
    const p13cBucketForFrontendAssets = new s3.Bucket(
      this,
      "P13cBucketForFrontendAssets",
      {
        bucketName: "p13c-bucket-for-frontend-assets",
        versioned: true,
        autoDeleteObjects: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        websiteIndexDocument: "index.html",
        publicReadAccess: true,
      }
    );

    const p13cSsrLolliesFunction = new cloudFront.experimental.EdgeFunction(
      this,
      "P13cSsrLolliesFunction",
      {
        runtime: lambda.Runtime.NODEJS_14_X,
        handler: "index.handler",
        code: lambda.Code.fromAsset("edgeLambda"),
      }
    );
    const lolliesTable = ddb.Table.fromTableName(
      this,
      "P13cLolliesTable",
      props.lolliesTableName
    );
    lolliesTable.grantReadData(p13cSsrLolliesFunction);

    const s3Origin = new origins.S3Origin(p13cBucketForFrontendAssets);
    // Create a CDN to deploy the website
    const p13cDistribution = new cloudFront.Distribution(
      this,
      "P13cFrontendDist",
      {
        defaultBehavior: {
          origin: s3Origin,
          edgeLambdas: [
            {
              functionVersion: p13cSsrLolliesFunction.currentVersion,
              eventType: cloudFront.LambdaEdgeEventType.ORIGIN_RESPONSE,
            },
          ],
        },
        defaultRootObject: "index.html",
      }
    );

    // Prints out the web endpoint to the terminal
    new cdk.CfnOutput(this, "P13cDistributionDomainName", {
      value: p13cDistribution.domainName,
    });

    new cdk.CfnOutput(this, "LolliesTableName", {
      value: props.lolliesTableName,
    });

    cdk.Tags.of(this).add("Project", "P13c-Virtual-Lolly-App-with-AWS");
  }
}
