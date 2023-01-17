const db = require("../config/db");
const saldoModel = {
  //get all experience
  getAllSaldo: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM saldo;`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  //model inser
  insertSaldo: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO saldo (nama, saldo) VALUES ('${data.nama}', ${data.saldo})`,
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
  updateSaldo: ({ id, nama, saldo }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE saldo SET
            nama = COALESCE($1, nama),
            saldo = COALESCE($2, saldo)
            WHERE id = $3`,
        [nama, saldo, id],
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
  deleteSaldo: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM saldo WHERE id='${id}'`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
};

module.exports = saldoModel;
