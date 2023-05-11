'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

const Music = require('./models/music');
const Movie = require('./models/movie');

async function seed() {

    await mongoose.connect(
        process.env.URL_DB
    )
        .then(() => console.log('Mongo DB is here'))
        .catch(e => console.log(e));

    await Music.create([{
        username: 'Johnny Bravo',
        email: 'tmaupin2236@gmail.com'
    }]);
    console.log('Johnny is here');

    await Music.create([{
        username: 'Dexter',
        email: 'tmaupin2236@gmail.com'
    }]);
    console.log('Dexter is here');

    await Music.create([{
        username: 'Courgae the Dog',
        email: 'tmaupin2236@gmail.com'
    }]);
    console.log('Courage the Dog is here');

   


    console.log('Closing DB connection for seed');
    mongoose.disconnect();
}




seed();
