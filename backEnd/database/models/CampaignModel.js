const db = require('../main')
const MissionModel = require('./MissionModel')

const CampaignModel = db.model( "Campaign", {

  name: { type: String },
  character: { type: String },
  status: { type: String, default: 'locked' },
  isComplete: { type: Boolean, default: false },
  missions: [ MissionModel.schema ] || []

})

module.exports = CampaignModel
