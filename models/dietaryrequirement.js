var mongoose = require('mongoose');

//foodbank schema

var dietaryrequirementSchema = mongoose.Schema({
    vegetarian:{
        type:String,
        required: true
    },
    vegan:{
        type: String,
        required: true
    },
    gluten:{
        type: String,
        required:true
    },
    none:{
        type: String,
        required: false
    },
    other:{
        type: String,
        required:false
    }},
    {collection:'dietaryRequirement'
});
module.exports = mongoose.model('dietaryrequirement', dietaryrequirementSchema);
