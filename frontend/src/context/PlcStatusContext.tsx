import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useWebSocketSubscription } from "./WebSocketContext";

/**
 * Contexto para almacenar y compartir la hora actual del PLC.
 */
type PlcStatusContextType = {
  plcTime: string | null;
  isPlcConnected: boolean;
};

const PlcStatusContext = createContext<PlcStatusContextType | undefined>(undefined);

export const PlcStatusProvider = ({ children }: { children: ReactNode }) => {
  const [plcTime, setPlcTime] = useState<string | null>(null);
  const { subscribe } = useWebSocketSubscription();

  useEffect(() => {
    subscribe("feeding/plc/status", (payload) => {
      if (payload?.hora_plc) {
        setPlcTime(payload.hora_plc);
      }
    });
  }, []);

  const isPlcConnected = plcTime !== null;

  return (
    <PlcStatusContext.Provider value={{ plcTime, isPlcConnected }}>
      {children}
    </PlcStatusContext.Provider>
  );
};

export const usePlcStatus = () => {
  const ctx = useContext(PlcStatusContext);
  if (!ctx) throw new Error("usePlcStatus debe usarse dentro de PlcStatusProvider");
  return ctx;
};