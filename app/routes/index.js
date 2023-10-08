const express = require("express");
const router = express.Router();
const controllers = require('../controllers');

module.exports = function(app) {
    router.get ('/', (req,res) => res.json({message: "Hi there, Welcome to Bodales"}))
    router.post("/request", controllers.createRequest);
    app.use('/', router )
}