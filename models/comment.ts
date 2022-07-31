import { Schema, model, models } from "mongoose";

const commentSchema = new Schema({
  content: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
