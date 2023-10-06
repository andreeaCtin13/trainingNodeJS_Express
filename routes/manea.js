const express = require("express");
const router = express.Router();

const maneaController = require("../controllers").manea;

router.get("/", maneaController.getAllManele);
router.get("/:id", maneaController.getManeaById);
router.post("/", maneaController.addManea);

module.exports = router;
