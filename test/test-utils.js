var fs = require('fs');
var path = require('path');

exports.loadCredentials = function() {
    var credentials = null;
    try {
        credentials = JSON.parse(fs.readFileSync(path.normalize(__dirname + '/credentials.json', 'utf8')));
    } catch (e) {
        //no credentials
    }

    if (!credentials &&  process.env.SOFTLAYER_API_ACCOUNT && process.env.SOFTLAYER_API_USER && process.env.SOFTLAYER_API_KEY) {
        credentials = {
            accountId:  process.env.SOFTLAYER_API_ACCOUNT,
            apiUser:  process.env.SOFTLAYER_API_USER,
            apiKey:  process.env.SOFTLAYER_API_USER,
            apiUrl:  process.env.SOFTLAYER_API_URL
        }
    }
    return credentials || {};
}
