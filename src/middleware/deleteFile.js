const fs = require("fs");
const userModel = require("../model/user.model");

const remove = async (req, res, next) => {
  const id_user = req.params.id;
  const data = await userModel.selectDetail(id_user);
  if (data) {
    if (data.rows[0].gambar) {
      const img = data.rows[0].gambar;
      if (img !== "default.png") {
        fs.unlink(`./public/gambar/${img}`, (err) => {
          if (err) {
            res.json({
              message: "delete failed",
              error: err,
            });
          }
        });
      }
      next();
    } else {
      res.json("There is no profile picture");
    }
  } else {
    res.json("user ID is not found");
  }
};

module.exports = remove;
