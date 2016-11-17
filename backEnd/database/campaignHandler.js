const db = require( "./main" )
const Campaign = require( './models/CampaignModel' )
const Mission = require( './models/MissionModel' )
const Objective = require( './models/ObjectiveModel' )

const campaignHandler = {

  getAll: ( request, response, next ) => {
    Character.find( {}, ( error, data ) => { error ? console.log( error ) : console.log('Success') } )
    .then( data => {
        const currentdate = new Date()
        console.log(`Retrieved campaign from database: ${data.length} items ---- ${currentdate}`)
        response.status(200).json({ status: 'success', data: data, message: 'Retrieved campaign.' })
      })

  },


  getCampaign: ( campaignArray, campaignName ) => {

    for ( let i=0; i < campaignArray.length; i++ ) {

      if( campaignArray[i].name === campaignName ) {
        campaign = campaignArray[i]
      }
    }
    return campaign
  }

}

const missionHandler = {

}

const objectiveHandler = {

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

  completeObjective: ( request, response, next ) => {

  },

  delete: ( request, response, next ) => {

  }
}

module.exports = campaignHandler
