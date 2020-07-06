'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilkandatamahasiswa);

    app.route('/tampil/:id')
        .get(jsonku.tampilkanberdasarkanidmahasiswa);

    app.route('/tambah')
        .post(jsonku.tambahmahasiswa);

    app.route('/ubah')
        .put(jsonku.ubahDataMahasiswa);

    app.route('/hapus')
        .delete(jsonku.hapusDataMahasiswa);

    app.route('/tampilmatakuliah')
        .get(jsonku.tampilgroupmatakuliah);
}