const express = require("express");
const router = express.Router();


//importando enrutadores
const postRouter = require("./post.router");

//definir rutas
router.use("/post", postRouter);

module.exports = router;