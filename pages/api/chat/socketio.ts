import type { NextApiRequest } from "next";
import type { NextApiResponseServerIO } from "types/socket";
import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    console.log("⌛ Creating socket server");
    const httpServer: NetServer = res.socket.server as any;
    const io = new ServerIO(httpServer, {
      path: "/api/chat/socketio",
    });
    res.socket.server.io = io;
  }
  res.end();
};