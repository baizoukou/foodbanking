let Dietaryrequirement = require('../models/dietaryrequirement');

const dr = new Dietaryrequirement();

function getTotalDietaryrequirement(array) {
  let totalDietaryrequirement = 0;
  array.forEach(function(obj) { totaldietaryrequirement += obj.rate; });
  return totalDietaryrequirement;
}


const DietaryRequirementControl = {
  findAll: (req, res) => {
    Dietaryrequirement.find((err, dietaryReq) => {
      if (err)
        res.send(err);
      else
        res.send(JSON.stringify(dietaryReq,null,5));
    })
  },

  findOne: (req, res) => {
    Dietaryrequirement.find({ "_id" : req.params.id },function(err, dietaryrequirement) {
      if (err)
          res.json({ message: 'Dietaryrequirement NOT Found!', errmsg : err } );
      else
          res.json(dietaryrequirement);
    });
  },

  addDietaryrequirement: (req, res) => {
    dr.vegetarian = req.body.vegetarian;
    dr.vegan = req.body.vegan;
    dr.gluten = req.body.gluten;
    dr.none = req.body.none;
    dr.other = req.body.other;

    dr.save(function(err) {
        if (err)
            res.json({ message: 'Please try again', errmsg : err } );
        else
            res.json({ message: 'Thank you for your participation', data: dietaryrequirement });
    });
  },

  deletedDietaryRequirement: (req, res) => {
    Dietaryrequirement.findByIdAndRemove(req.params.id, (err) => {
      if (err)
        res.json({ message: 'dietaryrequirement NOT DELETED!', errmsg : err } );
      else
        res.json({ message: 'dietaryrequirement Successfully Deleted!'});
  });
  }
}

module.exports = DietaryRequirementControl;