const express = require('express');
const bodyParser = require('body-parser');

var morgan = require('morgan');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// panggil routes
var routes = require('./routes');
const { index } = require('./controller');
routes(app);

// daftarkan menu router dari index
app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log('Server started on port');
});