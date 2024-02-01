import userModel from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const { fullName, email, password, verifyPassword } = req.body;

    if (!fullName || !email || !password || !verifyPassword) {
      return res.status(400).json({
        message: "Enter all required fields"
      })
    };

    if (fullName.length < 3) {
      return res.status(400).json({
        message: "Your name is too short"
      })
    }

    if (password.length < 4) {
      return res.status(400).json({
        message: "Password is too short"
      })
    };

    if (password !== verifyPassword) {
      return res.status(400).json({
        message: "Password are not matching"
      })
    };

    // Check the existence

    const exist = await userModel.findOne({ email });

    if (exist) return res.status(400).json({
      message: "User already exists"
    });

    // Hash the password

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);


    // Create user

    const user = await new userModel({
      fullName,
      email,
      passwordHash
    });

    const savedUser = await user.save();

    // Log the user

    const token = jwt.sign({
      id: savedUser._id
    }, process.env.JWT_KEY || "");

    res.cookie("token", token, {
      httpOnly: true
    }).send()

  } catch (error) {
    res.status(500).json({
      message: error
    })
  }
}