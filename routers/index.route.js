const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index.controller");

router.get("/", indexController.index);
router.get("/detalle/:id?", indexController.detalle);
// router.get("/detalle/:id", indexController.detalleItem);

module.exports = router;
