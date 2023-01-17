// declare library
const express = require("express");
const {
  listByUser,
  insert,
  update,
  destroy,
} = require("../controller/transaksi.controller");

// buat variabel dengan memanggil library express router
const router = express.Router();

router
  .get("/transaksi/:id", listByUser)
  .post("/transaksi", insert)
  .delete("/transaksi/:id", destroy)
  .put("/transaksi/:id", update);

module.exports = router;
