const db = require( "./main" )
const Campaign = require( './models/CampaignModel' )
const Mission = require( './models/MissionModel' )
const Objective = require( './models/ObjectiveModel' )

const campaignHandler = {

  add: ( request, response, next ) => {
    const { name, character, status } = request.body
    const campaign = new Campaign({ name: name, character: character, status: status })
    campaign.save()
    response.status(200).json({ status: 'success', message: 'Created new campaign.' })
  },

  getAll: ( request, response, next ) => {
    Campaign.find( {}, ( error, data ) => { error ? console.log( error ) : console.log('Success') } )
    .then( data => {
        const currentdate = new Date()
        console.log(`Retrieved campaign from database: ${data.length} items ---- ${currentdate}`)
        response.status(200).json({ status: 'success', data: data, message: 'Retrieved campaign.' })
      })

  },

  update: ( request, response, next ) => {

  },

  delete: ( request, response, next ) => {

  }

}

module.exports = campaignHandler
