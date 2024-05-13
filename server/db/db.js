const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("db ga ulandi");
  } catch (error) {
    console.log("db ga ulanmadi" + "   " + error);
  }
};
module.exports = mongoDB;
