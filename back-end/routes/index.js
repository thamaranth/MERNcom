const express = require('express')
const router = express.Router()
const campaignHandler = require('../database/campaignHandler')

router.get('/', ( request, response, next ) => {
  response.send( 'respond with a resource' )
})

router.post( '/addcampaign', campaignHandler.add )

module.exports = router
