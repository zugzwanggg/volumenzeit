import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  profileUrl: String
},{
  timestamps: true
});

export default mongoose.model('user', userModel);