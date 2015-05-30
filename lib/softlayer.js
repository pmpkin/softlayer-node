'use strict';

/**
 * Created by Michael on 26.02.14.
 */
var Promise = require('bluebird');
var HttpRequests = require('./http-requests');
var services = require('./services');

/**
 * Constructor
 * @constructor
 */
var SoftLayer = function SoftLayer(apiUser, apiKey) {
    if (process.env.SOFTLAYER_API_USER && process.env.SOFTLAYER_API_KEY) {
        this.credentials = {
            apiUser: process.env.SOFTLAYER_API_USER,
            apiKey: process.env.SOFTLAYER_API_KEY
        };
    } else {
        this.credentials = {};
    }
    if (apiUser && apiKey) {
        this.credentials = {
            apiUser: apiUser,
            apiKey: apiKey
        };
    }
};

module.exports = SoftLayer;

//private methods
function _getDefaults() {
    return {
        pathElements: [],
        mask: [],
        offset: null,
        limit: null,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
}

/**
 * Appends the arguments of this function to the path of the prepared service request.
 * You can pass an array of elements or simply or use a variable length of arguments (strings, numbers).
 * @param elements an array of elements to add to the path
 * @returns {SoftLayer}
 */
SoftLayer.prototype.path = function (elements) {
    if (!this.service) this.service = _getDefaults();
    if (elements && elements.constructor === Array) {
        this.service.pathElements.push.apply(this.service.pathElements, elements);
    } else if (arguments) {
        this.service.pathElements.push.apply(this.service.pathElements, arguments);
    }
    return this;
};

SoftLayer.prototype.headers = function(headers) {
    if (!this.service) this.service = _getDefaults();
    this.service.headers = headers;
    return this;
};

/**
 * Appends the given id to the path of the prepared service request. This method is
 * basically an alias for path()
 * @param id a string or number identifying a SoftLayer object
 * @returns {SoftLayer}
 */
SoftLayer.prototype.id = function(id) {
    return this.path(id);
};

/**
 * Adds the given object mask to the prepared prepared service request.
 * You can pass an array to this method or simply or use a variable length of arguments (strings, numbers).
 * @param mask an array of mask objects to add to the path
 * @returns {SoftLayer}
 */
SoftLayer.prototype.mask = function (mask) {
    if (!this.service) this.service = _getDefaults();
    if (mask && mask.constructor === Array) {
        this.service.mask.push.apply(this.service.mask, mask);
    } else if (arguments) {
        this.service.mask.push.apply(this.service.mask, arguments);
    }
    return this;
};

/**
 * Adds offset and limit to the prepared service request.
 * @param offset
 * @param limit
 * @returns {SoftLayer}
 */
SoftLayer.prototype.resultLimit = function (offset, limit) {
    if (!this.service) this.service = _getDefaults();
    this.service.offset = offset;
    this.service.limit = limit;
    return this;
};

/**
 * Resets the prepared service request.
 * @returns {SoftLayer}
 */
SoftLayer.prototype.reset = function () {
    this.service = undefined;
    return this;
};

/**
 * Adds credentials to the prepared service request. If credentials had been set using environmental variables,
 * these credentials are overriden.
 * @param apiUser
 * @param apiKey
 * @returns {SoftLayer}
 */
SoftLayer.prototype.auth = function (apiUser, apiKey) {
    if (!this.service) this.service = _getDefaults();
    this.credentials.apiUser = apiUser;
    this.credentials.apiKey = apiKey;
    return this;
};

/**
 * GET the prepared service request.
 * @param callback optional node style callback
 * @returns {bluebird} a bluebird promise
 */
SoftLayer.prototype.get = function (callback) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        HttpRequests.get(_this.credentials, _this.service.pathElements, _this.service.mask, _this.service.offset, _this.service.limit,_this.service.headers, function (error, result) {
            _this.reset();
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    }).nodeify(callback);
};


services(SoftLayer);