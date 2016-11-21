const express = require('express')
const router = express.Router()
const {campaignHandler} = require('../database/campaignHandler')
const characterHandler = require('../database/characterHandler')
const objectiveHandler = require( '../database/objectiveHandler' )
const userHandler = require( '../database/userHandler' )
const passport = require('passport')

router.get('/', ( request, response, next ) => {
  response.send( 'respond with a resource' )
})

router.get( '/campaign', campaignHandler.getAll )

router.post( '/character/createcampaign', characterHandler.campaign.create )

router.post( '/character/addcampaign', characterHandler.campaign.addToCharacter )
router.put( '/character/unlockcampaign', characterHandler.campaign.unlock )
router.put( '/character/lockcampaign', characterHandler.campaign.lock )

router.post( '/character/campaign/mission/create', characterHandler.mission.create )
router.post( '/character/campaign/mission/objective/create', characterHandler.objective.create )
router.get( '/character/:charName/:campaignName', characterHandler.campaign.getOne )
router.get ('/character/:charName/:campaignName/:missionName', characterHandler.mission.getOne )

router.post( '/character', characterHandler.add )

router.get( '/character/:name', characterHandler.getOne )
router.get( '/characters', characterHandler.getAll )

router.get( '/objectives', objectiveHandler.getAll )

router.post('/login', userHandler.authUser )
// router.post('/login',
//   passport.authenticate('local', { successRedirect: '/ChacterSelect',
//                                    failureRedirect: 'http://localhost:3000/' }));

module.exports = router
