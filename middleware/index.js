var express = require('express'); 
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');
// dafterkan menu regitrasi 
router.post('/api/v1/register', auth.registrasi);
// dafterkan menu login
router.post('/api/v1/login', auth.login);

router.get('/api/v1/rahasia', verifikasi(), auth.halamanrahasia);

module.exports = router;