'use strict';

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, default: '', unique: true },
  password: { type: String, require: true },
  questions: { type: Object }
}, { timestamps: true });

userSchema.set('toObject', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.password;
  }
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
};

module.exports = mongoose.model('User', userSchema);

/*
{
  username: "fuckhead"
  id: "1m214b5b1525135123"
  questions: {
    word: "word-to-guess1"
    answer: "answer-to-word1
    userId: "1m214b5b1525135123"
    next: {
      word: "word-to-guess2"
      answer: "answer-to-word2"
      userId: "1m214b5b1525135123"
      next: {}
    }
  }
}
*/