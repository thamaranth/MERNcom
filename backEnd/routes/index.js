const express = require('express')
const router = express.Router()
const campaignHandler = require('../database/campaignHandler')

router.get('/', ( request, response, next ) => {
  response.send( 'respond with a resource' )
})

router.post( '/campaign', campaignHandler.add )
router.get( '/campaign', campaignHandler.getAll )

module.exports = router
