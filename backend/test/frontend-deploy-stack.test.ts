import { expect as expectCDK, haveResource } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import * as P13cFrontendDeploy from "../lib/frontend-deploy-stack";

const createTestStack = (app: cdk.App) =>
  new P13cFrontendDeploy.FrontendDeployStack(app, "MyTestStack", {
    lolliesTableName: "table",
    env: {
      region: "us-east-2",
    },
  });

test("Stack has a S3 Bucket", () => {
  const app = new cdk.App();
  // WHEN
  const stack = createTestStack(app);
  // THEN
  expectCDK(stack).to(haveResource("AWS::S3::Bucket"));
});

test("Stack has a CloudFront Distribution", () => {
  const app = new cdk.App();
  // WHEN
  const stack = createTestStack(app);
  // THEN
  expectCDK(stack).to(haveResource("AWS::CloudFront::Distribution"));
});
