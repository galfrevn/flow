import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
import messageHandler from "pages/api/chat/messageHandler";
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from "types/socket";

export default function SocketHandler(req: NextApiRequest, res: any) {
  // It means that socket server was already initialised
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >(res.socket.server);
  res.socket.server.io = io;

  const onConnection = (socket: any) => {
    messageHandler(io, socket);
  };

  // Define actions inside
  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
}
