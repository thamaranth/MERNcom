const db = require('../main')
const MissionModel = require('./MissionModel')

const CampaignModel = db.model( "Campaign", {

  name: { type: String },
  boss_name: { type: String },
  boss_hp: { type: Number },
  status: { type: String || 'locked' },
  isComplete: { type: Boolean, default: false },
  missions: [ MissionModel.schema ]

})

module.exports = CampaignModel
