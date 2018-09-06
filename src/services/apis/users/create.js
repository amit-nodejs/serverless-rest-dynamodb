'use strict';

const _uuid = require('uuid');
const _async = require('async');
const _dynamodb = require('../../../utils/dynamodb');

module.exports.do = (data, callback) => {

    var createItem = (cb) => {
        var params = {
            tableName: process.env.TABLE_USER,
            addVal: Object.assign({ id: _uuid.v4() }, data)
        };
        _dynamodb.createItem(params, (err, res) => {
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
        createItem,
        otherOps
    ], (err, res) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, res);
    });
};