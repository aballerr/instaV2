
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

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
    pictures: []
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  console.log(id);
  User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback) {
  const query = {email: email}
  User.findOne(query, callback);
}

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

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
