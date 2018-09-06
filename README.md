# Serverless REST API with AWS DynamoDB
This example demonstrates CRUD operations on users.
## Setup
Create `users` table with `id` as partition key.
```sh
npm install serverless -g
npm install
export AWS_ACCESS_KEY_ID=XXXXXXXXXXXXXXXXXXXX
export AWS_SECRET_ACCESS_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
## Run in local environment
```sh
serverless offline-start
```
##### Sample output
```sh
Serverless: Starting Offline: dev/us-east-1.

Serverless: Routes for usersCreate:
Serverless: POST /users

Serverless: Routes for usersList:
Serverless: GET /users

Serverless: Routes for usersGet:
Serverless: GET /users/{userId}

Serverless: Routes for usersUpdate:
Serverless: PUT /users/{userId}

Serverless: Routes for usersDelete:
Serverless: DELETE /users/{userId}

Serverless: Offline listening on http://localhost:3000
```

## Deploy
```sh
serverless deploy
```
##### Sample output
```sh
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (6.89 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
....................................................................................
Serverless: Stack update finished...
Service Information
service: myService
stage: dev
region: us-east-1
stack: custom-stack-name
api keys:
  None
endpoints:
  POST - https://ktqsx66gc2.execute-api.us-east-1.amazonaws.com/dev/users
  GET - https://ktqsx66gc2.execute-api.us-east-1.amazonaws.com/dev/users
  GET - https://ktqsx66gc2.execute-api.us-east-1.amazonaws.com/dev/users/{userId}
  PUT - https://ktqsx66gc2.execute-api.us-east-1.amazonaws.com/dev/users/{userId}
  DELETE - https://ktqsx66gc2.execute-api.us-east-1.amazonaws.com/dev/users/{userId}
functions:
  usersCreate: myService-dev-usersCreate
  usersList: myService-dev-usersList
  usersGet: myService-dev-usersGet
  usersUpdate: myService-dev-usersUpdate
  usersDelete: myService-dev-usersDelete
```

[Ref](http://www.serverless.com)