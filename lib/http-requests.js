'use strict';
var request = require('request');

// Private constants
var _baseUrl = 'https://api.softlayer.com/rest/v3/';
var _servicePrefix = 'SoftLayer_';

// Private methods
var _isNumberSet = function(value) {
    return value !== undefined && value !== null;
};

var _buildPath = function(pathElements, mask, filter, offset, limit) {
    //build path
    if (pathElements[0].indexOf(_servicePrefix < 0)) {
        pathElements[0] = _servicePrefix + pathElements[0];
    }
    var path = _baseUrl + pathElements.join('/');

    //add object mask if available
    if (mask && mask.length > 0) {
        path += path.indexOf('?') > -1 ? '&' : '?';
        path += 'objectMask=' + mask.join(';');
    }

    //add object filter if available
    if (filter) {
        path += path.indexOf('?') > -1 ? '&' : '?';
        path += 'objectFilter=' + JSON.stringify(filter);
    }

    //add pagination if available
    if (_isNumberSet(offset) && _isNumberSet(limit)) {
        path += path.indexOf('?') > -1 ? '&' : '?';
        path += 'resultLimit=' + offset + ',' + limit;
    }
    return path;
};

var _buildHeaders = function(credentials, headers) {
    //Basic authentication
    var auth = 'Basic ' + new Buffer(credentials.apiUser + ':' + credentials.apiKey).toString('base64');

    headers = headers || {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    headers.Authorization = auth;
    return headers;
};

var _handleResponse = function(callback) {
    return function(err, res, body) {
        if (err) {
            console.log('Softlayer API - connection failure');
            return callback(err, {});
        }
        else if (res.statusCode < 600 && res.statusCode >= 400) {
            console.log('Softlayer API - bad request');
            if (body && res.headers['content-type'] === 'application/json') {
                var error = {};
                try
                {
                    error = JSON.parse(body);
                }
                catch (e)
                {
                    error = {"message":body}
                }
                error.statusCode = res.statusCode;
                return callback(error, {});
            }
            err = {
                statusCode: res.statusCode
            };
            return callback(err, {});
        }

        if (res.headers['content-type'] === 'application/json') {
            var result = {}
            try
            {
                result = JSON.parse(body)
            }
            catch (e)
            {
                result = {"message":body}
            }
            return callback(null, result);
        }

        return callback(null, body);
    };
};

/**
 * Sends a GET request to the given softlayer rest endpoint.
 * @param credentials object containing apiUser and apiKey
 * @param pathElements an array of path elements to construct the REST url
 * @param mask object mask
 * @param offset pagination offset
 * @param limit pagination result limit
 * @param headers custom headers for the request
 * @param callback callback funtion
 * @return undefined
 */
exports.get = function(credentials, pathElements, mask, filter, offset, limit, headers, callback) {

    if (!credentials) return callback(new Error('No credentials provided.'), {});
    if (!pathElements || pathElements.length < 1) return callback(new Error('No path provided.'), {});
    if (limit === 0) return callback({ statusCode: 500, error: 'Limit must not be zero.' }, { });

    var requestOptions = {
        url: _buildPath(pathElements, mask, filter, offset, limit),
        headers: _buildHeaders(credentials, headers)
    };
    request.get(requestOptions, _handleResponse(callback));
};

/**
 * Sends a PUT request to the given softlayer rest endpoint.
 * @param {Object} credentials containing apiUser and apiKey
 * @param pathElements an array of path elements to construct the REST url
 * @param headers custom headers for the request
 * @param parameters parameters for the the request body
 * @param callback
 */
exports.put = function(credentials, pathElements, headers, parameters, callback) {

    if (!credentials) return callback(new Error('No credentials provided.'), {});
    if (!pathElements || pathElements.length < 1) return callback(new Error('No path provided.'), {});

    var requestOptions = {
        url: _buildPath(pathElements),
        headers: _buildHeaders(credentials, headers),
        json: {
            parameters: parameters.constructor === Array ? parameters : [parameters]
        }
    };

    request.put(requestOptions, _handleResponse(callback));
};

/**
 * Sends a POST request to the given softlayer rest endpoint.
 * @param {Object} credentials containing apiUser and apiKey
 * @param pathElements an array of path elements to construct the REST url
 * @param headers custom headers for the request
 * @param parameters parameters for the the request body
 * @param callback
 */
exports.post = function(credentials, pathElements, headers, parameters, callback) {

    if (!credentials) return callback(new Error('No credentials provided.'), {});
    if (!pathElements || pathElements.length < 1) return callback(new Error('No path provided.'), {});

    var requestOptions = {
        url: _buildPath(pathElements),
        headers: _buildHeaders(credentials, headers),
        json: {
            parameters: parameters.constructor === Array ? parameters : [parameters]
        }
    };

    request.post(requestOptions, _handleResponse(callback));
};


/**
 * Sends a DELETE request to the given softlayer rest endpoint.
 * @param credentials object containing apiUser and apiKey
 * @param pathElements an array of path elements to construct the REST url
 * @param headers custom headers for the request
 * @param parameters parameters for the the request body
 * @param callback
 */
exports.delete = function(credentials, pathElements, headers, parameters, callback) {

    if (!credentials) return callback(new Error('No credentials provided.'), {});
    if (!pathElements || pathElements.length < 1) return callback(new Error('No path provided.'), {});

    var requestOptions = {
        url: _buildPath(pathElements),
        headers: _buildHeaders(credentials, headers),
        json: {
            parameters: parameters.constructor === Array ? parameters : [parameters]
        }
    };
    request.delete(requestOptions, _handleResponse(callback));
};
