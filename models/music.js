'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const musicSchema = new Schema({
  username: { type: String, require: true },
  email: String,
});

const SpotifyModel = mongoose.model('Music', musicSchema);

module.exports = SpotifyModel;

