import type { NextApiRequest } from "next";
import type { NextApiResponseServerIO } from "types/socket";

export default (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === "POST") {
    const { body: message } = req;

    res?.socket?.server?.io?.emit("message", message);
    res.status(201).json(message);
  }
};
