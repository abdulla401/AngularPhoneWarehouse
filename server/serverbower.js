var express = require('express');
var logger = require('morgan');
var fs = require("fs");
var events = require('events');
var router = express.Router();
var app = express();
app.use(logger('dev'));
app.use(express.static(__dirname + '/../bower_components'));

app.listen(3400, function() {
    console.log('App  --  started on port 3400!');
});
