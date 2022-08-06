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

    const { id } = req.query;

    const post = await Post.find({ _id: id });
    if (!post) res.status(500).send("No post found");

    res.status(201).json(post);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
