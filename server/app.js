const mongoose = require('mongoose');
const express = require('express');

var app = express();

require('dotenv').config();

//db

mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => console.log('DB CONNECTED'))
    .catch(err => console.log("DB CONNECTION ERROR ", err));

//port
const port = process.env.PORT;
//listener
const server = app.listen(port, () =>
    console.log(`Server is running on port : ${port}`));
