const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route      POST api/users
// @desc       Register a user
// @access     Public
router.post(
  '/',
  [
    check('name', 'Please enter your name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Enter a password with 6 or more characters').isLength({
      min: 6
    })
  ],
  (req, res) => {
    res.send(req.body);
  }
);

module.exports = router;
