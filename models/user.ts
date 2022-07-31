import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    emailVerified: String,
    description: { type: String, required: false, default: "Tell us about you..." }
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
