// declare library
const express = require("express");
const {
  insert,
  update,
  destroy,
  list,
} = require("../controller/saldo.controller");

// buat variabel dengan memanggil library express router
const router = express.Router();

router
  .get("/saldo", list)
  .post("/saldo", insert)
  .delete("/saldo/:id", destroy)
  .put("/saldo/:id", update);

module.exports = router;
