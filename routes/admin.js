const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Admin = require('../models/admin');
const User = require('../models/user');

// authenticate
router.post('/authenticate', (req, res ,next) => {
  const email = req.body.email;
  const password = req.body.password;

  Admin.getAdminByEmail(email, (err, admin) => {
    if(err) throw err;

    if(!admin) {
      return res.json({
        success: false,
        msg: "Not found"
      });
    }

    Admin.comparePassword(password, admin.password, (err, isMatch) => {
      if(err) throw err;

      if (isMatch) {
        const token = jwt.sign(admin.toObject(), config.adminSecret, {
          expiresIn: 604800
        });


        res.json({
          success: true,
          token: 'JWT '+token,
          admin: {
            id: admin._id,
            email: admin.email,
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

/**
* @param {string} username
* @param {string} password
*/
module.exports.addAdmin = function(email, password) {
  let admin = new Admin({
    email: email,
    passwpord: password
  });

  Admin.addAdmin(admin, (err, admin) => {
      if(err){
        console.log(err);
      }
      else {
        console.log("ADMIN SUCCESSFULLY ADD: " + admin);
      }
  });
}




router.get('/userRequests', passport.authenticate('admin-strategy', {session: false}) ,(req, res, next) => {
  var usersToValidate = [];
  var user;


  User.getAll((err, users) => {
    for(var i in users) {
      user = users[i];
      console.log(user);
      console.log("*******************");

      user = constructUser(user);
      usersToValidate.push(user);
    }

    res.send(usersToValidate);
  });
});


// get the users profile
router.get('/profile', passport.authenticate('admin-strategy', {session: false}), (req, res, next) => {
   res.json({user: req.user})
});

/**
* @param {Object} user
*/
function constructUser(user) {
  return user = {
    _id: user._id,
    instagramUsername: user.instagram.username
  }
}


module.exports = router;
