const db = require( "./main" )
const Campaign = require( './models/CampaignModel' )
const Mission = require( './models/MissionModel' )
const Objective = require( './models/ObjectiveModel' )
const Character = require( './models/CharacterModel' )

const characterHandler = {

  add: ( request, response, next ) => {

    console.log('Begining add new campaign function.')

    const objective_1 = new Objective({ description: 'Click this.', damage: 3 })
    console.log('Created new objective_1')

    const objective_2 = new Objective({ description: 'Click this too.', damage: 4 })
    console.log('created objective_2')

    objective_1.save()
    objective_2.save()

    console.log('Objectives saved.')
    console.log('Creating mission...');

    const mission_1 = new Mission({ name: 'Mission One', boss_name: 'Ze Lt', boss_hp: 15, objectives: [ objective_1, objective_2 ] })
    console.log('created mission: ' );

    mission_1.save()
    console.log( 'Mission saved.')

    const campaign = new Campaign({ name: 'Campaign Three', boss_name: 'Diablo', boss_hp: 200, missions: [ mission_1 ] })
    campaign.save()
    console.log( 'Campaign saved to database.' )

    const character = new Character({ name: 'Kate Winslet', hp: 20, img_url: 'image goes here', campaigns: [ campaign ] })
    character.save()
    console.log('Character saved to database.')

    response.status(200).json({message: 'success'})
  },

  getAll: ( request, response, next ) => {
    Character.find( {}, ( error, data ) => { error ? console.log( error ) : console.log('Success') } )
    .then( data => {
        const currentdate = new Date()
        console.log(`Retrieved campaign from database: ${data.length} items ---- ${currentdate}`)
        response.status(200).json({ status: 'success', data: data, message: 'Retrieved campaign.' })
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
