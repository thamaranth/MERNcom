const db = require('./main')

const userHandler = {

  authUser: ( request, response, next ) => {
    const { username, password } = request.body

    if ( username === 'ideans' ) {
      response.writeHead(301, {
        Location: "http" + (request.socket.encrypted ? "s" : "") + "://" +
        request.headers.host }
);
response.end();
    } else {
      response.redirect('http://localhost:3000/')
    }

  }

}

module.exports = userHandler
