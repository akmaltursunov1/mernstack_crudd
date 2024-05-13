const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoDB = require("./db/db");
dotenv.config();
const userRouter = require("./routes/userRoutes");
mongoDB();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/user", userRouter);

const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`${port}-da ishladi`);
});
