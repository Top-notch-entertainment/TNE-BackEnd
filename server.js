'use strict';
console.log('server running');

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const mongoose = require('mongoose');

mongoose.connect(
    process.env.URL_DB
)
    .then(() => console.log("Mongo DB is conected!"))
    .catch(e => console.log(e));



const Music = require('./models/Music.js');
const PORT = process.env.PORT || 5005;



app.get('/', (request, response) => {
    response.status(200).send('Welcome');
});


app.listen(PORT, () => console.log(`listening on Port ${PORT}`));