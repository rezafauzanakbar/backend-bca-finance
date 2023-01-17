const db = require("../config/db");
const transaksiModel = {
  //model register
  //get all experience
  getTransaksiByUser: (id_saldo) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM transaksi join saldo on transaksi.id_saldo = saldo.id WHERE transaksi.id_saldo = ${id_saldo};`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  insertTransaksi: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO transaksi (id_saldo, nominal, jenis, tanggal) VALUES ('${data.id_saldo}', ${data.nominal}, '${data.jenis}', '${data.tanggal}')`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  //update experience
  updateTransaksi: ({ id, nominal, jenis, tanggal }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE transaksi SET
            nominal = COALESCE($1, nominal),
            jenis = COALESCE($2, jenis),
            tanggal = COALESCE($3, tanggal)
            WHERE id = $4`,
        [nominal, jenis, tanggal, id],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  //delete experience
  deleteTransaksi: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM transaksi WHERE id='${id}'`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
};

module.exports = transaksiModel;
