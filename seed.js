'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

const Music = require('./models/music');

async function seed() {

    await mongoose.connect(
        process.env.URL_DB
    )
            .then(() => console.log('Mongo DB is here'))
            .catch(e => console.log(e));

    
}