import mongoose, { Schema } from "mongoose";
import { IUser } from "../types";


const userModel: Schema<IUser> = new mongoose.Schema({
  email: {
    require: true,
    type: String,
    unique: true
  },
  passwordHash: {
    require: true,
    type: String
  }
}, {
  timestamps: true
}
);

export default mongoose.model("user", userModel);