const db = require('./main')

const userHandler = {

  authUser: ( request, response, next ) => {
    const { username, password } = request.body
    console.log('USER: ', username)

    if ( username === 'ideans' && password === 'opensaysme') {
      response.redirect('http://localhost:3000/CharacterSelect')
    } else if ( username === 'ninja' && password === 'oda' ) {
      response.redirect('http://localhost:3000/CharacterSelect')
    } else {
      response.redirect('http://localhost:3000/')
    }

  }

}

module.exports = userHandler
