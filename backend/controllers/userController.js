const User = require("../models/userModel");
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "this fields is required"
      });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "user is already exist"
      });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      _id : user._id,
      username : user.username,
      email :user.email
    })
    
  } catch (error) {
    res.status(500).json({
      message:"server error"
    })
    
  }
}

module.exports = { registerUser };
