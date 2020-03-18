const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/magic-cards");
const userRoutes = require("./api/user");

// Tell our express router to use the apiRoutes from the aou folder
router.use("/api", apiRoutes);
router.use("/user", userRoutes);

module.exports = router;