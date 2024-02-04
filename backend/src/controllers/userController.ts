import { Request, Response } from "express";
import userModel from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
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


export const loginUser = async (req: Request, res: Response) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Fill the required fields"
      })
    }

    const exist = await userModel.findOne({ email })

    if (!exist) {
      return res.status(401).json({
        message: "Wrong user email or password"
      })
    }

    const checkPassword = await bcrypt.compare(password, exist.passwordHash);

    if (!checkPassword) {
      return res.status(400).json({
        message: "Wrong email or password"
      })
    };


    const token = jwt.sign({
      id: exist._id
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


export const logoutUser = (req: Request, res: Response) => {


  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0)
  }).send();

  res.status(200).json({
    message: "User logged out"
  })

}