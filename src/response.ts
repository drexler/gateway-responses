import * as aws from 'aws-sdk';

const errorMessage: object =
JSON.parse(`
  {
    "code" : 10,
    "message" : "API Gateway: Problem with processing this request",
    "developerMessage" : "$context.error.responseType",
    "moreInfo" : "",
    "requestId" : "$context.requestId"
  }`);

 const responseTypes: Array<string> = [
   'RESOURCE_NOT_FOUND',
   'UNAUTHORIZED',
   'INVALID_API_KEY',
   'ACCESS_DENIED',
   'AUTHORIZER_FAILURE',
   'AUTHORIZER_CONFIGURATION_ERROR',
   'INVALID_SIGNATURE',
   'EXPIRED_TOKEN',
   'MISSING_AUTHENTICATION_TOKEN',
   'INTEGRATION_FAILURE',
   'INTEGRATION_TIMEOUT',
   'API_CONFIGURATION_ERROR',
   'UNSUPPORTED_MEDIA_TYPE',
   'BAD_REQUEST_PARAMETERS',
   'BAD_REQUEST_BODY',
   'REQUEST_TOO_LARGE',
   'THROTTLED',
   'QUOTA_EXCEEDED',
   'DEFAULT_4XX',
   'DEFAULT_5XX'
 ];

 let params = {
  responseType: 'DEFAULT_4XX',
  restApiId: 'dui4awsdk1',
  patchOperations: [
    {
      op: 'add',
      path: '/responseTemplates/application~1json',
      value: JSON.stringify(errorMessage)
    }
  ]
};

 export function updateApiDefaultErrorMessageModels(restApiId: string, awsRegion: string): void {
   let apiGateway: any = new aws.APIGateway({region: awsRegion});

   responseTypes.forEach((type) => {
     params.responseType = type;
     params.restApiId = restApiId;
     apiGateway.updateGatewayResponse(params, (error, response) => {
       if (error) {
         console.log(`Failure updating default ${type} reponse model`);
         console.log(error);
       } else {
         console.log(`Updated default ${type} reponse model`);
       }
     });
   });
 }
