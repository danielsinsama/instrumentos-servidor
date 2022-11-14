const express = require('express');
const { dbConnection } = require('./database/database');
const {PORT} = require('./database/config')
// const {config} = require("./database/config")

const cors = require('cors');

require('dotenv').config();

const app = express();

dbConnection();

//lectura y parseo
app.use(express.json());

app.use(cors());

// app.use('/api/auth', require('./routes/auth'));
app.use('/api/instrumentos', require('./routes/instrumentos'));


app.listen(PORT)
console.log("Server on port", PORT);