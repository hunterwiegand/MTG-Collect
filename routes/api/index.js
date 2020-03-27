const path = require("path");

const router = require("express").Router();
// Require routes from other .js files
const mtgRoutes = require("./magic-cards");
const userRoutes = require("./user")

// tell the router to use the bookRoutes and googleRoutes
// as routes to use in the app
router.use("/mtg", mtgRoutes);
router.use("/user", userRoutes);

//Export router with new uses
module.exports = router;