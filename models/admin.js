
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const request = require('request');



// Admin Schema
const AdminSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

const Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.getAdminById = function(id, callback) {
  Admin.findById(id, callback);
}

/**
* @param {string} email - admins adminname passed as a string
* @param {function} callback - callback function to be run after admin is added
*/
module.exports.getAdminByEmail = function(email, callback) {
  const query = {email: email}
  Admin.findOne(query, callback);
}

/**
* @param {Object} newAdmin - admin object to be safed in the database
* @param {function} callback - function to be run after saving the admin
*/
module.exports.addAdmin = function(newAdmin, callback) {
  Admin.getAdminByEmail(newAdmin.email, function(err, admin) {
    if(!admin) {
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if(err) throw err;
          newAdmin.password = hash;
          newAdmin.save(callback);
        });
      });
    }
    else {
      callback("admin already exists", null);
    }
  });
}


//compare given password with password of admin in database
module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
