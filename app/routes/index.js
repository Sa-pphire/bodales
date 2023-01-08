const {Router} = require('express');
const controllers = require('../controllers');
const router = Router();

router.get ('/', (req,res) => res.json({message: "Hi there, Welcome to Bodales"}))
    // Create a new request
router.post("/request",  cors(corsOptions), controllers.createRequest);

module.exports = router;