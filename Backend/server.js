const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User.js");
const bodyparser = require("body-parser");

const app = express();
// app.use(express.json());
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const user_route = require("./routes/user");

//to connect to mongo
mongoose
  .connect("mongodb://localhost:27017/quiz")
  .then(() => console.log("db connected"));

app.use("/users", user_route);

app.listen(4001, () => {
  console.log("server connected");
});
