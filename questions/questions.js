'use strict';

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  word: { type: String },
  answer: { type: String }
});

module.exports = mongoose.model('Question', questionSchema);