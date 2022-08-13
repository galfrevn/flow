import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "lib/mongodb";
import User from "models/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = await connectDB();
    if (!db) res.status(500).send("Database connection failed");

    const { id } = req.query;

    const user = await User.findOne({ id });
    if (!user) res.status(404).send("User not found");

    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
