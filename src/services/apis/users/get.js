'use strict';

const _uuid = require('uuid');
const _async = require('async');
const _dynamodb = require('../../../utils/dynamodb');

module.exports.get = (data, callback) => {

    var getItem = (cb) => {
        var params = {
            tableName: process.env.TABLE_USER,
            key: { id: data }
        };
        _dynamodb.getItem(params, (err, res) => {
            if (err) {
                cb(err, null);
                return;
            }
            cb(null, res.Item);
        });
    };

    var otherOps = (result, cb) => {
        // Do something
        cb(null, result);
    };

    _async.waterfall([
        getItem,
        otherOps
    ], (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, res);
    });
};

module.exports.list = (data, callback) => {

    var listItem = (cb) => {
        var params = {
            tableName: process.env.TABLE_USER
        };
        _dynamodb.listItem(params, (err, res) => {
            if (err) {
                cb(err, null);
                return;
            }
            cb(null, res.Items);
        });
    };

    var otherOps = (result, cb) => {
        // Do something
        cb(null, result);
    };

    _async.waterfall([
        listItem,
        otherOps
    ], (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, res);
    });
};