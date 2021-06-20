import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as cloudFront from "@aws-cdk/aws-cloudfront";
import * as origins from "@aws-cdk/aws-cloudfront-origins";

export class FrontendDeployStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
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

    // Create a CDN to deploy the website
    const p13cDistribution = new cloudFront.Distribution(
      this,
      "P13cFrontendDist",
      {
        defaultBehavior: {
          origin: new origins.S3Origin(p13cBucketForFrontendAssets),
        },
        defaultRootObject: "index.html",
      }
    );

    // Prints out the web endpoint to the terminal
    new cdk.CfnOutput(this, "P13cDistributionDomainName", {
      value: p13cDistribution.domainName,
    });

    cdk.Tags.of(this).add("Project", "P13c-Bookmarking-App-with-AWS");
  }
}
