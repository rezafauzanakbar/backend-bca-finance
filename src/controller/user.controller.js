const userModel = require("../model/user.model");
const { success, failed } = require("../helper/response");

//deklare bcyrpt
const bcyrpt = require("bcrypt");

const userController = {
  // method
  list: async (req, res) => {
    const getUser = await userModel.selectAll();
    try {
      res.json(getUser);
    } catch (err) {
      res.json(err);
    }
  },
  detail: async (req, res) => {
    // method untuk menampilkan hanya satu id
    const id_user = req.params.id;
    const getUser = await userModel.selectDetail(id_user);
    try {
      res.json(getUser.rows);
    } catch (err) {
      res.json(err);
    }
  },
  destroy: async (req, res) => {
    // method untuk menghapus
    const id_user = req.params.id;
    const getUser = await userModel.removeById(id_user);
    try {
      res.json(getUser);
    } catch (err) {
      res.json(err);
    }
  },
  update: async (req, res) => {
    const { name, email, phone, password, level } = req.body;
    const id_user = req.params.id;
    // const gambar = req.file.filename;
    const getUser = await userModel.update(
      id_user,
      name,
      email,
      phone,
      password,
      level
    );
    try {
      res.json(getUser);
    } catch (err) {
      res.json(err);
    }
  },
  updatePhoto: (req, res) => {
    const id_user = req.params.id;
    const gambar = req.file.filename;
    userModel
      .updatePhoto(id_user, gambar)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.json(error);
      });
  },

  search: async (req, res) => {
    const name = req.params.name;
    const getUser = await userModel.selectSearch(name);
    try {
      res.json(getUser.rows);
    } catch (err) {
      res.json(err);
    }
  },
  sorting: async (req, res) => {
    const getUser = await userModel.selectSorting();
    try {
      res.json(getUser);
    } catch (err) {
      res.json(err);
    }
  },
};

module.exports = userController;
