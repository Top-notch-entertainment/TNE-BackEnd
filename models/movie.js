"use strict";

const axios = require('axios');

//Movie route
async function getMovies(request, response) {
    // console.log('TTTTTT', request.query);
    let cityMovieSearch = request.query;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&query=${cityMovieSearch}&page=1&include_adult=false`;
}



class Movie {
    constructor(movieObject) {
        this.title = movieObject.title;
        this.overview = movieObject.overview;
        this.imageUrl = ``
        this.releasedOn = movieObject.release_date;
    }
}



models.export = getMovies;