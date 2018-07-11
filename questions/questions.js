'use strict';

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  word: { type: String },
  answer: { type: String },
  m: Number,
  next: Number
});

questionSchema.set('toObject', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('Question', questionSchema);

