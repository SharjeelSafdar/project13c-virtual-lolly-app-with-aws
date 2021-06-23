import { expect as expectCDK, haveResource } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import * as P13cFrontendDeploy from "../lib/frontend-deploy-stack";

test("Stack has a S3 Bucket", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new P13cFrontendDeploy.FrontendDeployStack(app, "MyTestStack", {
    lolliesTableName: "table",
  });
  // THEN
  expectCDK(stack).to(haveResource("AWS::S3::Bucket"));
});

test("Stack has a CloudFront Distribution", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new P13cFrontendDeploy.FrontendDeployStack(app, "MyTestStack", {
    lolliesTableName: "table",
  });
  // THEN
  expectCDK(stack).to(haveResource("AWS::CloudFront::Distribution"));
});
