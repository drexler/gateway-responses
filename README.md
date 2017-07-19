### API Gateway Responses
A simple script used to update the default AWS API Gateway response models.

#### Prerequisites
To run this project you need to have:

- [Node](https://nodejs.org)
- [npm](https://www.npmjs.com/get-npm)

#### File Description

 * *src/response.ts* - Main file.

##### Usage
1. Build the project: `npm run build`
2. Run the following command specifying with the AWS API resource id and the associated region as parameters.
 ```shell
    node -e 'require("./dist/index").updateApiDefaultErrorMessageModels(<restApiId>, <awsRegion>)'
 ```
