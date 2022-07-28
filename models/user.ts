import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: false, default: null },
  isVerified: { type: Boolean, required: true, default: false },
});

const User = models.User || model("User", userSchema);

export default User;
