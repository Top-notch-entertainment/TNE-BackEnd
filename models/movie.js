"use strict";

const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  name: { type: String, require: true },
  email: String,
});

const MovieModel = mongoose.model('Movie', movieSchema);

module.exports = MovieModel;

