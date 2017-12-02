const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

// Register
router.post('/register', (req, res ,next) => {

  let newUser = new User({
    email: req.body.email,
    password: req.body.password,
    instagram_verified: false
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});


// authenticate
router.post('/authenticate', (req, res ,next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if(err) throw err;

    if(!user) {
      return res.json({
        success: false,
        msg: "User not found"
      });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;

      if (isMatch) {
        const token = jwt.sign(user.toObject(), config.secret, {
          expiresIn: 604800
        });


        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            email: user.email,
            instagram_verified: user.instagram_verified,
            instagramAccessToken: user.instagram.access_token
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});


router.post('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {


  res.send("it worked!");
});

// profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  //res.send('profile');

   res.json({user: req.user})
});




module.exports = router;
