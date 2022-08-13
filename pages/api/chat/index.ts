import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
import messageHandler from "pages/api/chat/messageHandler";
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from "types/socket";

export default function SocketHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // It means that socket server was already initialised
  if (res.socket.server.io as any) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >(res.socket.server as any);
  res.socket.server.io as any = io;

  const onConnection = (socket: any) => {
    messageHandler(io, socket);
  };

  // Define actions inside
  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
}
