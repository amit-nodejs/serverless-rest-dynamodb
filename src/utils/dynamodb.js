/************* Wrapper for DynamoDB and can be used as ORM ***************/
'use strict';

// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

// Set the configurations
AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION
});

// Create the DynamoDB service object
const _docClient = new AWS.DynamoDB.DocumentClient();

module.exports.createItem = (paramsData, cb) => {
    var params = {
        TableName: paramsData.tableName,
        Item: paramsData.addVal
    };
    _docClient.put(params, (err, res) => {
        if (err) {
            cb(err, null);
            return;
        }
        cb(null, res);
    });
};

module.exports.updateItem = (paramsData, cb) => {
    var params = {
        TableName: paramsData.tableName,
        Key: paramsData.key,
        UpdateExpression: "set #updateKey = :updateVal",
        ExpressionAttributeValues: {
            ":updateKey": paramsData.updateKey
        },
        ExpressionAttributeNames: {
            "#keyName": paramsData.updateVal
        },
        ReturnValues: "UPDATED_NEW"
    };
    _docClient.update(params, (err, res) => {
        if (err) {
            cb(err, null);
            return;
        }
        cb(null, res);
    });
};

module.exports.updateUser = (paramsData, cb) => {
    var params = {
        TableName: paramsData.tableName,
        Key: paramsData.key,
        ConditionExpression: "id = :userId",
        UpdateExpression: "set firstName = :firstName, lastName = :lastName, email = :email",
        ExpressionAttributeValues: {
            ":firstName": paramsData.updateVal.firstName,
            ":lastName": paramsData.updateVal.lastName,
            ":email": paramsData.updateVal.email,
            ":userId": paramsData.updateVal.id
        }
    };
    _docClient.update(params, (err, res) => {
        if (err) {
            cb(err, null);
            return;
        }
        cb(null, res);
    });
};

module.exports.getItem = (paramsData, cb) => {
    var params = {
        TableName: paramsData.tableName,
        Key: paramsData.key
    };
    _docClient.get(params, (err, res) => {
        if (err) {
            cb(err, null);
            return;
        }
        cb(null, res);
    });
};

module.exports.deleteItem = (paramsData, cb) => {
    var params = {
        TableName: paramsData.tableName,
        Key: paramsData.key
    };
    _docClient.delete(params, (err, res) => {
        if (err) {
            cb(err, null);
            return;
        }
        cb(null, res);
    });
};

module.exports.listItem = (paramsData, cb) => {
    var params = {
        TableName: paramsData.tableName
    };
    _docClient.scan(params, (err, res) => {
        if (err) {
            cb(err, null);
            return;
        }
        cb(null, res);
    });
};