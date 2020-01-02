const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: String,
  category: String,
  date: {
    type: String,
    default: Date.now
  },
  amount: Number,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  }
})

module.exports = mongoose.model('Record', recordSchema)
