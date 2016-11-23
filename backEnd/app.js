const express = require( 'express' )
const session = require('express-session')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;

const User = require('./user');

const index = require('./routes/index')
const users = require('./routes/users')

const app = express()

app.options('*', cors())

app.use( logger('dev') )
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: false }) )
app.use( cookieParser() )
app.use( express.static(path.join(__dirname, 'public')) )
// app.use( session({ secret: 'keyboard cat' }) )
app.use( passport.initialize() )
app.use( passport.session() )


app.use( ( request, response, next ) => {

    if (request.method === "OPTIONS") {
      response.header('Access-Control-Allow-Origin', request.headers.origin)
    } else {
      response.header('Access-Control-Allow-Origin', '*')
    }

    next()
})

module.exports = passport => {
  passport.serializeUser(function(user, done) {
      done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('local-login', new LocalStrategy({
       // by default, local strategy uses username and password, we will override with email
       usernameField : 'email',
       passwordField : 'password',
       passReqToCallback : true // allows us to pass back the entire request to the callback
   },
function(req, email, password, done) {

   User.findOne({ 'local.email' : email }, function(err, user) {

     if (err)
return done(err);

if (!user)
return done(null, false, req.flash('loginMessage', 'No user found.'));

if (!user.validPassword(password))
return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

return done(null, user);
       });

}));

const FACEBOOK_APP_ID = '1187088631340744'
const FACEBOOK_APP_SECRET = 'b23c72d939f481b11ede14bdc74bc9e9'

passport.use( new FacebookStrategy({

    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3001/login/facebook"
  },

  ( accessToken, refreshToken, profile, done) => {
    //User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    process.nextTick(function() {

 User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

   if (err)
return done(err);

if (user) {
                  return done(null, user);
} else {

  var newUser = new User();

  newUser.facebook.id    = profile.id;
  newUser.facebook.token = token;
  newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
  newUser.facebook.email = profile.emails[0].value;

  newUser.save(function(err) {
                        if (err)
throw err;

return done(null, newUser);
                   });
               }

           });
       });

   }));

};


app.use('/', index)
app.use('/users', users)




// catch 404 and forward to error handler
app.use( ( request, respond, next ) => {
  const error = new Error('Not Found')
  error.status = 404
  next( error )
})

// error handler
app.use( ( error, request, response, next ) => {
  // set locals, only providing error in development
  response.locals.message = error.message
  response.locals.error = request.app.get('env') === 'development' ? error : {}

  // render the error page
  response.status( error.status || 500 )
  .json({ status: error.status || 500, message: error })
})

module.exports = app
