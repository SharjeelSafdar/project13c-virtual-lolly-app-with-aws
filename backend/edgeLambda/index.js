const pageTemplate = require("./lollyTemplate.js");
const AWS = require*("aws-sdk");

const ddbClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context, callback) => {
  console.log(
    "CloudFront Response",
    JSON.stringify(event.Records[0].cf, null, 2)
  );
  const request = event.Records[0].cf.request;
  const lollyId = request.uri;
  const response = event.Records[0].cf.response;
  
  console.log(lollyId);

  if (response.status >= 400 && response.status <= 599) {
    const response = await ddbClient
      .get({
        TableName: "LolliesTable",
        Key: {
          id: "1234",
        },
      })
      .promise();
    console.log("Response from DynamoDB: ", response);
    const lolly = {
      id: "1234",
      topColor: "#d52358",
      middleColor: "#e95946",
      bottomColor: "#deaa43",
      recipientName: "R1",
      message: "Hi",
      sendersName: "S1",
    };

    response.status = 200;
    response.statusDescription = "OK";
    response.body = pageTemplate(lolly);
  }

  callback(null, response);
};
