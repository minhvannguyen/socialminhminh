import React, { createContext, useContext, useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { useAuth } from "./AuthContext"; // 👈 lấy token từ đây

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const clientRef = useRef(null);
  const { token } = useAuth(); // 👈 lấy token động từ AuthContext

  useEffect(() => {
    if (!token) {
      if (clientRef.current) {
        clientRef.current.deactivate();
        clientRef.current = null;
        console.log("🛑 WebSocket disconnected (token null)");
      }
      return;
    }

    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/chat"),
      connectHeaders: {
        Authorization: `Bearer ${token}`,
      },
      onConnect: () => {
        console.log("✅ WebSocket connected với token", token);
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, [token]);

  return (
    <SocketContext.Provider value={clientRef}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
