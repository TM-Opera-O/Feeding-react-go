import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { MetricsProvider } from "./context/MetricsContext.tsx";
import { AlarmsProvider } from "./context/AlarmsContext.tsx";
import { WebSocketProvider } from "./context/WebSocketContext.tsx";
import { PlcStatusProvider } from "./context/PlcStatusContext";

<PlcStatusProvider>
  <App />
</PlcStatusProvider>

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <WebSocketProvider>
        <PlcStatusProvider>
          <MetricsProvider>
            <AlarmsProvider>
              <AppWrapper>
                <App />
              </AppWrapper>
            </AlarmsProvider>
          </MetricsProvider>
        </PlcStatusProvider>
      </WebSocketProvider>
    </ThemeProvider>
  </StrictMode>
);
