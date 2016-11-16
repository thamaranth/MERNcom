const db = require('./main')
const Objective = require( './models/ObjectiveModel' )

const objectiveHandler ={

  add: ( request, response, next ) => {
    const { description, damage } = request.body
    const objective = new Objective({ description: description, damage: damage })
    objective.save()
    return objective
  },

  getAll: ( request, response, next ) => {

  },

  getOne: ( request, response, next ) => {

  },

  update: ( request, response, next ) => {

  },

  delete: ( request, response, next ) => {

  }

}

module.exports = objectiveHandler
