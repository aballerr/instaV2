
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
  address: {
    type: String,
    required: false
  },
  styles: {
    type: Array,
    required: false
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
  User.findById(id, callback);
}

//query to find user by their email
module.exports.getUserByEmail = function(email, callback) {
  const query = {email: email}
  User.findOne(query, callback);
}


module.exports.getAll = function(callback){
  User.find({}, callback);
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




/**
* Used in validating an authentication requests password
* @param {string} candidatePassword - non-hashed version of users password
* @param {Object} data - data object that contains the user info for instagram
* @param {function} callback
*/
module.exports.updateInstagramAuthorizationStatus = function(id, data, callback){
  var userInfo = data.user;

  User.findById(id, (err, user) => {

    user.instagram_verified = true;
    user.instagram.username = userInfo.username;
    user.instagram.id = userInfo.id;
    user.instagram.full_name = userInfo.full_name;
    user.instagram.access_token = data.accessToken;

    userRequestData(data.accessToken, "user", userInfo.id, user, callback);
    userRequestRecentImages(data.accessToken, "images", userInfo.id, user, callback);
    //userRequestRecentImages()

  });
}

/**
* Used in validating an authentication requests password
* @param {string} candidatePassword - non-hashed version of users password
* @param {string} hash - hashed versions of users password retrieved from database
* @param {function} callback
*/
module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}

module.exports.generateRandomUserData = function(callback) {
  var data = getRandomuserData();

  for(var i in data){
    var user = data[i];
    console.log("in models/user/comparePassword" + user);

    let newUser = new User({
      email: user.email,
      password: user.password,
      address: user.address,
      instagram_verified: false
    });
    newUser.save(callback);
  }
}
