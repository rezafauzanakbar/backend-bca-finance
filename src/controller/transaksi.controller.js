const transaksiModel = require("../model/transaksi.model");
const { success, failed } = require("../helper/response");

const tranksasiController = {
  listByUser: (req, res) => {
    const id_saldo = req.params.id;
    transaksiModel
      .getTransaksiByUser(id_saldo)
      .then((result) => {
        success(
          res,
          result.rows,
          "success",
          "Get All Transaksi By User Success"
        );
      })
      .catch((err) => {
        failed(
          res,
          err.message,
          "failed",
          "Failed to get all experience by user"
        );
      });
  },
  insert: (req, res) => {
    try {
      const { id_saldo, nominal, jenis, tanggal } = req.body;
      const data = {
        id_saldo,
        nominal,
        jenis,
        tanggal,
      };
      transaksiModel
        .insertTransaksi(data)
        .then((result) => {
          success(res, result.rows, "success", "Insert Transaksi Success");
        })
        .catch((err) => {
          failed(res, err.message, "failed", "Failed to insert transaksi");
        });
    } catch (err) {
      console.log(err);
    }
  },
  update: (req, res) => {
    const id = req.params.id;
    const { nominal, jenis, tanggal } = req.body;
    const data = {
      id,
      nominal,
      jenis,
      tanggal,
    };
    transaksiModel
      .updateTransaksi(data)
      .then((result) => {
        success(res, result.rowCount, "success", "Update Transaksi Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to update tranksasi");
      });
  },
  destroy: (req, res) => {
    const id = req.params.id;
    transaksiModel
      .deleteTransaksi(id)
      .then((result) => {
        success(res, result.rowCount, "success", "Delete transaksi Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to delete transaksi");
      });
  },
};

module.exports = tranksasiController;
