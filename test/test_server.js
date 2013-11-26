var assert = require('assert');
var should = require('should');
var request = require('request');
var supertest = require('supertest');
var api = require('../src/main').api();


describe('jenkins test project', function() {
    it('should got hello jenkins', function() {
        request.get('http://localhost:8090', function(e, r, body) {
            should(body).not.be.equal('Hello Jenkins')
        })
    })
})


describe('jenkins check true', function() {
    it('should be true', function() {
        (1).should.be.ok;
    })
})

describe('jenkins check true 2', function() {
    it('should be true also', function() {
        (1).should.be.ok;
    })
})

describe('jenkins test with supertest', function() {
    it('should locally get hello jenkins', function() {
        supertest(api).get('/').expect(200).end(function(e, r) {
            r.body.should.be.equal('Hello Jenkins');
        })
    })

    it('should locally get welcome home', function() {
        supertest(api).get('/home').expect(200).end(function(e, r) {
            r.body.should.be.equal('Welcome Home');
        })
    })
})
