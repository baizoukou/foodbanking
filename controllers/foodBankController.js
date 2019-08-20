const Foodbank = require('../models/foodbank');
const Voters = require('../models/voters');

const fd = new Foodbank();

const getTotalRate = (array) => {
  let totalRate = 0;
  array.forEach(function (obj){
      totalRate += obj.rate;});
      return totalRate;
}


const FoodBankControl = {
  addFoodBank: (req, res) => {
    try {
      const foodbank = new Foodbank();
      foodbank.name = req.body.name;
      foodbank.city= req.body.city;
      foodbank.typedonation= req.body.typedonation;
      foodbank.quantity= req.body.quantity;
      foodbank.rate= req.body.rate || 1;
      foodbank.dietaryRequirement = req.body.dietaryRequirement;
  
      foodbank.save((err, newFoodbank) => {
          if (err) {
            return res.json({ message: 'Foodbank NOT Added!', errmsg : err } );
          }
          else {
            return res.json({ message: 'Foodbank Successfully Added!', data: newFoodbank });
          }
      });
    } catch (error) {
      return res.json({ message: error.message });
    }
  },

  findAll: (req, res) => {
    Foodbank.find(null, null, {sort: {'_id': -1}}, (err, foodbank) => {
      if (err) return res.json({err})
      return res.status(200).json({ message: 'All foodbank retrieved', foodbank })
    });
  },

  filter: (req, res) => {
    const filter = (req.body.dietaryRequirement)
      ? {dietaryRequirement: req.body.dietaryRequirement}
      : null;

    const sort = (req.body.rate)
      ? (req.body.rate === 'ascending')
        ? {rate: 1} : {rate: -1}
      : null;

    Foodbank.find(filter, null, { sort }, (err, foodbank) => {
      if (err) {
        return res.status(500).json({err})
      }
      return res.status(200).json({ message: 'All foodbank retrieved', foodbank })
    })
  },

  findOne: (req, res) => {
    Foodbank.find({ "_id" : req.params.id }, (err, foodbank) => {
      if (err)
          res.json({ message: 'Foodbank NOT Found!', errmsg : err } );
      else
          res.send(JSON.stringify(foodbank,null,5));
    });
  },

  updateFoodBank: (req, res) => {
    const filter = { _id: req.params.id };
    const update =  {...req.body};
    return Foodbank.findOneAndUpdate(filter, update, {new: true}, (err, foodbank) => {
      if(err) {
        return res.json({ message: 'Foodbank NOT Updated!', errmsg : err } );
      }
      return res.json({message: 'Foodbank updated successfully', foodbank})
    })
  },

  incrementRate: async(req, res) => {
    const filter = { _id: req.params.id };
    const update =  { rate: req.body.rate+1 };
    const voter = new Voters();
    try {
      Voters.find({ userId: req.body.userId, foodbankId: req.params.id}, (err, voters) => {
        if(err) {
          res.json({errmsg: err})
        } else if (voters.length > 0) {
          return res.status(409).json({ errmsg: 'You have voted already'})
        }
        Foodbank.findOneAndUpdate(filter, update, {new: true}, async(err,foodbank) => {
          if (err) {
            res.json({ message: 'Voting Failed!', errmsg : err } );
          }
          voter.userId = req.body.userId;
          voter.foodbankId = req.params.id;
          await voter.save();
          return res.json({message: 'Foodbank voted successfully', foodbank})
        });
      })
  
    } catch (error) {
      return res.json({ errmsg: error.message });
    }
  },

  findTotalRate: (req, res) => {
    Foodbank.find(function(err, foodbank) {
      if (err)
        res.send(err);
      else
        res.json({ totalrate : getTotalRate(foodbank) });
    });
  },

  deleteFoodbank: (req, res) => {
    Foodbank.findByIdAndRemove(req.params.id, function(err) {
      if (err)
        res.json({ message: 'Foodbank NOT DELETED!', errmsg : err } );
      else
        res.json({ message: 'Foodbank Successfully Deleted!'});
    });
  },
}

module.exports = FoodBankControl;