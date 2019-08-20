let express = require('express');
let router = express.Router();
const DietaryRequirementControl = require('../controllers/dietaryController');



router.get('/dietaryrequirement/:id', DietaryRequirementControl.findOne);
router.get('/dietaryrequirement', DietaryRequirementControl.findAll);




module.exports = router;
