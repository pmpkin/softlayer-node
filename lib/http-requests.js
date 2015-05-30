'use strict';
var https = require('https');

// Private constants
var _baseUrl = 'api.softlayer.com';
var _basePath = '/rest/v3/';
var _servicePrefix = 'SoftLayer_';

// Private methods
function _isNumberSet(value) {
    return value!==undefined && value!==null;
}

/**
 * Sends a GET request to the given softlayer rest endpoint.
 * @param credentials object containing apiUser and apiKey
 * @param pathElements an array of path elements to construct the REST url
 * @param mask object mask
 * @param offset pagination offset
 * @param limit pagination result limit
 * @param callback
 */
exports.get = function(credentials, pathElements, mask, offset, limit, headers, callback) {

    if (!credentials) return callback(new Error('No credentials provided.'), {});
    if (!pathElements || pathElements.length < 1) return callback(new Error('No path provided.'), {});


    //build path
    pathElements[0] = pathElements[0].indexOf(_servicePrefix < 0) ? (_servicePrefix + pathElements[0]) : pathElements[0];
    var path = _basePath + pathElements.join('/');


    //add object mask if available
    if (mask && mask.length > 0) {
        path += '?objectMask=' + mask.join(';');
    }

    //add pagination if available
    if (_isNumberSet(offset) && _isNumberSet(limit)) {
        if (limit === 0) return callback({statusCode: 500, error: 'Limit must not be zero.'}, {});
        path += (path.indexOf('?') > -1 ? '&' : '?');
        path += 'resultLimit=' + offset + ',' + limit;
    }
    //Basic authentication
    var auth = 'Basic ' + new Buffer(credentials.apiUser + ':' + credentials.apiKey).toString('base64');

    headers = headers || {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    headers['Authorization'] = auth;

    var request_options = {
        host: _baseUrl,
        path: path,
        port: 443,
        method: 'GET',
        rejectUnauthorized: false,
        headers: headers
    };

    // Set up the request
    var req = https.request(request_options, function(res) {
        res.setEncoding('utf8');

        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        });

        res.on('end', function() {
            if (res.statusCode >= 400 && res.statusCode < 600 || res.statusCode < 10) {
                var error;
                if (data) {
                    error = JSON.parse(data);
                    error.statusCode = res.statusCode;
                } else {
                    error = {
                        statusCode: res.statusCode
                    };
                }
                callback(error, {});
            } else {
                if (headers['Content-Type'] === 'application/json') {
                    callback(null, JSON.parse(data));
                } else {
                    callback(null, data);
                }
            }
        });
    });

    req.on('error', function(error) {
        callback(error, {});
    });

    req.end();
};