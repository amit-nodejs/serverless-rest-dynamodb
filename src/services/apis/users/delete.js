'use strict';

const _uuid = require('uuid');
const _async = require('async');
const _dynamodb = require('../../../utils/dynamodb');

module.exports.do = (data, callback) => {

    var deleteItem = (cb) => {
        var params = {
            tableName: process.env.TABLE_USER,
            key: { id: data }
        };
        _dynamodb.deleteItem(params, (err, res) => {
            if (err) {
                cb(err, null);
                return;
            }
            cb(null, params.addVal);
        });
    };

    var otherOps = (result, cb) => {
        // Do something
        cb(null, result);
    };

    _async.waterfall([
        deleteItem,
        otherOps
    ], (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, res);
    });
};