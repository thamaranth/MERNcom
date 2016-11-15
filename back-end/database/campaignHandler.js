const db = require( "./main" )
const Campaign = require( './models/CampaignModel' )
const Mission = require( './models/MissionModel' )
const Objective = require( './models/ObjectiveModel' )

const campaignHandler = {

  add: ( request, response, next ) => {

    console.log('Begining add new campaign function.')

    const objective_1 = new Objective({ description: 'Click this.', damage: 3 })
    console.log('Created new objective_1', objective_1)

    const objective_2 = new Objective({ description: 'Click this too.', damage: 4 })
    console.log('created objective_2', objective_2)

    objective_1.save()
    objective_2.save()
    console.log('Objectives saved.')

    console.log('Creating mission...');

    const mission_1 = new Mission({ name: 'Mission One', boss_name: 'Ze Lt', boss_hp: 15, objectives: [ objective_1, objective_2 ] })
    console.log('created mission: ', mission_1 );

    mission_1.save()
    console.log( 'Mission saved.')

    const campaign = new Campaign({ name: 'Campaign Three', boss_name: 'Diablo', boss_hp: 200, missions: [ mission_1 ] })
    campaign.save()
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

module.exports = campaignHandler
