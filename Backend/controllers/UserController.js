const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserController = {
  /*create user*/
  async create_user(req, res, next) {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    });

    try {
      const user = await newUser.save();
      res.status(201).json({
        type: "success",
        message: "User has been created successfuly",
        user,
      });
    } catch (err) {
      res.status(500).json({
        type: "error",
        message: "Something went wrong please try again",
        err,
      });
    }
  },
  async login_user(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const { password, ...data } = user._doc;
          const accessToken = jwt.sign({ id: user._id }, "my secret", {
            expiresIn: "1d",
          });
          res.status(201).json({
            type: "success",
            message: "successfully logged",
            accessToken,
            ...data,
          });
        } else {
          res.status(500).json({
            type: "error",
            message: "incorrect password",
          });
        }
      } else {
        res.status(500).json({
          type: "error",
          message: "incorrect email or email not registered",
        });
      }
    } catch {}
  },

  //to get all users
  async get_users(req, res) {
    try {
      const users = await User.find();
      res.status(200).json({
        type: "success",
        users,
      });
    } catch (err) {
      res.status(500).json({
        type: "error",
        message: "Something went wrong please try again",
        err,
      });
    }
  },
};

module.exports = UserController;
