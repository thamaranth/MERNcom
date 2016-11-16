const db = require('../main')
const CampaignModel = require( './CampaignModel' )

const CharacterModel = db.model( "Character", {
  name: { type: String },
  hp: { type: Number },
  img_url: { type: String },
  campaigns: [ CampaignModel.schema ] || []

})

module.exports = CharacterModel
