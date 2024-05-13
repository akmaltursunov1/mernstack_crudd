const userModel = require("../model/userModel");

const addUser = async (req, res) => {
  try {
    const { userName, email, tel } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(404).send({
        success: false,
        message: "bu odam tizmda bor",
      });
    }
    const newUser = await userModel.create(req.body);
    res.status(201).send({ success: true, message: "odam qo'shildi", newUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      message: "addUser api dan xatolik",
      error: error.message,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find({});
    if (!users) {
      return res.status(404).send({
        success: false,
        message: "userlar topilmadi",
      });
    }
    res.status(200).send({
      success: true,
      message: "users successfully",
      sanoq: users.length + "  ta",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "getAll user api dan xatolik ",
      error,
    });
  }
};

const oneUser = async (req, res) => {
  try {
    const oneuserID = req.params.id;
    const oneuser = await userModel.findById(oneuserID);
    if (!oneuser) {
      return res.status(404).send({
        success: false,
        message: "Bunday foydalanuvchi topilmadi",
      });
    }
    res.status(200).send({
      success: true,
      message: "success",
      oneuser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "oneUser api dan xatolik",
      error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const updateUserID = req.params.id;
    const { userName, email, tel } = req.body;
    const updateUser = await userModel.findById(updateUserID);
    if (!updateUser) {
      return res.status(404).send({
        success: false,
        message: "Bunday foydalanuvchi topilmadi",
      });
    }
    const updateU = await userModel.findByIdAndUpdate(updateUserID, req.body, {
      new: true,
    });
    res.status(200).send({
      success: true,
      message: "user o'zgartrildi",
      updateU,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "updateUser api dan xatolik",
      error,
    });
  }
};

const deletUser = async (req, res) => {
  try {
    const deletID = req.params.id;
    const deletUser = await userModel.findById(deletID);
    if (!deletUser) {
      return res.status(404).send({
        success: false,
        message: "bunday foydalanuvchi topilmadi",
      });
    }
    await userModel.findByIdAndDelete(deletID);
    res.status(200).send({
      success: true,
      message: "delet user",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "deletUser api dan xatolik",
      error,
    });
  }
};
module.exports = { addUser, getAllUser, oneUser, updateUser, deletUser };
