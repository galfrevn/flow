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

    const { user, content, image } = req.body;
    const post = await Post.create({
      content,
      image,
    });
    if (!post) res.status(500).send("Post creation failed");

    res.status(201).json({ post });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
