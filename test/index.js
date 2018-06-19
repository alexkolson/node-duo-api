'use strict';

var should = require('chai').should();
var duo = require('../index');

var TEST_USER = 'nodeclient->testuser';
var TEST_USER_ID = '';

describe('Duosecurity Node Client', function() {

    beforeEach(function() {
        this.client = new duo({
            host: process.env.DUO_API_HOST,
            ikey: process.env.DUO_API_IKEY,
            skey: process.env.DUO_API_SKEY
        });
    });

    it('should create an instance of itself', function() {
        this.client.should.be.an('object');
    });

    describe('using promise api', function() {

        describe('the request method', function() {

            it('should retrieve basic account information', function () {
                return this.client.request('get', '/admin/v1/info/summary').then(function (res) {
                    res.stat.should.equal('OK');
                });
            });

            it('should create a new user', function() {
                return this.client.request('post', '/admin/v1/users', {username: TEST_USER}).then(function(res) {
                    res.stat.should.equal('OK');
                    TEST_USER_ID = res.response.user_id;
                })
            });

            it('should retrieve information about the new user', function() {
                return this.client.request('get', '/admin/v1/users', {username: TEST_USER}).then(function(res) {
                    res.stat.should.equal('OK');
                    res.response.length.should.equal(1);
                    res.response.shift().username.should.equal(TEST_USER);
                });
            });

            it('should delete the new user', function() {
                var path = [
                    '/admin/v1/users',
                    TEST_USER_ID
                ].join('/');

                return this.client.request('delete', path).then(function(res) {
                    res.stat.should.equal('OK');
                });
            });

        });

    });

    describe('using callback api', function() {

        describe('the request method', function() {

            it('should retrieve basic account information', function(done) {
                this.client.request('get', '/admin/v1/info/summary', null, function(error, res) {
                    res.stat.should.equal('OK');
                    done();
                });
            });

            it('should create a new user', function(done) {
                this.client.request('post', '/admin/v1/users', {username: TEST_USER}, function(error, res) {
                    res.stat.should.equal('OK');
                    TEST_USER_ID = res.response.user_id;
                    done();
                });
            });

            it('should retrieve information about a user', function(done) {
                this.client.request('get', '/admin/v1/users', {username: TEST_USER}, function(error, res) {
                    res.stat.should.equal('OK');
                    res.response.length.should.equal(1);
                    res.response.shift().username.should.equal(TEST_USER);
                    done();
                });
            });

            it('should delete the new user', function(done) {
                var path = [
                    '/admin/v1/users',
                    TEST_USER_ID
                ].join('/');

                this.client.request('delete', path, null, function(error, res) {
                    res.stat.should.equal('OK');
                    done();
                });
            });

        });

    });

});
