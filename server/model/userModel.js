const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "ismni kiriting"],
    },
    email: {
      type: String,
      required: [true, "emailni kiriting"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Emailni togri kiriting",
      ],
    },
    tel: {
      type: Number,
      required: [true, "nomerni yozing"],
    },
  },
  { timesTamps: true }
);

module.exports = mongoose.model("userModel", userSchema);
