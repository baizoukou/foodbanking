let express = require('express');
const FoodControl = require('../controllers/foodBankController')
const validateToken= require('../middlewares/jwt'); 
let router = express.Router();

router.post('/foodbank/filter/', validateToken, FoodControl.filter)
router.get('/foodbank/:id', validateToken, FoodControl.findOne);
router.get('/foodbank', validateToken, FoodControl.findAll);

router.get('/foodbank/:rate', validateToken,  FoodControl.findTotalRate);
router.put('/foodbank/:id', validateToken, FoodControl.updateFoodBank);


router.post('/foodbank', validateToken,  FoodControl.addFoodBank);

router.put('/foodbank/:id/rate', validateToken, FoodControl.incrementRate);
router.delete('/foodbank/:id', validateToken,  FoodControl.deleteFoodbank);


module.exports = router;
