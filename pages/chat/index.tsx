import type { Message } from "types/chat";
import type { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";

import React, { useState, useEffect, useRef } from "react";
import SocketIOClient from "socket.io-client";
import { getSession } from "next-auth/react";

const PATH = "https://social-pwa.vercel.app"

const Chat: NextPage = ({ session }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [connected, setConnected] = useState<boolean>(false);
  const [chat, setChat] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const socket = (SocketIOClient as any).connect(PATH, {
      path: "/api/chat/socketio",
    });

    socket.on("connect", () => {
      console.log("🚀 Socket connected", socket.id);
      setConnected(true);
    });

    socket.on("message", (message: Message) => {
      chat.push(message);
      setChat([...chat]);
    });

    if (socket) return () => socket.disconnect();
  }, []);

  const sendMessage = async () => {
    if (message) {
      const currentMessage: Message = {
        username: session.user.name,
        content: message,
      };

      const sendedMessage = await fetch("/api/chat/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentMessage),
      });

      if (sendedMessage.ok) setMessage("");
    }
    inputRef?.current?.focus();
  };

  return (
    <div >

      {chat.length ? (
        chat.map((chat, index) => (
          <div key={`message-${index}`}>
            <span>
              {chat.username === session.user.name ? "Me" : chat.username}
            </span>
            : {chat.content}
          </div>
        ))
      ) : (
        <div >
          No chat messages
        </div>
      )}

      <input
        ref={inputRef}
        type="text"
        value={message}
        placeholder={connected ? "Type a message..." : "Connecting..."}
        disabled={!connected}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => e.key === "Enter" && sendMessage()}
      />

      <button
        onClick={sendMessage}
        disabled={!connected}
      >
        SEND
      </button>

    </div>
  );
};

export default Chat

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);

  if (!session)
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};