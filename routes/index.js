const express = require("express");
const router = express.Router();
const otherRouter = require("./other");
const maneaRouter = require("./manea");
const casaDeDiscuriRouter = require("./casa-de-discuri");

router.use("/", otherRouter);
router.use("/manele", maneaRouter);
router.use("/casaDeDiscuri", casaDeDiscuriRouter);

module.exports = router;
