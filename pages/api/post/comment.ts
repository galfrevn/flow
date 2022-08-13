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

    const { comment } = req.body;
    const { _id } = req.query;

    const post = await Post.findOne({
      _id,
    });

    if (!post) res.status(404).send("Post not found");
    await Post.findOneAndUpdate({ _id }, { $push: { comments: comment } });

    res.status(200).send("Comment added");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
