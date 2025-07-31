import { useEffect, useRef } from "react";

export const useWebSocket = (onMessage: (data: any) => void) => {
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Abre la conexión WebSocket
    ws.current = new WebSocket("ws://localhost:8080/ws");

    ws.current.onopen = () => {
      console.log("✅ Conectado al WebSocket del backend");
    };

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        onMessage(data);
      } catch (err) {
        console.error("❌ Error al parsear mensaje WS:", err);
      }
    };

    ws.current.onerror = (err) => {
      console.error("🛑 Error WebSocket:", err);
    };

    ws.current.onclose = () => {
      console.warn("🔌 WebSocket cerrado");
    };

    return () => {
      ws.current?.close();
    };
  }, []);
};
