type CageCardProps = {
  cageId: string;
  status: "alimentando" | "en espera" | "error";
  progress: number;
};

export default function CageCard({
  cageId,
  status,
  progress,
}: CageCardProps) {
  const statusColor = {
    alimentando: "bg-emerald-600",
    "en espera": "bg-yellow-500",
    error: "bg-red-600",
  }[status];

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 rounded-lg w-52 shadow transition-colors duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-sm">Jaula {cageId}</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full ${statusColor}`}>
          {status}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded-full mb-2 overflow-hidden">
        <div
          className={`h-full ${statusColor} transition-all duration-300`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
