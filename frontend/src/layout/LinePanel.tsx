import { ReactNode } from "react";
import LineCard from "../components/feeding/LineCard";

type LinePanelProps = {
  children?: ReactNode;
};

export default function LinePanel({ children }: LinePanelProps) {
  return (
    <aside
      className="w-80 xl:w-80 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-2 border-r border-gray-300 dark:border-gray-800 h-screen flex flex-col"
    >
      <h2 className="text-lg font-semibold mb-2 px-2">Líneas de Alimentación</h2>

      {/* Contenedor de las LineCards */}
      <div className="flex-1 flex flex-col gap-1 overflow-y-auto max-h-[100vh] pr-1">
        {children}

        {/* Ejemplos de LineCard */}
        <LineCard
          lineName="Línea 1"
          percent={65}
          alarmStatus="Sin alarma"
          onFeed={() => console.log("Feeding Línea 1")}
          onStop={() => console.log("Stopping Línea 1")}
          onConfigure={() => console.log("Configure Línea 1")}
          statusText="Alimentando Jaula 101..."
        />
        <LineCard
          lineName="Línea 2"
          percent={10}
          alarmStatus="Sin alarma"
          onFeed={() => console.log("Feeding Línea 2")}
          onStop={() => console.log("Stopping Línea 2")}
          onConfigure={() => console.log("Configure Línea 2")}
          statusText="Esperando Jaula 102..."
        />
        <LineCard
          lineName="Línea 3"
          percent={65}
          alarmStatus="Sin alarma"
          onFeed={() => console.log("Feeding Línea 3")}
          onStop={() => console.log("Stopping Línea 3")}
          onConfigure={() => console.log("Configure Línea 3")}
          statusText="Alimentando Jaula 101..."
        />
        <LineCard
          lineName="Línea 4"
          percent={10}
          alarmStatus="Sin alarma"
          onFeed={() => console.log("Feeding Línea 4")}
          onStop={() => console.log("Stopping Línea 4")}
          onConfigure={() => console.log("Configure Línea 4")}
          statusText="Esperando Jaula 102..."
        />
        <LineCard
          lineName="Línea 5"
          percent={10}
          alarmStatus="Sin alarma"
          onFeed={() => console.log("Feeding Línea 5")}
          onStop={() => console.log("Stopping Línea 5")}
          onConfigure={() => console.log("Configure Línea 5")}
          statusText="Esperando Jaula 102..."
        />
        <LineCard
          lineName="Línea 6"
          percent={10}
          alarmStatus="Sin alarma"
          onFeed={() => console.log("Feeding Línea 6")}
          onStop={() => console.log("Stopping Línea 6")}
          onConfigure={() => console.log("Configure Línea 6")}
          statusText="Esperando Jaula 102..."
        />
      </div>
    </aside>
  );
}
