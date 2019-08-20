# foodbanking Version 1.0.0**

this project is all about a REST API concept using NODEJS, EXPRESS & MONGODB
allowing us to Create, Retrieve, Update and DELETE data.

Sample readme for the Web APP module to match the CA assignment readme.

-----------------------------------------------------------------------------------------------------------------------------------------------------
## License $ copyright
© Alexandre Baizoukou, Bs(Hon)Applied Computing, 20070359 WIT

-----------------------------------------------------------------------------------------------------------------------------------------------------
## Contributors
Alexandre Baizoukou

-----------------------------------------------------------------------------------------------------------------------------------------------------
This App investigate the foodbanking system to help people in need.

-----------------------------------------------------------------------------------------------------------------------------------------------------
Skeleton structure:

the  project root element contains the folder Git, idea, bin, models, node modules, public, routes, views and others files.

-----------------------------------------------------------------------------------------------------------------------------------------------------
IDE used: Webstorm
The Database: our Database will hosted remotely on mLab. it offers a nice free tier that we can use to test our application.
create mlab account then create 2 collection one containing the foodbank detail and the other the dietary requirement.

 ----------------------------------------------------------------------------------------------------------------------------------------------------
 We are going to introduce a bit of MVC into this app structure to keep our files lean and separate concerns. So we need endpoints files listed below.....

 foodbank-route -- all API endpoint shall be defined in this file
dietaryrequirement-route -- all API endpoint shall be defined in this file.

 routes -- processes HTTP requests and defines available endpoints.
 modules : body-parser to handle our forms

 models -- manages Database layer(requests and response)

 ----------------------------------------------------------------------------------------------------------------------------------------------------
 we create files in the route folder foodbank.js, dietaryrequirement.js then and add code to GET, POST, PUT & DELETE.

  We first import express router, set the default route and export the module so that we can import into our application. To make this route accessible.

  ---------------------------------------------------------------------------------------------------------------------------------------------------
  let make sure to insert some modules from the IDE.
  since this is the first version of the project we will install body-parser, mongoose and those important for the moment.

note that
Mongoose is Nodejs package for modeling Mongodb. It helps you handle validation and business logic for mongodb on Nodejs. You can learn more here.

Body-parser enables your app to parse data from incoming request like form data via urlencode. We need to import this to our app and use them.

-----------------------------------------------------------------------------------------------------------------------------------------------------
Implementing endpoints

GET/foodbank list foodbank contents
POST/foodbank create new foodbank
GET/foodbank/{id} retrieve a single foodbank
PUT/foodbank/{ID} update a single foodbank
DELETE/foodbank/{id} delete single foodbank

we do same for dietaryrequirement endpoint

The Router defined the method that handles request and response from different API endpoints. We first of all import the FoodbankModel and dietaryrequirementModel  and use their instances to handle CRUD (Create, Retrieve, Update and Delete) functions of the API.

----------------------------------------------------------------------------------------------------------------------------------------------------
In the model, we import mongoose, created the database schema for foodbank, dietaryrequirement and export their module to make them accessible.

-----------------------------------------------------------------------------------------------------------------------------------------------------
We are done cooking and it is time to test our api endpoints.
Let’s try with the browser. Visit http://localhost:3000/foodbank

-----------------------------------------------------------------------------------------------------------------------------------------------------
To test our endpoints, let use  Postman since it is a very good tool for test and debugging API endpoint.

---------------------------------------------------------------------------------------------------------------------------------------------------
Reference:
https://ddrohan.github.io/wit-wad-2-2018/
https://dev.to/ichtrojan/basic-routing-http-requests-and-crud-operation-with-express-and-mongodb-od2
https://stackoverflow.com/questions/24618499/json-cannot-read-property-of-undefined
https://stackoverflow.com/questions/27244849/getting-a-validation-error-in-mongoose-even-though-files-are-provided
https://stackoverflow.com/questions/42356294/syntaxerror-unexpected-token-in-json-at-position-1/42356369
