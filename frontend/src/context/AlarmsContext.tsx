import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useWebSocketSubscription } from "./WebSocketContext";

// Tipado del payload de alarma (puedes hacerlo más detallado si gustas)
interface AlarmComponent {
  status: boolean;
  [key: string]: any;
}

interface AlarmsPayload {
  linea?: AlarmComponent[];
  blower?: AlarmComponent[];
  esclusa?: AlarmComponent[];
  doser?: AlarmComponent[];
  selectora?: AlarmComponent[];
  tolva?: AlarmComponent[];
  guillotina?: AlarmComponent[];
  presion?: AlarmComponent[];
}

interface AlarmsContextType {
  alarms: AlarmsPayload | null;
}

const AlarmsContext = createContext<AlarmsContextType | undefined>(undefined);

export const AlarmsProvider = ({ children }: { children: ReactNode }) => {
  const [alarms, setAlarms] = useState<AlarmsPayload | null>(null);
  const { subscribe } = useWebSocketSubscription();

  useEffect(() => {
    subscribe("feeding/plcto/alarmas", (message) => {
      console.log("🔔 Alarmas recibidas:", message);

      // Validamos estructura
      if (message && typeof message === "object" && message.payload) {
        setAlarms(message.payload);
      }
    });
  }, [subscribe]);

  return (
    <AlarmsContext.Provider value={{ alarms }}>
      {children}
    </AlarmsContext.Provider>
  );
};

export const useAlarms = () => {
  const ctx = useContext(AlarmsContext);
  if (!ctx) throw new Error("useAlarms debe usarse dentro de AlarmsProvider");
  return ctx;
};
