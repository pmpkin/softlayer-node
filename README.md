
# softlayer-node

[Softlayer API](http://sldn.softlayer.com/reference/softlayerapi) wrapper for node. The module provides a simple fluent interface to construct API calls.

[![Build Status](https://travis-ci.org/pmpkin/softlayer-node.svg)](https://travis-ci.org/pmpkin/softlayer-node)

[![npm version](https://badge.fury.io/js/softlayer-node.svg)](https://badge.fury.io/js/softlayer-node)

## Installation
Install the npm package via npm:
```
npm install softlayer-node --save
```
Or yarn:
```
yarn add softlayer-node
```
## Authentication
Every request to the SoftLayer REST API must be authenticated. Internally the wrapper uses basic authentication using the API User and API key. You find these values on the Softlayer portal. To provide credentials to the wrapper, you have two options
- by node environment variables SOFTLAYER_API_USER and SOFTLAYER_API_KEY.
- by passing user and key to the constructor of the API client
- by using the auth() method.

*Please note:* Setting credentials in the constructor overwrites the values coming from the environment variables, and the auth() method overwrites both environment variables and the values set in the constructor.

## REST API Version
To configure the version of the REST API, do one of the following:
- add environment variable SOFTLAYER_API_URL with the url you need (for example https://api.softlayer.com/rest/v3.1/). Include the trailing slash!
- add the url as a third parameter to the constructor of the API client
- add the url as a third parameter to the auth() method

The SoftLayer Client exposes v3 and v3.1 urls as constants: SoftLayer.API_URL_V3 and SoftLayer.API_URL_V3_1.
*Please note:* Setting the url in the constructor overwrites the value coming from the environment variable, and the auth() method overwrites both environment variable and the value set in the constructor.

## Usage
First, require the module and create an instance of the client:
```javascript
var  SoftLayer = require('softlayer-node');
var  client = new  SoftLayer();
```

#### Fluent interface
The module exposes the following chainable methods:
##### path()
With this method the URL is constructed. You can pass an array of path elements, or simply string arguments to the method.
```javascript
client.path('PathElement1','PathElement1').path(['PathElement3', 'PathElement4']);
```
*Please note:* Dont't add the 'SoftLayer_' prefix to the path elements, as only the first element has to have this prefix and the client takes care of this.

For exmaple: Softlayer_Billing_Invoice becomes just Billing_Invoice.

##### id()

This method is an alias for the path() method. Use it to add an id of a SoftLayer object to the path.

```javascript
client.id(1234);
```

##### SoftLayer service types

Although you can build your requests with the aforementioned methods, the wrapper also provides methods for all SoftLayer services. These methods work the same way as the the path() method.

For example:

```javascript
client.billingInvoice().id(12345);
```

will create the following request (using v3 api url):

```
/rest/v3/SoftLayer_Billing_Invoice/12345
```

As you can see, the method name starts with a lower case and the underscores are removed. In the resulting URL, the correct SoftLayer service name is concstructed. See [here](http://sldn.softlayer.com/reference/services/) for a complete list of available services.
  
##### auth()

This method sets the credentials and optionally the api url.

```javascript
client.auth(apiUser, apiKey, apiUrl);
```

##### mask()

Using this method you can add an object mask to the request. You can pass an array of mask elements, or simply string arguments to the method.

```javascript
client.mask('maskElement1','maskElement2').mask(['maskElement3', 'maskElement4']);
```

##### filter()

Adds a filter object to the resulting api call. Expects a valid filter object. See [here](https://sldn.softlayer.com/de/node/274051) for the documentation on object filters.

```javascript
client.filter(jsonObject);
```

##### resultLimit()

To use pagination, you can add offset and limit to the request.

```javascript
client.resultLimit(offset, limit);
```

##### headers()

By default, the API client returns uses application/json. You can use this method to set different request headers.

```javascript
client.headers({
'Content-Type':  'application/json'
});

```

##### get(), put(), post(), delete()

Calling one of these methods, the request is submitted. This method returns a Promise. If you prefer node callbacks, you can pass a callback to the method.

```javascript
//Using Promises:

client.get()
.then(function(result) {
//result contains the result of the request
}),function(reason) {
//the Promise has been rejected. reason contains the error.
});

//Using node callback:
client.get(function(err,res) {

});

```

##### Chaining it all together

```javascript
var  SoftLayer = require('softlayer-node');
var  client = new  SoftLayer();
client
.auth('youruser', 'yourkey')
.path('Hardware_Server', 1234, 'NetworkComponents', '5678')
.mask('datacenter','operatingSystem.passwords')
.get()
.then(function(result) {
  // :-)
}, function(error) {
  // :-(
});
```

## Tests

To run the tests open a command line and type

```
npm run test
```

## eslint

To run eslint open a command line and type

```
npm run eslint
```

You will need to have gulp and mocha installed to run the tests. **Important:** The tests make real http requests (currently only GET) to a SoftLayer account, which has to be configured in a file called credentials.json in the test folder.

This file must have the following content:

``` json
{
"accountId": "[accountId]",
"apiUser": "[api user]",
"apiKey": "[api key]"
}
```

Don't put these informations in a source code repository ;-)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D