const beautifyUnique = require('mongoose-beautiful-unique-validation');
let mongoose = require('mongoose');

let foodbankSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    typedonation: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },

    rate: {
        type: Number,
        required: true
    },

    dietaryRequirement: {
        type: String,
        required: true
    }



},
    { collection: 'foodbank'

});


module.exports = mongoose.model('Foodbank', foodbankSchema);

