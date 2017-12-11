const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const Admin = require('../models/admin');
const config = require('../config/database');
const CustomStrategy = require('passport-custom');


module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;

  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.getUserById(jwt_payload._id, function(err, user) {

      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};

//to be used later for admin authentication
module.exports.adminStrategy = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.adminSecret;
  console.log("Adding admin strategy");
  passport.use('admin-strategy', new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("Admin authentication");

    Admin.getAdminById(jwt_payload._id, function(err, admin) {

      if (err) {
        return done(err, false);
      }
      if (admin) {
        done(null, admin);
      } else {
        done(null, false);
      }
    });
  }));
}
