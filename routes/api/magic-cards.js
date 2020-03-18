const router = require("express").Router();
// Require our googleController, which returns our axios call
const magicController = require("../../controllers/magicController");

// Using router, on the "/" route, get the axios call, and find
// All of the results.
router
  .route("/")
  .get(magicController.findAll)

module.exports = router;