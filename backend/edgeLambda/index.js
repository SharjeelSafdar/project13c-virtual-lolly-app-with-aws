exports.handler = async (event, context, callback) => {
  console.log(
    "CloudFront Response",
    JSON.stringify(event.Records[0].cf, null, 2)
  );
  const request = event.Records[0].cf.request;
  const uri = request.uri;
  const response = event.Records[0].cf.response;

  if (response.status >= 400 && response.status <= 599) {
    const redirect_path = `https://cg77zvqtee.execute-api.us-east-2.amazonaws.com/lolly?${request.querystring}`;
    response.status = 302;
    response.statusDescription = "Found";
    response.body = "";
    response.headers["location"] = [{ key: "Location", value: redirect_path }];
  }

  callback(null, response);
};
