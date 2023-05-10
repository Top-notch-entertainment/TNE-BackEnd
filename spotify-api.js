// Import the axios library to make HTTP requests
const axios = require('axios');
// Import the base-64 library to encode and decode strings using Base64 encoding
const base64 = require('base-64');

// Define an asynchronous function called getSpotifyAccessToken to fetch an access token from Spotify API
async function getSpotifyAccessToken() {
    try {
        // Send a POST request to Spotify's token endpoint (https://accounts.spotify.com/api/token)
        // with the client ID and secret provided as environment variables
        const response = await axios.post(
            // This is the URL for the token endpoint of the Spotify API
            'https://accounts.spotify.com/api/token',
            // 'grant_type=client_credentials' is the required parameter for the token request
            // It specifies that the application is requesting an access token with client credentials
            'grant_type=client_credentials',
            {
                headers: {
                    // 'Content-Type': 'application/x-www-form-urlencoded' is a required header
                    // It informs the server that we are sending URL-encoded form data in the request
                    'Content-Type': 'application/x-www-form-urlencoded',
                    // 'Authorization': 'Basic' is a required header, followed by the Base64-encoded client ID and secret
                    // It informs the server that we are using the Basic Authorization scheme with client ID and secret
                    'Authorization': 'Basic ' + base64.encode(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_SECRET_ID),
                },
            }
        );

        // Return the access token from the response
        console.log('Expired?', response.data);
        return response.data.access_token;

    } catch (error) {
        // If there's an error, log it to the console and return null
        console.error('Error fetching access token:', error.response.data);
        return null;
    }
    console.log("🚀 ~ file: spotify-api.js:36 ~ getSpotifyAccessToken ~ response:", response)
}

// Define an asynchronous function called search that takes an Express request and response object
async function browseGenre(genre) {
    


    // Send a GET request to Spotify's browse categories API using the genre query parameter and access token
    const response = await axios.get('https://api.spotify.com/v1/browse/categories/' + genre + '/playlists', {
        headers: {
            // 'Authorization': 'Bearer' is a required header, followed by the Spotify access token
            // It informs the server that we are using the Bearer Authorization scheme with an access token
            'Authorization': 'Bearer ' + process.env.SPOTIFY_ACCESS_TOKEN,
        }
        });
    

    // Send the response data back to the client as JSON
    // res.json(response.data);
    return response.data;

}



// async function searchMusicData(searchData) {
    


//     // Send a GET request to Spotify's browse categories API using the genre query parameter and access token
//     const response = await axios.get('https://api.spotify.com/v1/browse/categories/' + genre + '/playlists', {
//         headers: {
//             // 'Authorization': 'Bearer' is a required header, followed by the Spotify access token
//             // It informs the server that we are using the Bearer Authorization scheme with an access token
//             'Authorization': 'Bearer ' + process.env.SPOTIFY_ACCESS_TOKEN,
//         }
//         });
    

//     // Send the response data back to the client as JSON
//     // res.json(response.data);
//     return response.data;

// }











// Export the getSpotifyAccessToken and search functions so they can be used in other files
module.exports = {
    getSpotifyAccessToken,
    browseGenre,
};
