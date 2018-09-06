'use strict';

const _uuid = require('uuid');
const _async = require('async');
const _dynamodb = require('../../../utils/dynamodb');

module.exports.do = (data) => {
    return new Promise((resolve, reject) => {
        var params = {
            tableName: process.env.TABLE_USER,
            key: { id: data.id },
            updateVal: data
        };
        _dynamodb.updateUser(params, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(params.updateVal);
        });
    });
};