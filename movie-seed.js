'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

const Movie = require('./models/movie');

async function seed() {

    await mongoose.connect(
        process.env.URL_DB
    )
        .then(() => console.log('Mongo DB is here'))
        .catch(e => console.log(e));

    await Movie.create([{
        title: 'Texas',
        overview: 'Big town',
        imageUrl: "https://image.tmdb.org/t/p/w500/9iUdC4dftkjYSBUJq5DAxC6WqB9.jpg",
        releasedOn: "1977-08-17",
    }]);
    console.log('Johnny is here');

    await Movie.create([{
        title: 'Seattle',
        overview: 'Big town',
        imageUrl: "https://image.tmdb.org/t/p/w500/9iUdC4dftkjYSBUJq5DAxC6WqB9.jpg",
        releasedOn: "1977-08-17",
    }]);
    console.log('Dexter is here');

    await Movie.create([{
        title: 'Georgia',
        overview: 'Big town',
        imageUrl: "https://image.tmdb.org/t/p/w500/9iUdC4dftkjYSBUJq5DAxC6WqB9.jpg",
        releasedOn: "1977-08-17",
    }]);
    console.log('Courage the Dog is here');



    console.log('Closing DB connection for seed');
    mongoose.disconnect();
}




seed();
