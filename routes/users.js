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
    address: req.body.address,
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
            pictures: user.instagram.pictures,
            instagramAccessToken: user.instagram.access_token
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

//will be used to generate a bunch of random user data with NO instagram information
router.get('/randomUserData', (req, res, next) => {
    User.generateRandomUserData((err, user) => {
      if(err){
        console.log(err);
      }
      else {
        console.log("USER: " + user);
      }
    });
    res.send("success");
});


// get the users profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
   res.json({user: req.user})
});


module.exports = router;
