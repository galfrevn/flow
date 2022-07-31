import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "lib/mongodb";
import Post from "models/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = await connectDB();
    if (!db) res.status(500).send("Database connection failed");

    const { id, user } = req.body;
    const post = await Post.findOne({
      _id: id,
    });

    const isLiked = post.likes.includes(user.id) ? true : false;
    if (isLiked) {
      await Post.findByIdAndUpdate(id, { $pull: { likes: user.id } });
    } else {
      await Post.findOneAndUpdate({ _id: id }, { $push: { likes: user.id } });
    }

    res.status(200).send(isLiked ? "Disliked" : "Liked");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
