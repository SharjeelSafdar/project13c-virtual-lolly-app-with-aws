import { expect as expectCDK, haveResource } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import * as P13cBackendServices from "../lib/backend-services-stack";

const createTestStack = (app: cdk.App) =>
  new P13cBackendServices.ServicesStack(app, "MyTestStack");

test("Stack has a DynamoDB Table", () => {
  const app = new cdk.App();
  // WHEN
  const stack = createTestStack(app);
  // THEN
  expectCDK(stack).to(haveResource("AWS::DynamoDB::Table"));
});

test("Stack has an AppSync GraphQL API", () => {
  const app = new cdk.App();
  // WHEN
  const stack = createTestStack(app);
  // THEN
  expectCDK(stack).to(haveResource("AWS::AppSync::GraphQLApi"));
});

test("GraphQL API has a DynamoDB Data Source", () => {
  const app = new cdk.App();
  // WHEN
  const stack = createTestStack(app);
  // THEN
  expectCDK(stack).to(
    haveResource("AWS::AppSync::DataSource", {
      Type: "AMAZON_DYNAMODB",
    })
  );
});

test(`DynamoDB Data Source has "getAllLollies" query resolver`, () => {
  const app = new cdk.App();
  // WHEN
  const stack = createTestStack(app);
  // THEN
  expectCDK(stack).to(
    haveResource("AWS::AppSync::Resolver", {
      TypeName: "Query",
      FieldName: "getAllLollies",
    })
  );
});

test(`DynamoDB Data Source has "getLolly" query resolver`, () => {
  const app = new cdk.App();
  // WHEN
  const stack = createTestStack(app);
  // THEN
  expectCDK(stack).to(
    haveResource("AWS::AppSync::Resolver", {
      TypeName: "Query",
      FieldName: "getLolly",
    })
  );
});

test(`DynamoDB Data Source has "createLolly" mutation resolver`, () => {
  const app = new cdk.App();
  // WHEN
  const stack = createTestStack(app);
  // THEN
  expectCDK(stack).to(
    haveResource("AWS::AppSync::Resolver", {
      TypeName: "Mutation",
      FieldName: "createLolly",
    })
  );
});
