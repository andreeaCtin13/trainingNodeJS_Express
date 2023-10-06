const express = require("express");
const router = express.Router();
const casaDeDiscuriController = require("../controllers").casaDeDiscuri;

router.get("/", casaDeDiscuriController.getAllCaseDeDiscuri);
router.post("/", casaDeDiscuriController.addCasaDeDiscuri);

module.exports = router;
