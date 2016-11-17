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

  getOne: ( request, response, next ) => {

  },

  update: ( request, response, next ) => {

  },

  delete: ( request, response, next ) => {

  },


  campaign: {

    create: ( request, response, next ) => {
      const { characterName, campaignName } = request.body
      const campaign = new Campaign({ name: campaignName, character: characterName })
      campaign.save()
      Character.find({ name: characterName })
      .then( raw_character => {
        const character = raw_character[0]
        character.campaigns.push( campaign )
        character.save()
      })
      .then( response.status( 200 ).json({ status: 'success', message: `Created campaign '${campaignName}' for ${characterName}.` }) )
    },

    addToCharacter: ( request, response, next ) => {
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

    unlock: ( request, response, next ) => {
      const { characterName, campaignName } = request.body
      Character.find({ name: characterName })
      .then( raw_character => {
        const character = raw_character[0]
        let campaign = campaignHandler.getCampaign( character.campaigns, campaignName )
        campaign.locked = false
        character.save()
      })
      .then( response.status( 200 ).json({ status: 'success', message: `Unlocked campaign ${campaignName}.` }) )
    },

    lock: ( request, response, next ) => {
      const { characterName, campaignName } = request.body
      Character.find({ name: characterName })
      .then( raw_character => {
        const character = raw_character[0]
        let campaign = campaignHandler.getCampaign( character.campaigns, campaignName )

        // for ( let i=0; i<character.campaigns.length; i++ ) {
        //   if( character.campaigns[i].name === campaignName ) {
        //     campaign = character.campaigns[i]
        //   }
        // }

        campaign.locked = true
        character.save()
      })
      .then( response.status( 200 ).json({ status: 'success', message: `Locked campaign ${campaignName}.` }) )
    },

    updateName: ( request, response, next ) => {
      const { characterName, campaignName } = request.body

    }
  },

  mission: {

    create: ( request, response, next ) => {
      const { characterName, campaignName, missionName, bossName, bossHp } = request.body

      Character.find({ name: characterName })
      .then( raw_character => {

        const character = raw_character[0]
        const campaign = campaignHandler.getCampaign( character.campaigns, campaignName )
        const mission = new Mission({ name: missionName, boss_name: bossName, boss_hp: bossHp })
        campaign.missions.push( mission )
        character.save()

      })
    },

    addToCampaign: ( request, response, next ) => {

    },

    completeMission: ( request, response, next ) => {

    }
  }

}

module.exports = characterHandler
