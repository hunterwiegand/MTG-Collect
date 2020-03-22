const path = require("path");
const router = require("express").Router();
const collectionRoutes = require("./api/magic-cards");
const userRoutes = require("./api/user");

// Tell our express router to use the apiRoutes from the aou folder
router.use("/collection", collectionRoutes);
router.use("/user", userRoutes);

module.exports = router;