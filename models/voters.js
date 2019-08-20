let mongoose = require('mongoose');

let votersSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  foodbankId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Foodbank',
    required: true
  }
}, {
  collection: 'Voters'
});

module.exports = mongoose.model('Voters', votersSchema);