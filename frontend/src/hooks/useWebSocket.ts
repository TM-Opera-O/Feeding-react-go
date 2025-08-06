import { useEffect, useRef } from "react";

export const useWebSocket = (url: string, onMessage: (msg: string) => void) => {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onopen = () => {
      console.log("✅ WebSocket conectado");
    };

    socketRef.current.onmessage = (event) => {
      onMessage(event.data);
    };

    socketRef.current.onerror = (err) => {
      console.error("❌ WebSocket error:", err);
    };

    socketRef.current.onclose = () => {
      console.log("🔌 WebSocket cerrado");
    };

    return () => {
      socketRef.current?.close();
    };
  }, [url]);
};
