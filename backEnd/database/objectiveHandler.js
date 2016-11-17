const db = require('./main')
const Objective = require( './models/ObjectiveModel' )

const objectiveHandler ={

  getAll: ( request, response, next ) => {
    Objective.find()
    .then( objectives => response.send( objectives ))
  },

}

module.exports = objectiveHandler
