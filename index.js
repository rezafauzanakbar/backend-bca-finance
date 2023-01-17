// declare library
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");

// buat route
const transaksiRouter = require("./src/router/transaksi.router");
const saldoRouter = require("./src/router/saldo.router");

const app = express();
app.use(express.static("public/gambar/"));
app.use(bodyParser.json());
app.use(helmet());
app.use(xss());
app.use(cors());
app.use(saldoRouter);
app.use(transaksiRouter);

// jalankan express
app.listen(process.env.PORT, () => {
  console.log("SERVECE RUNNING ON PORT 3001");
});
