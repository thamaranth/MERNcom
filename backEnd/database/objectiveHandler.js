const db = require('./main')
const Objective = require( './models/ObjectiveModel' )

const objectiveHandler ={

  add: ( description, damage ) => {
    const objective = new Objective({ description: description, damage: damage })
    objective.save()
    return objective
  },

  getAll: ( request, response, next ) => {
    Objective.find()
    .then( objectives => response.send( objectives ))
  },

  getOne: ( request, response, next ) => {

  },

  update: ( request, response, next ) => {

  },

  delete: ( request, response, next ) => {

  }

}

module.exports = objectiveHandler
