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
  const { getSpotifyAccessToken, search } = require('./spotify-api');

// const Music = require('./models/Music.js');
const PORT = process.env.PORT || 5005;



app.get('/', (request, response) => {
  response.send('Welcome to the Spotify Playlist Search API!');
});



// Add API route to search for playlist by genre.

app.get('/search', (request, response) => {
  search(request, response)
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
