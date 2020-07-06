var express = require('express'); 
var auth = require('./auth');
var router = express.Router();

// dafterkan menu regitrasi 
router.post('/api/v1/register', auth.registrasi);

module.exports = router;