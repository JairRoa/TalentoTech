const express = require("express");
const router = express.Router();
const holaController = require("../controllers/holaMundo");


router.get("/", holaController.holaMundo); 


router.get("/gio", (req, res) => {
    console.log("Hola gio");
    res.send("Respuesta desde la ruta /hola/gio");
});

router.get("/jose", (req, res) => {
    console.log("Hola jose");
    res.send("Respuesta desde la ruta /hola/jose");
});

module.exports = router;
