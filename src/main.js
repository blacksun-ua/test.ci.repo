var http = require('http');
var express = require('express');

module.exports.api = function() {
    var app = express();
    app.get('/', function(req, res) {
        res.send('Hello Jenkins');
    })
    return app;
}
