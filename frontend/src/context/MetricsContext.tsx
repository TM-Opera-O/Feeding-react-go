import React, { createContext, useContext, useState, ReactNode } from "react";

type Metrics = {
  actividad: number;
  biomasa: number;
  pellets: number;
  saciedad: number;
};

const initialMetrics: Metrics = {
  actividad: 0,
  biomasa: 0,
  pellets: 0,
  saciedad: 0,
};

type ContextType = {
  metrics: Metrics;
  setMetrics: (data: Metrics) => void;
};

const MetricsContext = createContext<ContextType | undefined>(undefined);

export const MetricsProvider = ({ children }: { children: ReactNode }) => {
  const [metrics, setMetrics] = useState<Metrics>(initialMetrics);
  return (
    <MetricsContext.Provider value={{ metrics, setMetrics }}>
      {children}
    </MetricsContext.Provider>
  );
};

export const useMetrics = () => {
  const context = useContext(MetricsContext);
  if (!context) {
    throw new Error("useMetrics debe usarse dentro de MetricsProvider");
  }
  return context;
};
