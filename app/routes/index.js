const {Router} = require('express');
const controllers = require('../controllers');
const router = Router();

router.get ('/', (req,res) => res.json({message: "Hi there, Welcome to Kwizin"}))
    // Create a new order
router.post("/users", controllers.createOrder);

module.exports = router;