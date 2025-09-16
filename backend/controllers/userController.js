import model from "../models/userModel.js"; 
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken"; 
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



const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user is not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "invalid credentials"
      });
    }
    // create jwt token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      message: "login successful",
      token,
      user:{
        _id : user._id,
        username : user.username,
        email : user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "server error" , error: error.message
    });
  }
}

export { registerUser , loginUser };
