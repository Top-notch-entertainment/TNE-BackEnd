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
  .then(() => console.log('Mongo DB is conected!'))
  .catch(e => console.log(e));


  // Import spotify-api functions
  const { getSpotifyAccessToken, browseGenre, searchMusicData } = require('./spotify-api');


// const Music = require('./models/Music.js');
const PORT = process.env.PORT || 5005;
//brings in code for api calls
const getMovies = require('./movie-api.js');



app.get('/', (request, response) => {
  response.send('Welcome to the Spotify Playlist Search API!');
});
//movie route
app.get('/movies', getMovies);



// Add API route to search for playlist by genre.

app.get('/browsegenre', (request, response) => {
  // Extract the 'genre' query parameter from the request
  const { genre } = request.query;
  browseGenre(genre)
    .then(playlistData => response.status(200).send(playlistData))
    .catch(error => {
      console.error(error);
      response.status(500).send('Sorry. Something went wrong!' + error.message);
    });
});


app.get('/search', (request, response) => {
  // Extract the 'genre' query parameter from the request
  const { searchData } = request.query;
  searchMusicData(searchData)
    .then(playlistData => response.status(200).send(playlistData))
    .catch(error => {
      console.error(error);
      response.status(500).send('Sorry. Something went wrong!' + error.message);
    });
});



app.get('*', (request, response) => {
  response.send('The route was not found. Error 404');
});

// Fetch and store the Spotify Access token.

(async () => {
  const token = await getSpotifyAccessToken();
  if (token) {
    process.env.SPOTIFY_ACCESS_TOKEN = token;
  } else {
    console.error('Unable to fetch Spotify access token.');
  }
})();



app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
