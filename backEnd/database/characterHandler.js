const db = require( "./main" )
const Campaign = require( './models/CampaignModel' )
const Mission = require( './models/MissionModel' )
const Objective = require( './models/ObjectiveModel' )
const Character = require( './models/CharacterModel' )
// const objectiveHandler = require( './objectiveHandler' )
const { campaignHandler, missionHandler, objectiveHandler } = require( './campaignHandler' )

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
        console.log(`Retrieved character from database: ${data.length} items ---- ${currentdate}`)
        response.status(200).json({ status: 'success', data: data, message: 'Retrieved campaign.' })
      })

  },

  getOne: ( request, response, next ) => {

    const { name } = request.params
    Character.find({ name: name }, ( error, data ) => { error ? console.log( error ) : console.log('Success') } )
    .then( data => {
      const character = data[0]
      response.status( 200 ).json({ status: 'success', data: character, message: `Retrieved character '${name}'` })
    })

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
      .then( response.status( 200 ).json({ status: 'success', message: `Created mission '${missionName}' in campaign '${campaignName}' for ${characterName}.` }) )
    },

    addToCampaign: ( request, response, next ) => {

    },

    completeMission: ( request, response, next ) => {

    }
  },

  objective: {

    create: ( request, response, next ) => {
      const { characterName, campaignName, missionName, objectiveName, description, damage } = request.body

      Character.find({ name: characterName })
      .then( raw_character => {

        const character = raw_character[0]
        const campaign = campaignHandler.getCampaign( character.campaigns, campaignName )
        const mission = missionHandler.getMission( campaign.missions, missionName )

        const objective = new Objective({ description: description, damage: damage })
        mission.objectives.push( objective )
        character.save()
      })
      .then( response.status( 200 ).json({ status: 'success', message: `Create new objective in '${missionName}'.` }) )
    }
  }

}

module.exports = characterHandler
