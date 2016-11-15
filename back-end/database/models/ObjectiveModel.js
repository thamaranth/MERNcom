const db = require("../main")

const ObjectiveModel = db.model( 'Objective', {
  description: { type: String },
  damage: { type: Number },
  isComplete: { type: Boolean, default: false }
})

module.exports = ObjectiveModel
