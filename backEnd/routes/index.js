const express = require('express')
const router = express.Router()
const campaignHandler = require('../database/campaignHandler')
const characterHandler = require('../database/characterHandler')
const objectiveHandler = require( '../database/objectiveHandler' )

router.get('/', ( request, response, next ) => {
  response.send( 'respond with a resource' )
})

router.post( '/campaign', campaignHandler.add )
router.get( '/campaign', campaignHandler.getAll )

router.post( '/character/addcampaign', characterHandler.addCampaign )
router.post( '/character', characterHandler.add )
router.get( '/character', characterHandler.getAll )

router.get( '/objectives', objectiveHandler.getAll )

module.exports = router
