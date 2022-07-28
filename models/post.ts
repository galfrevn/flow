import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    image: { required: false, type: String },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
