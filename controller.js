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

// menambahakan Data mahasiswa
exports.tambahmahasiswa = function(req, res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    var myquery = "INSERT INTO mahasiswa (nim, nama, jurusan) values (?, ?, ?)";
    var nvalue = [nim, nama, jurusan];

    connection.query(myquery, nvalue, function(error, rows, fields){
        if(error) throw error;
        response.ok("Berhasil Menambah Data", res);
    });
};

// Ubah Data Mahasiswa
exports.ubahDataMahasiswa = function(req, res){
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    var myquery = "UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa =?";
    var nvalue = [nim, nama, jurusan, id];
    connection.query(myquery,nvalue, function(error, rows, fields){
        if(error) throw error;
        response.ok("Berhasil Ubah Data", res);
    });
};


// hapus Data Mahasiswa Berdasrkan Id
exports.hapusDataMahasiswa = function(req, res){
    var id = req.body.id_mahasiswa;

    var myquery = "DELETE FROM mahasiswa WHERE id_mahasiswa = ?";
    var nvalue = [id];

    connection.query(myquery, nvalue, function(error, rows, fields){
        if(error) throw error;
        response.ok("Data Berhasil dihapus", res);
    });

};


// menampilakn matakuliah group 
exports.tampilgroupmatakuliah = function(req, res){

    var myquery = "SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa";

    connection.query(myquery, function(error, rows, fields){
        if(error) throw error;
        response.okmatakuliah(rows, res);
        // console.log(rows);
    })
};