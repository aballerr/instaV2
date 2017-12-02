
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const request = require('request');

// User Schema
const UserSchema = mongoose.Schema({

  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  instagram_verified: {
    type: Boolean,
    required: true
  },
  instagram: {
    required: false,
    id: {},
    username: {},
    full_name: {},
    access_token: {},
    followed_by: {},
    pictures: []
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  console.log(id);
  User.findById(id, callback);
}

//query to find user by their email
module.exports.getUserByEmail = function(email, callback) {
  const query = {email: email}
  User.findOne(query, callback);
}

//used for user authentication
module.exports.addUser = function(newUser, callback) {
  User.getUserByEmail(newUser.email, function(err, user) {
    if(!user) {
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save(callback);
        });
      });
    }
    else {
      callback("user already exists", null);
    }
  });
}

//upon authentication, update their current record in the mongo database, including their instagram access token
module.exports.updateInstagramAuthorizationStatus = function(id, data, callback){
  var userInfo = data.user;

  User.findById(id, (err, user) => {

    user.instagram_verified = true;
    user.instagram.username = userInfo.username;
    user.instagram.id = userInfo.id;
    user.instagram.full_name = userInfo.full_name;
    user.instagram.access_token = data.accessToken;

    var requestURL ="https://api.instagram.com/v1/users/"+userInfo.id+"/?access_token="+data.accessToken;
    request(requestURL, (err, res, body) => {
      body = JSON.parse(body);


      user.instagram.followed_by = body.data.counts.followed_by;
        user.save(callback);
    })
  });
}

//compare given password with password of user in database
module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
