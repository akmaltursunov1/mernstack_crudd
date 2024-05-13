const express = require("express");
const {
  addUser,
  getAllUser,
  oneUser,
  updateUser,
  deletUser,
} = require("../controller/usercontroler");
const router = express.Router();

router.post("/add", addUser);
router.get("/all", getAllUser);
router.get("/oneuser/:id", oneUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deletUser);

module.exports = router;
