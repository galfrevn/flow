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

    const { _page, _limit } = req.query;
    const page: number = _page ? parseInt(_page as string) : 1;
    const limit: number = _limit ? parseInt(_limit as string) : 20;

    const posts = await Post.find({})
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 })
      .exec();

    if (!posts) res.status(500).send("No post found");

    res.status(201).json(posts);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
