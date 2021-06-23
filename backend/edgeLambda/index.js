"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const AWS = require("aws-sdk");
const lollyTemplate_1 = require("./lollyTemplate");
const ddbClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });
const TableName = "LolliesTable";
// The generated page contains some dynamic data, so we don't want
// it to stay in cache for long
const cacheControlMaxAge = 3;
exports.handler = async (event, context, callback) => {
    console.log("Origin Response: ", JSON.stringify(event.Records[0].cf, null, 2));
    const config = event.Records[0].cf.config;
    const distDomain = `https://${config.distributionDomainName}`;
    const request = event.Records[0].cf.request;
    const uri = request.uri;
    let response = event.Records[0].cf.response;
    // If there is no error, do nothing.
    if (!isStatusErroneous(+response.status)) {
        return response;
    }
    // Get Lolly Id from URI
    const lollyId = getLollyId(uri);
    if (lollyId === null) {
        // Couldn't get id from URI, Redirect to 404.
        response = redirectTo404Response(response, `${distDomain}/404`);
    }
    else {
        try {
            const res = await getLollyFromDdb(lollyId);
            if (!res.Item) {
                throw new Error(`No item found, id: + ${lollyId}`);
            }
            response = lollyPageResponse(response, res.Item);
        }
        catch (err) {
            console.log("Error fetching lolly from DDB: ", err);
            response = redirectTo404Response(response, `${distDomain}/404`);
        }
    }
    return response;
};
const isStatusErroneous = (status) => status >= 400 && status <= 599;
const getLollyId = (uri) => {
    // const m = uri.match(/^\/lolly\/([a-z0-9-]+)$/i);
    // const id = Array.isArray(m) && m.length > 1 ? m[1] : null;
    let id = null;
    if (uri.startsWith("/lolly/")) {
        id = uri.slice(7);
    }
    return id;
};
const getLollyFromDdb = async (id) => {
    return await ddbClient
        .get({
        TableName,
        Key: { id },
    })
        .promise();
};
const lollyPageResponse = (response, lollyData) => {
    response.status = "200";
    response.statusDescription = "OK";
    response.headers["content-type"] = [
        {
            key: "Content-Type",
            value: "text/html;charset=UTF-8",
        },
    ];
    response.headers["cache-control"] = [
        {
            key: "Cache-Control",
            value: `max-age=${cacheControlMaxAge}`,
        },
    ];
    response.body = lollyTemplate_1.default(lollyData);
    return response;
};
const redirectTo404Response = (response, redirectPath) => {
    response.status = "302";
    response.statusDescription = "Found";
    response.headers["location"] = [
        {
            key: "Location",
            value: redirectPath,
        },
    ];
    response.body = "";
    return response;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFNQSwrQkFBK0I7QUFDL0IsbURBQTRDO0FBa0I1QyxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDM0UsTUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDO0FBQ2pDLGtFQUFrRTtBQUNsRSwrQkFBK0I7QUFDL0IsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFFaEIsUUFBQSxPQUFPLEdBQThCLEtBQUssRUFDckQsS0FBSyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBQ1IsRUFBRTtJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQ1QsbUJBQW1CLEVBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUM3QyxDQUFDO0lBRUYsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQzFDLE1BQU0sVUFBVSxHQUFHLFdBQVcsTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDOUQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO0lBQzVDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDeEIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO0lBRTVDLG9DQUFvQztJQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFD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bkIsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDbG91ZEZyb250RXZlbnQsXHJcbiAgQ2xvdWRGcm9udFJlcXVlc3QsXHJcbiAgQ2xvdWRGcm9udFJlc3BvbnNlLFxyXG4gIEhhbmRsZXIsXHJcbn0gZnJvbSBcImF3cy1sYW1iZGFcIjtcclxuaW1wb3J0ICogYXMgQVdTIGZyb20gXCJhd3Mtc2RrXCI7XHJcbmltcG9ydCBsb2xseVRlbXBsYXRlIGZyb20gXCIuL2xvbGx5VGVtcGxhdGVcIjtcclxuaW1wb3J0IHsgTG9sbHkgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxudHlwZSBDRlJlc3BvbnNlID0gQ2xvdWRGcm9udFJlc3BvbnNlICYge1xyXG4gIGJvZHk/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgQ2xvdWRGcm9udFJlc3BvbnNlRXZlbnQge1xyXG4gIFJlY29yZHM6IEFycmF5PHtcclxuICAgIGNmOiBDbG91ZEZyb250RXZlbnQgJiB7XHJcbiAgICAgIHJlYWRvbmx5IHJlcXVlc3Q6IENsb3VkRnJvbnRSZXF1ZXN0O1xyXG4gICAgICByZXNwb25zZTogQ0ZSZXNwb25zZTtcclxuICAgIH07XHJcbiAgfT47XHJcbn1cclxuXHJcbnR5cGUgQ2xvdWRGcm9udFJlc3BvbnNlSGFuZGxlciA9IEhhbmRsZXI8Q2xvdWRGcm9udFJlc3BvbnNlRXZlbnQsIENGUmVzcG9uc2U+O1xyXG5cclxuY29uc3QgZGRiQ2xpZW50ID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCh7IHJlZ2lvbjogXCJ1cy1lYXN0LTJcIiB9KTtcclxuY29uc3QgVGFibGVOYW1lID0gXCJMb2xsaWVzVGFibGVcIjtcclxuLy8gVGhlIGdlbmVyYXRlZCBwYWdlIGNvbnRhaW5zIHNvbWUgZHluYW1pYyBkYXRhLCBzbyB3ZSBkb24ndCB3YW50XHJcbi8vIGl0IHRvIHN0YXkgaW4gY2FjaGUgZm9yIGxvbmdcclxuY29uc3QgY2FjaGVDb250cm9sTWF4QWdlID0gMztcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVyOiBDbG91ZEZyb250UmVzcG9uc2VIYW5kbGVyID0gYXN5bmMgKFxyXG4gIGV2ZW50LFxyXG4gIGNvbnRleHQsXHJcbiAgY2FsbGJhY2tcclxuKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIk9yaWdpbiBSZXNwb25zZTogXCIsXHJcbiAgICBKU09OLnN0cmluZ2lmeShldmVudC5SZWNvcmRzWzBdLmNmLCBudWxsLCAyKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNvbmZpZyA9IGV2ZW50LlJlY29yZHNbMF0uY2YuY29uZmlnO1xyXG4gIGNvbnN0IGRpc3REb21haW4gPSBgaHR0cHM6Ly8ke2NvbmZpZy5kaXN0cmlidXRpb25Eb21haW5OYW1lfWA7XHJcbiAgY29uc3QgcmVxdWVzdCA9IGV2ZW50LlJlY29yZHNbMF0uY2YucmVxdWVzdDtcclxuICBjb25zdCB1cmkgPSByZXF1ZXN0LnVyaTtcclxuICBsZXQgcmVzcG9uc2UgPSBldmVudC5SZWNvcmRzWzBdLmNmLnJlc3BvbnNlO1xyXG5cclxuICAvLyBJZiB0aGVyZSBpcyBubyBlcnJvciwgZG8gbm90aGluZy5cclxuICBpZiAoIWlzU3RhdHVzRXJyb25lb3VzKCtyZXNwb25zZS5zdGF0dXMpKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgTG9sbHkgSWQgZnJvbSBVUklcclxuICBjb25zdCBsb2xseUlkID0gZ2V0TG9sbHlJZCh1cmkpO1xyXG4gIGlmIChsb2xseUlkID09PSBudWxsKSB7XHJcbiAgICAvLyBDb3VsZG4ndCBnZXQgaWQgZnJvbSBVUkksIFJlZGlyZWN0IHRvIDQwNC5cclxuICAgIHJlc3BvbnNlID0gcmVkaXJlY3RUbzQwNFJlc3BvbnNlKHJlc3BvbnNlLCBgJHtkaXN0RG9tYWlufS80MDRgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0TG9sbHlGcm9tRGRiKGxvbGx5SWQpO1xyXG4gICAgICBpZiAoIXJlcy5JdGVtKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBpdGVtIGZvdW5kLCBpZDogKyAke2xvbGx5SWR9YCk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzcG9uc2UgPSBsb2xseVBhZ2VSZXNwb25zZShyZXNwb25zZSwgcmVzLkl0ZW0gYXMgTG9sbHkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmV0Y2hpbmcgbG9sbHkgZnJvbSBEREI6IFwiLCBlcnIpO1xyXG4gICAgICByZXNwb25zZSA9IHJlZGlyZWN0VG80MDRSZXNwb25zZShyZXNwb25zZSwgYCR7ZGlzdERvbWFpbn0vNDA0YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcblxyXG5jb25zdCBpc1N0YXR1c0Vycm9uZW91cyA9IChzdGF0dXM6IG51bWJlcikgPT4gc3RhdHVzID49IDQwMCAmJiBzdGF0dXMgPD0gNTk5O1xyXG5cclxuY29uc3QgZ2V0TG9sbHlJZCA9ICh1cmk6IHN0cmluZykgPT4ge1xyXG4gIC8vIGNvbnN0IG0gPSB1cmkubWF0Y2goL15cXC9sb2xseVxcLyhbYS16MC05LV0rKSQvaSk7XHJcbiAgLy8gY29uc3QgaWQgPSBBcnJheS5pc0FycmF5KG0pICYmIG0ubGVuZ3RoID4gMSA/IG1bMV0gOiBudWxsO1xyXG4gIGxldCBpZCA9IG51bGw7XHJcbiAgaWYgKHVyaS5zdGFydHNXaXRoKFwiL2xvbGx5L1wiKSkge1xyXG4gICAgaWQgPSB1cmkuc2xpY2UoNyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaWQ7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMb2xseUZyb21EZGIgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBkZGJDbGllbnRcclxuICAgIC5nZXQoe1xyXG4gICAgICBUYWJsZU5hbWUsXHJcbiAgICAgIEtleTogeyBpZCB9LFxyXG4gICAgfSlcclxuICAgIC5wcm9taXNlKCk7XHJcbn07XHJcblxyXG5jb25zdCBsb2xseVBhZ2VSZXNwb25zZSA9IChyZXNwb25zZTogQ0ZSZXNwb25zZSwgbG9sbHlEYXRhOiBMb2xseSkgPT4ge1xyXG4gIHJlc3BvbnNlLnN0YXR1cyA9IFwiMjAwXCI7XHJcbiAgcmVzcG9uc2Uuc3RhdHVzRGVzY3JpcHRpb24gPSBcIk9LXCI7XHJcbiAgcmVzcG9uc2UuaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICB2YWx1ZTogXCJ0ZXh0L2h0bWw7Y2hhcnNldD1VVEYtOFwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJlc3BvbnNlLmhlYWRlcnNbXCJjYWNoZS1jb250cm9sXCJdID0gW1xyXG4gICAge1xyXG4gICAgICBrZXk6IFwiQ2FjaGUtQ29udHJvbFwiLFxyXG4gICAgICB2YWx1ZTogYG1heC1hZ2U9JHtjYWNoZUNvbnRyb2xNYXhBZ2V9YCxcclxuICAgIH0sXHJcbiAgXTtcclxuICByZXNwb25zZS5ib2R5ID0gbG9sbHlUZW1wbGF0ZShsb2xseURhdGEpO1xyXG5cclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcblxyXG5jb25zdCByZWRpcmVjdFRvNDA0UmVzcG9uc2UgPSAocmVzcG9uc2U6IENGUmVzcG9uc2UsIHJlZGlyZWN0UGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgcmVzcG9uc2Uuc3RhdHVzID0gXCIzMDJcIjtcclxuICByZXNwb25zZS5zdGF0dXNEZXNjcmlwdGlvbiA9IFwiRm91bmRcIjtcclxuICByZXNwb25zZS5oZWFkZXJzW1wibG9jYXRpb25cIl0gPSBbXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJMb2NhdGlvblwiLFxyXG4gICAgICB2YWx1ZTogcmVkaXJlY3RQYXRoLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJlc3BvbnNlLmJvZHkgPSBcIlwiO1xyXG5cclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcbiJdfQ==