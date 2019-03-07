const jwtStrategy = require ('passport-jwt').Strategy
const ExtratJwt = require ('passport-jwt').ExtratJwt;
const User = require('../models/user');
const config = require('../config/database')

module.exports = function (passport){
    let opts ={};
    opts.jwtFromRequest = ExtratJwt.fromAuthHeader ();
    opts.secretOrKet = config.secret;
    passport.use(new jwtStrategy,(opts , (jwt_payload ,done)=>{
        User.getUserById(jwt_payload._id(err  , user )=> 
        {
            if (err){
                return done (err,false);
            },
            if ( user){
                return done(null,user);
            },
            else{
                return done (null , false)
            }
        })
    }))
}