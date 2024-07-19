// importar pacotes
const express = require('express');
const dotenv = require('dotenv').config();

//instanciar express
const app = express();

//setar a porta
app.set('port', process.env.PORT || 3000);

module.exports = app;