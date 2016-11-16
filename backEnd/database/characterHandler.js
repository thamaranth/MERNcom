const db = require( "./main" )
const Campaign = require( './models/CampaignModel' )
const Mission = require( './models/MissionModel' )
const Objective = require( './models/ObjectiveModel' )
const Character = require( './models/CharacterModel' )
const objectiveHandler = require( './objectiveHandler' )
const campaignHandler = require( './campaignHandler' )

const characterHandler = {

  add: ( request, response, next ) => {
    const { name, hp, img_url } = request.body
    const character = new Character({ name: name, hp: hp, img_url: img_url, campaigns: [] })
    character.save()
    response.status(200).json({ status: 'success', message: 'Inserted new character to database.' })
  },

  getAll: ( request, response, next ) => {
    Character.find( {}, ( error, data ) => { error ? console.log( error ) : console.log('Success') } )
    .then( data => {
        const currentdate = new Date()
        console.log(`Retrieved campaign from database: ${data.length} items ---- ${currentdate}`)
        response.status(200).json({ status: 'success', data: data, message: 'Retrieved campaign.' })
      })

  },

  addCampaign: ( request, response, next ) => {
    const { characterName, campaignName } = request.body

    Campaign.find({ name: campaignName })
    .then( campaign => {
      Character.find({ name: characterName })
      .then( r_character =>  {
        const character = r_character[0]
        character.campaigns.push( campaign[0] )
        character.save()
      })
      .then( response.status(200).json({ status: 'Si', message: 'Pushed campaign into character.' }) )
    })

  },

  getOne: ( request, response, next ) => {

  },

  update: ( request, response, next ) => {

  },

  delete: ( request, response, next ) => {

  }

}

module.exports = characterHandler
