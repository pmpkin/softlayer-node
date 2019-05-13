'use strict';
var request = require('request');

// Private constants
var _servicePrefix = 'SoftLayer_';

// Private methods
var _isNumberSet = function(value) {
    return value !== undefined && value !== null;
};

var _buildPath = function(credentials, pathElements, mask, filter, offset, limit) {
    //build path
    if (pathElements[0].indexOf(_servicePrefix < 0)) {
        pathElements[0] = _servicePrefix + pathElements[0];
    }
    var path = credentials.apiUrl + pathElements.join('/');

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
        if (!res) {
            if (err) return callback(err, {});
            return callback(new Error('Empty api response.'), {});     
        } else if (res && ((res.statusCode >= 400 && res.statusCode < 600) || res.statusCode < 10)) {

            if (body && res.headers['content-type'] === 'application/json') {
                var error = {};
                try
                {
                   error = JSON.parse(body);
                }
                catch (e)
                {
                    error = { "message":body };
                }
                error.statusCode = res.statusCode;
                return callback(error, {});
            }

            if (err) {
                err.statusCode = res.statusCode;
            } else {
                err = {
                    statusCode: res.statusCode
                };
            }
            return callback(err, {});
        }

        if (res.headers['content-type'] === 'application/json') {
	        var result = {}
            try {
                result = JSON.parse(body)
            } catch (e) {
                result = { "message":body };
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
        url: _buildPath(credentials, pathElements, mask, filter, offset, limit),
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
exports.put = function(credentials, pathElements, offset, limit, headers, parameters, callback) {

    if (!credentials) return callback(new Error('No credentials provided.'), {});
    if (!pathElements || pathElements.length < 1) return callback(new Error('No path provided.'), {});
    if (limit === 0) return callback({ statusCode: 500, error: 'Limit must not be zero.' }, { });

    var requestOptions = {
        url: _buildPath(credentials, pathElements, null, null, offset, limit),
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
exports.post = function(credentials, pathElements, offset, limit, headers, parameters, callback) {

    if (!credentials) return callback(new Error('No credentials provided.'), {});
    if (!pathElements || pathElements.length < 1) return callback(new Error('No path provided.'), {});
    if (limit === 0) return callback({ statusCode: 500, error: 'Limit must not be zero.' }, { });

    var requestOptions = {
        url: _buildPath(credentials, pathElements, null, null, offset, limit),
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
exports.delete = function(credentials, pathElements, offset, limit, headers, parameters, callback) {

    if (!credentials) return callback(new Error('No credentials provided.'), {});
    if (!pathElements || pathElements.length < 1) return callback(new Error('No path provided.'), {});
    if (limit === 0) return callback({ statusCode: 500, error: 'Limit must not be zero.' }, { });

    var requestOptions = {
        url: _buildPath(credentials, pathElements, null, null, offset, limit),
        headers: _buildHeaders(credentials, headers),
        json: {
            parameters: parameters.constructor === Array ? parameters : [parameters]
        }
    };
    request.delete(requestOptions, _handleResponse(callback));
};