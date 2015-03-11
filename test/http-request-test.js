/**
 * Created by michael.wibmer on 11.03.2015.
 */
var fs = require('fs');
var path = require('path');
var expect = require('chai').expect;
var HttpRequests = require('../lib/http-requests');

var credentials = JSON.parse(fs.readFileSync(path.normalize(__dirname + '/credentials.json', 'utf8')));


describe('HttpRequests', function () {

    //set higher default timeout due to networking
    this.timeout(5000);

    it('should exist', function(done) {
       expect(HttpRequests).to.be.ok;
        done();
    });

    describe('get()', function() {
        it('should fail because of missing credentials', function(done) {

            HttpRequests.get(undefined, null, null,null,null, function(err) {
                expect(err).to.be.ok;
                done();
            });
        });
        it('should fail because of missing path', function(done) {

            HttpRequests.get({apiUser: 'user', apiKey: 'key'}, null, null,null,null, function(err) {
                expect(err).to.be.ok;
                done();
            });
        });
        it('should fail with status 401 because of incorrect user credentials', function(done) {
            var path=['Account'];

            HttpRequests.get({apiUser: 'user', apiKey: 'key'}, path, null,null,null, function(err) {

                expect(err).to.be.ok;
                expect(err.statusCode).to.equal(401);
                done();

            });
        });
        it('should fail with status 404 because of invalid path', function(done) {
            var path=['ThisIsInvalid'];
            HttpRequests.get(credentials, path, null,null,null, function(err) {
                expect(err).to.be.ok;
                expect(err.statusCode).to.equal(404);
                done();
            });
        });

        it('should fail with status 500 because of invalid mask', function(done) {
            var path=['Account'];
            var mask=['(/;']
            HttpRequests.get(credentials, path, mask, null,null, function(err) {
                expect(err).to.be.ok;
                expect(err.statusCode).to.equal(500);

                done();
            });
        });
        it('should fail with status 500 because of using pagination with invalid limit', function(done) {
            var path=['Account', 'Invoices'];

            HttpRequests.get(credentials, path, null, 0, 0, function(err) {

                expect(err).to.be.ok;
                expect(err.statusCode).to.equal(500);

                done();
            });
        });
        it('should successfully return a Softlayer object', function(done) {
            var path=['Account'];

            HttpRequests.get(credentials, path, null, null, null, function(err, res) {

                expect(err).to.equal(null);
                expect(res).to.be.ok;
                expect(res.id).to.equal(credentials.accountId);
                done();
            });
        });

        it('should successfully return a masked Softlayer object', function(done) {
            var path=['Account'];
            var mask=['city'];

            HttpRequests.get(credentials, path, mask, null, null, function(err, res) {
                expect(err).to.equal(null);
                expect(res).to.be.ok;
                expect(res.city).to.be.ok; //we masked with city, so it should be part of the result
                expect(res.firstName).not.to.be.ok; //not part of the mask -> not in the result

                done();
            });
        });

        it('should successfully return a list of invoices with offset 0 and limited to 2 results', function(done) {
            var path=['Account', ['Invoices']];
            var mask=['id'];

            HttpRequests.get(credentials, path, mask, 0, 2, function(err, res) {
                expect(err).to.equal(null);
                expect(res).to.be.ok;
                expect(res.length).to.equal(2);
                done();
            });
        });

    });

});