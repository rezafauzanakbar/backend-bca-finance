const saldoModel = require("../model/saldo.model");
const { success, failed } = require("../helper/response");

const saldoController = {
  list: (req, res) => {
    saldoModel
      .getAllSaldo()
      .then((result) => {
        success(res, result.rows, "success", "Get All Saldo List Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to get all saldo list");
      });
  },
  insert: (req, res) => {
    try {
      const { nama, saldo } = req.body;
      const data = {
        nama,
        saldo,
      };
      saldoModel
        .insertSaldo(data)
        .then((result) => {
          success(res, result.rows, "success", "Insert Saldo Success");
        })
        .catch((err) => {
          failed(res, err.message, "failed", "Failed to insert saldo");
        });
    } catch (err) {
      console.log(err);
    }
  },
  update: (req, res) => {
    const id = req.params.id;
    const { nama, saldo } = req.body;
    const data = {
      id,
      nama,
      saldo,
    };
    saldoModel
      .updateSaldo(data)
      .then((result) => {
        success(res, result.rowCount, "success", "Update Saldo Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to update saldo");
      });
  },
  destroy: (req, res) => {
    const id = req.params.id;
    saldoModel
      .deleteSaldo(id)
      .then((result) => {
        success(res, result.rowCount, "success", "Delete Saldo Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to delete Saldo");
      });
  },
};

module.exports = saldoController;
