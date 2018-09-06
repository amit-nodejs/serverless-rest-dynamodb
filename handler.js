/***************** Wrapper for services and can be used as middleware *****************/
'use strict';

const _apiConfig = require('./src/config/apiConfig');
const _userCreate = require('./src/services/apis/users/create');
const _userUpdate = require('./src/services/apis/users/update');
const _userDelete = require('./src/services/apis/users/delete');
const _userGet = require('./src/services/apis/users/get');

module.exports.usersCreate = (event, context, callback) => {
  try {

    _userCreate.do(JSON.parse(event.body), (err, res) => {
      if (err) {
        callback(null, {
          statusCode: _apiConfig.STATUS_CODE.ERROR,
          body: process.env.DEBUG == 1 ? JSON.stringify(err) : JSON.stringify(_apiConfig.ERROR_MSG)
        });
        return;
      }
      callback(null, {
        statusCode: _apiConfig.STATUS_CODE.SUCCESS,
        body: res ? JSON.stringify(res) : JSON.stringify('OK')
      });
    });

  } catch (e) {

    callback(null, {
      statusCode: _apiConfig.STATUS_CODE.ERROR,
      body: process.env.DEBUG == 1 ? JSON.stringify(e) : JSON.stringify(_apiConfig.ERROR_MSG)
    });

  }
};

module.exports.usersDelete = (event, context, callback) => {
  try {

    _userDelete.do(event.pathParameters.userId, (err, res) => {
      if (err) {
        callback(null, {
          statusCode: _apiConfig.STATUS_CODE.ERROR,
          body: process.env.DEBUG == 1 ? JSON.stringify(err) : JSON.stringify(_apiConfig.ERROR_MSG)
        });
        return;
      }
      callback(null, {
        statusCode: _apiConfig.STATUS_CODE.SUCCESS,
        body: res ? JSON.stringify(res) : JSON.stringify('OK')
      });
    });

  } catch (e) {

    callback(null, {
      statusCode: _apiConfig.STATUS_CODE.ERROR,
      body: process.env.DEBUG == 1 ? JSON.stringify(e) : JSON.stringify(_apiConfig.ERROR_MSG)
    });

  }
};

module.exports.usersGet = (event, context, callback) => {
  try {

    _userGet.get(event.pathParameters.userId, (err, res) => {
      if (err) {
        callback(null, {
          statusCode: _apiConfig.STATUS_CODE.ERROR,
          body: process.env.DEBUG == 1 ? JSON.stringify(err) : JSON.stringify(_apiConfig.ERROR_MSG)
        })
        return;
      }
      callback(null, {
        statusCode: res ? _apiConfig.STATUS_CODE.SUCCESS : _apiConfig.STATUS_CODE.NOT_FOUND,
        body: res ? JSON.stringify(res) : JSON.stringify('NOT FOUND')
      });
    });

  } catch (e) {

    callback(null, {
      statusCode: _apiConfig.STATUS_CODE.ERROR,
      body: process.env.DEBUG == 1 ? JSON.stringify(e) : JSON.stringify(_apiConfig.ERROR_MSG)
    });

  }
};

module.exports.usersList = (event, context, callback) => {
  try {

    _userGet.list(null, (err, res) => {
      if (err) {
        callback(null, {
          statusCode: _apiConfig.STATUS_CODE.ERROR,
          body: process.env.DEBUG == 1 ? JSON.stringify(err) : JSON.stringify(_apiConfig.ERROR_MSG)
        });
        return;
      }
      callback(null, {
        statusCode: _apiConfig.STATUS_CODE.SUCCESS,
        body: res ? JSON.stringify(res) : JSON.stringify('OK')
      });
    });

  } catch (e) {
    
    callback(null, {
      statusCode: _apiConfig.STATUS_CODE.ERROR,
      body: process.env.DEBUG == 1 ? JSON.stringify(e) : JSON.stringify(_apiConfig.ERROR_MSG)
    });

  }
};

// Async Await - For nodejs8 +
module.exports.usersUpdate = async (event, context) => {
  try {
    let res = await _userUpdate.do(Object.assign(JSON.parse(event.body), { id: event.pathParameters.userId }));

    return (null, {
      statusCode: _apiConfig.STATUS_CODE.SUCCESS,
      body: res ? JSON.stringify(res) : JSON.stringify('OK')
    });

  } catch (e) {
    return (null, {
      statusCode: _apiConfig.STATUS_CODE.ERROR,
      body: process.env.DEBUG == 1 ? JSON.stringify(e) : JSON.stringify(_apiConfig.ERROR_MSG)
    });

  }
};