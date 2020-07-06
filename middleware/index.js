var express = require('express'); 
var auth = require('./auth');
var router = express.Router();

// dafterkan menu regitrasi 
router.post('/api/v1/register', auth.registrasi);
// dafterkan menu login
router.post('/api/v1/login', auth.login);

module.exports = router;