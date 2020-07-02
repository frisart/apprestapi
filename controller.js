'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API berjalan", res)
};

// menampilkan data mahasiswa
exports.tampilkandatamahasiswa = function(req, res){
    var myquery = "SELECT * FROM mahasiswa";

    connection.query(myquery, function(error, rows, fields){
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
            
        }
    });
}; 


// menampilkan berdasarkan ID
exports.tampilkanberdasarkanidmahasiswa = function(req, res){
    let id = req.params.id;
    let myquery = "SELECT * FROM mahasiswa WHERE id_mahasiswa = ?";

    connection.query(myquery,[id], function(error, rows, fields){
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
            // console.log(rows);
        }
    });
};