const db = require('../main')
const ObjectiveModel = require('./ObjectiveModel')

const MissionModel = db.model( "Mission", {

  name: { type: String },
  boss_name: { type: String },
  boss_hp: { type: Number },
  isComplete: { type: Boolean, default: false },
  objectives: [ ObjectiveModel.schema ]

})

module.exports = MissionModel
