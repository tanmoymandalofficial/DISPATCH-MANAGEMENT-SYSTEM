const User = require("../models/User");
const bcrypt = require("bcryptjs");

// register controller
const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    console.log(req.body);

    // if the user already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // console.log(hashedPassword);

    // user registration
    const newUser = await User.create({
      username,
      password: hashedPassword,
      role,
    });
    
    if (!newUser) {
      return res
        .status(400)
        .json({ success: false, message: "User registration failed" });
    }
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ success: false, message: e.message });
  }
};

// login controllerae
const login = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(400).json({ success: false, message: e.message });
  }
};

module.exports = { register, login };
