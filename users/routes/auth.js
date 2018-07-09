'use strict';

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// DELETE THIS AND GET ENDPOINT LATER
const User = require('../../users/user');

const { JWT_SECRET, JWT_EXPIRY } = require('../../config');
const router = express.Router();

const localAuth = passport.authenticate('local', { session: false, failWithError: true });

router.post('/login', localAuth, (req, res) => {
  const authToken = createAuthToken(req.user);
  return res.json({ authToken });
});

const jwtAuth = passport.authenticate('jwt', { session: false, failWithError: true });

router.post('/refresh', jwtAuth, (req, res) => {
  const authToken = createAuthToken(req.user);
  res.json({ authToken });
});

// GET ALL USERS
router.get('/v1', (req, res, next) => {
  User.find()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

function createAuthToken(user) {
  return jwt.sign({ user }, JWT_SECRET, {
    subject: user.username,
    expiresIn: JWT_EXPIRY
  });
}

module.exports = router;