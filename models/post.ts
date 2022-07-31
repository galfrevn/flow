import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    content: { type: String, required: true },
    user: {
      id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      name: { type: String, required: true },
      image: { type: String, required: true },
    },
    image: {
      type: String,
      required: false,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
