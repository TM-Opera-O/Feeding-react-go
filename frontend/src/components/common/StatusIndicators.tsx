import { useWebSocketSubscription } from "../../context/WebSocketContext";
import { usePlcStatus } from "../../context/PlcStatusContext";

export default function StatusIndicators() {
  const { isConnected } = useWebSocketSubscription();
  const { isPlcConnected } = usePlcStatus();

  return (
    <div className="flex items-center gap-2 text-xs">
      {/* Estado WebSocket */}
      <span
        className={`px-2 py-1 rounded-md font-medium ${
          isConnected
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        🟢 Server {isConnected ? "Conectado" : "Desconectado"}
      </span>

      {/* Estado PLC */}
      <span
        className={`px-2 py-1 rounded-md font-medium ${
          isPlcConnected
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        🟢 PLC {isPlcConnected ? "Activo" : "Desconectado"}
      </span>
    </div>
  );
}
