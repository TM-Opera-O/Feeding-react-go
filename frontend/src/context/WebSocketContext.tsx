import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

/**
 * Tipo de función callback para manejar mensajes de un topic.
 */
type Callback = (payload: any) => void;

/**
 * Mapa de suscripciones: topic → conjunto de callbacks
 */
type SubscriptionMap = Map<string, Set<Callback>>;

/**
 * Interfaz expuesta por el contexto
 */
interface WebSocketContextType {
  subscribe: (topic: string, callback: Callback) => void;
  isConnected: boolean;
}

/**
 * Contexto real
 */
const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined
);

/**
 * Proveedor global que abre una sola conexión WebSocket
 */
export const WebSocketProvider = ({ children }: { children: ReactNode }) => {
  const subscriptions = useRef<SubscriptionMap>(new Map());
  const socketRef = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("🟢 WebSocket conectado");
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      console.log("📦 [WS raw] Mensaje recibido:", event.data); // <-
      try {
        const message = JSON.parse(event.data);
        const { topic, payload } = message;

        if (!topic) return;

        const callbacks = subscriptions.current.get(topic);
        if (callbacks) {1
          callbacks.forEach((cb) => cb(payload));
        }
      } catch (err) {
        console.error("❌ Error al parsear mensaje WebSocket:", event.data);
      }
    };

    socket.onclose = () => {
      console.warn("🔌 WebSocket cerrado");
      setIsConnected(false);
    };

    return () => {
      socket.close();
    };
  }, []);

  /**
   * Permite a cualquier consumidor suscribirse a un topic específico
   */
  const subscribe = (topic: string, callback: Callback) => {
    if (!subscriptions.current.has(topic)) {
      subscriptions.current.set(topic, new Set());
    }
    subscriptions.current.get(topic)!.add(callback);
  };

  return (
    <WebSocketContext.Provider value={{ subscribe, isConnected }}>
      {children}
    </WebSocketContext.Provider>
  );
};

/**
 * Hook para acceder a la función `subscribe()` desde otros contextos o componentes
 */
export const useWebSocketSubscription = (): WebSocketContextType => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error(
      "useWebSocketSubscription debe usarse dentro de WebSocketProvider"
    );
  }
  return context;
};
