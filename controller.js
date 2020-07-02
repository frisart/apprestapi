'use strict';

var reponse = require('./res');
var connection = require('./koneksi');
const { response } = require('express');

exports.index = function(req, res){
    response.ok("Aplikasi REST API berjalan");
}