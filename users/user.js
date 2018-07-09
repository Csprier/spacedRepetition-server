'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, default: '', unique: true },
  password: { type: String, require: true }
}, { timestamps: true });

userSchema.set('toObject', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.password;
  }
});

module.exports = mongoose.model('User', userSchema);