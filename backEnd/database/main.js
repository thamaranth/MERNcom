const mongoose = require("mongoose")
const DATABASE_URL = 'mongodb://127.0.0.1:27017/MERNcom'

mongoose.Promise = Promise
mongoose.connect( DATABASE_URL )

module.exports = mongoose
