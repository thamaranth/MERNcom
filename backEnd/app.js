const express = require( 'express' )
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const index = require('./routes/index')
const users = require('./routes/users')

const app = express()

app.options('*', cors())

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


app.use( (request, response, next ) => {

    if (request.method === "OPTIONS") {
      response.header('Access-Control-Allow-Origin', request.headers.origin)
    } else {
      response.header('Access-Control-Allow-Origin', '*')
    }

    next()
})


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
