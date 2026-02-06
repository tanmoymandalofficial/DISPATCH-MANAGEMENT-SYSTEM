const User = require("../models/User");

// register controller
const register = async (req, res) => {
  try {
    const {username, password, role} = req.body;

    // if the user already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }
    
    // user registration 
    const newUser = await User.create({ username, password, role });

    res.status(201).json({ success: true, message: "User registered successfully", data: newUser });



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