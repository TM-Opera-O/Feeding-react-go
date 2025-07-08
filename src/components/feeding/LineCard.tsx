import { FaPlay, FaStop, FaCog } from "react-icons/fa";
import clsx from "clsx";

export type LineCardProps = {
  lineName: string;
  percent: number;
  alarmStatus?: "Sin alarma" | "Alarma!";
  onFeed?: () => void;
  onStop?: () => void;
  onConfigure?: () => void;
  statusText?: string;
};

export default function LineCard({
  lineName,
  percent,
  alarmStatus = "Sin alarma",
  onFeed,
  onStop,
  onConfigure,
  statusText,
}: LineCardProps) {
  const isAlarm = alarmStatus !== "Sin alarma";

 return (
  <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 rounded-xl shadow mb-2 w-full min-h-[160px] transition duration-300 hover:shadow-lg">
    
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">{lineName}</h3>
      <span
        className={clsx(
          "text-xs px-3 py-1 rounded-full",
          isAlarm
            ? "bg-red-600 text-white"
            : "bg-emerald-600 text-white"
        )}
      >
        {alarmStatus}
      </span>
    </div>

    {/* Controls */}
    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-2">
        <button
          onClick={onFeed}
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded flex items-center justify-center"
          title="Alimentar"
        >
          <FaPlay />
        </button>
        <button
          onClick={onStop}
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded flex items-center justify-center"
          title="Detener"
        >
          <FaStop />
        </button>
      </div>

      <button
        onClick={onConfigure}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded flex items-center justify-center"
        title="Configurar"
      >
        <FaCog />
      </button>
    </div>

    {/* Progress Label */}
    <div className="flex justify-between text-sm mb-1">
      <span>Progreso total</span>
      <span>(/ Kg)</span>
    </div>

    {/* Progress Bar */}
    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
      <div
        className={clsx(
          "h-full transition-all duration-300",
          isAlarm ? "bg-red-500" : "bg-emerald-500"
        )}
        style={{ width: `${percent}%` }}
      />
    </div>

    {/* Status Text */}
    {statusText && (
      <div className="text-base font-medium mt-2 truncate">
        {statusText}
      </div>
    )}
  </div>
);

}
