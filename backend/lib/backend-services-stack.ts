import * as cdk from "@aws-cdk/core";
import * as appsync from "@aws-cdk/aws-appsync";
import * as ddb from "@aws-cdk/aws-dynamodb";

export class ServicesStack extends cdk.Stack {
  public readonly lolliesTableName: string;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.lolliesTableName = "LolliesTable";

    const lolliesTable = new ddb.Table(this, "P13cLolliesTable", {
      tableName: this.lolliesTableName,
      partitionKey: {
        name: "id",
        type: ddb.AttributeType.STRING,
      },
      billingMode: ddb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const gqlApi = new appsync.GraphqlApi(this, "P13cGraphQlApi", {
      name: "P13c-GraphQL-Api",
      schema: appsync.Schema.fromAsset("graphql/schema.gql"),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
          apiKeyConfig: {
            expires: cdk.Expiration.after(cdk.Duration.days(365)),
          },
        },
      },
    });

    const ddbDataSource = gqlApi.addDynamoDbDataSource(
      "P13cDynamoDbDataSource",
      lolliesTable
    );
    lolliesTable.grantReadWriteData(ddbDataSource);

    ddbDataSource.createResolver({
      typeName: "Query",
      fieldName: "getAllLollies",
      requestMappingTemplate: appsync.MappingTemplate.dynamoDbScanTable(),
      responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultList(),
    });

    ddbDataSource.createResolver({
      typeName: "Query",
      fieldName: "getLolly",
      requestMappingTemplate: appsync.MappingTemplate.dynamoDbGetItem(
        "id",
        "id"
      ),
      responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultItem(),
    });

    ddbDataSource.createResolver({
      typeName: "Mutation",
      fieldName: "createLolly",
      requestMappingTemplate: appsync.MappingTemplate.dynamoDbPutItem(
        appsync.PrimaryKey.partition("id").auto(),
        appsync.Values.projecting("newLolly")
      ),
      responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultItem(),
    });

    new cdk.CfnOutput(this, "P13cGraphQLApiId", {
      value: gqlApi.apiId,
    });

    new cdk.CfnOutput(this, "P13cGraphQLApiKey", {
      value: gqlApi.apiKey || "Key not found or configured!",
    });

    cdk.Tags.of(this).add("Project", "P13c-Virtual-Lolly-App-with-AWS");
  }
}
