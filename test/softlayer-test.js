var Promise = require('bluebird');
var expect = require('chai').expect;
var SoftLayer = require('../lib/softlayer');
var credentials = require('./test-utils').loadCredentials();

describe('SoftLayer API', function () {
    //set higher default timeout due to networking
    this.timeout(5000);

    it('should instantiate with credentials set via node environment variables', function(done) {

        process.env.SOFTLAYER_API_USER = "apiuser";
        process.env.SOFTLAYER_API_KEY = "apikey";

        var client = new SoftLayer();

        expect(client.credentials).to.exist;
        expect(client.credentials.apiKey).to.exist;
        expect(client.credentials.apiUser).to.exist;

        done();
    });

    describe('path()', function() {

        it('should add a path element to the prepared api object', function(done) {

            var client = new SoftLayer();


            client.path('Billing_Invoice');
            expect(client.service).to.exist;
            expect(client.service.pathElements).to.exist
            expect(client.service.pathElements).not.to.be.empty;
            expect(client.service.pathElements[0]).to.equal('Billing_Invoice');

            done();
        });

        it('should add  multiple path elements to the prepared api object', function(done) {

            var client = new SoftLayer();
            client.path('Dns_Domain', 1234, 'ResourceRecors').path('5678');
            expect(client.service.pathElements.length).to.be.equal(4);

            done();
        });
        it('should add  multiple path elements as an array to the prepared api object', function(done) {

            var client = new SoftLayer();
            client.path(['Dns_Domain', 1234, 'ResourceRecors']).path('5678');
            expect(client.service.pathElements.length).to.be.equal(4);

            done();
        });
        it('should have Softlayer services attached to the prototype', function(done) {

            var client = new SoftLayer();
            client.dnsDomain().path(1234).resourceGroup();
            expect(client.service.pathElements[0]).to.equal('Dns_Domain');
            expect(client.service.pathElements[1]).to.equal(1234);
            expect(client.service.pathElements[2]).to.equal('Resource_Group');

            done();
        });
    });

    describe('id()', function() {
        it('should add an id to the path of the prepared api object', function(done) {

            var client = new SoftLayer();
            client.billingInvoice().id(1234);
            expect(client.service.pathElements.length).to.be.equal(2);
            expect(client.service.pathElements[1]).to.be.equal(1234);

            done();
        });
    });

    describe('auth()', function() {

        it('should set apiKey and apiUser', function(done) {

            process.env.SOFTLAYER_API_USER = "apiuser";
            process.env.SOFTLAYER_API_KEY = "apikey";

            var client = new SoftLayer();
            client.auth('user', 'key');
            expect(client.credentials).to.exist;
            expect(client.credentials.apiUser).to.equal('user');
            expect(client.credentials.apiKey).to.equal('key');

            done();
        });
    });

    describe('resultLimit()', function() {

        it('should set offset and limit', function(done) {

            var client = new SoftLayer();
            client.resultLimit(1, 2);
            expect(client.service.offset).to.equal(1);
            expect(client.service.limit).to.equal(2);

            done();
        });
    });

    describe('mask()', function() {

        it('should set object mask', function(done) {

            var client = new SoftLayer();
            var mask = ['datacenter','operatingSystem', 'networkComponents'];
            client.mask(mask);
            expect(client.service.mask[0]).to.equal(mask[0]);
            expect(client.service.mask[1]).to.equal(mask[1]);
            expect(client.service.mask[2]).to.equal(mask[2]);
            done();
        });

        it('should set object mask using varargs', function(done) {

            var client = new SoftLayer();
            client.mask('datacenter','operatingSystem', 'networkComponents');
            expect(client.service.mask[0]).to.equal('datacenter');
            expect(client.service.mask[1]).to.equal('operatingSystem');
            expect(client.service.mask[2]).to.equal('networkComponents');
            done();
        });
    });

    describe('chaining methods', function() {

        it('should work', function(done) {

            var client = new SoftLayer();
            var mask = ['datacenter','operatingSystem', 'networkComponents'];
            client.mask(mask).path('Billing_Invoice').resultLimit(1,2);
            expect(client.service.mask[0]).to.equal(mask[0]);
            expect(client.service.mask[1]).to.equal(mask[1]);
            expect(client.service.mask[2]).to.equal(mask[2]);
            expect(client.service.pathElements[0]).to.equal('Billing_Invoice');
            expect(client.service.offset).to.equal(1);
            expect(client.service.limit).to.equal(2);
            done();

        });
    });

    describe('reset()', function() {

        it('should reset prepared service object', function(done) {

            var client = new SoftLayer();
            var mask = ['datacenter','operatingSystem', 'networkComponents'];
            client.mask(mask).path('Billing_Invoice').resultLimit(1,2).reset();
            expect(client.service).to.equal(undefined);
            done();

        });
    });

    describe('get()', function() {

        it('should successfully return a masked Softlayer object, and reset the internal service object', function(done) {

            var client = new SoftLayer()
                .path('Account')
                .mask(['id'])
                .auth(credentials.apiUser, credentials.apiKey)
                .get()
                .then(function(res) {
                    expect(res).to.be.ok;
                    expect(res.id).to.equal(credentials.accountId);
                    expect(client.service).to.not.be.ok;
                })
                .catch(function(err) {
                    expect(err).to.equal(null);
                })
                .finally(function() {
                    done();
                });
        });

        it('should successfully return a masked Softlayer object using node callback', function(done) {


            new SoftLayer()
                .path('Account')
                .mask(['id'])
                .auth(credentials.apiUser, credentials.apiKey)
                .get(function(err, res) {
                    expect(err).to.equal(null);
                    expect(res).to.be.ok;
                    expect(res.id).to.equal(credentials.accountId);

                })
                .finally(function() {
                    done();
                })
        });
    });

    describe('headers()', function() {

        it('should successfully return a Softlayer object as xml', function (done) {

            var client = new SoftLayer()
                .path('Account')
                .mask(['id'])
                .auth(credentials.apiUser, credentials.apiKey)
                .headers({
                    'Accept': 'application/xml',
                    'Content-Type': 'application/xml'
                })
                .get()
                .then(function (res) {
                    expect(res).to.be.ok;
                    expect(res).to.contains('?xml');
                    expect(client.service).to.not.be.ok;
                })
                .catch(function (err) {
                    expect(err).to.equal(null);
                })
                .finally(function () {
                    done()
                });

        });
    });

});
