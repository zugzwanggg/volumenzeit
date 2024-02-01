import mongoose from "mongoose";


const userModel = new mongoose.Schema({
  email: {
    require: true,
    type: String
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