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

const FACEBOOK_APP_ID = '1187088631340744'
const FACEBOOK_APP_SECRET = 'b23c72d939f481b11ede14bdc74bc9e9'

passport.use( new FacebookStrategy({

    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3001/login/facebook/callback"
  },

  ( accessToken, refreshToken, profile, cb) => {
    //User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb( null, profile );
    //});
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

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
