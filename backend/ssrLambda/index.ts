import {
  APIGatewayProxyEventV2,
  APIGatewayEventRequestContext,
  Callback,
  APIGatewayProxyResultV2,
} from "aws-lambda";

import * as AWS from "aws-sdk";

const ddbClient = new AWS.DynamoDB.arguments();

export const handler = async (
  event: APIGatewayProxyEventV2,
  context: APIGatewayEventRequestContext,
  callback: Callback
): Promise<APIGatewayProxyResultV2> => {
  console.log("Evemt: ", event);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
    },
    body: "Hello, World",
  };
};
