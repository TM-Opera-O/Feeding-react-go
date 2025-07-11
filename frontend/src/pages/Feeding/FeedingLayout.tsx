import CageCard from "../../components/feeding/CageCard";

export default function FeedingLayout() {
  const cagesByLine = {
    "Línea 1": [
      { cageId: "101", status: "alimentando", progress: 50 },
      { cageId: "102", status: "en espera", progress: 0 },
      { cageId: "103", status: "en espera", progress: 0 },
    ],
    "Línea 2": [
      { cageId: "201", status: "en espera", progress: 10 },
      { cageId: "202", status: "en espera", progress: 0 },
      { cageId: "203", status: "error", progress: 0 },
    ],
    "Línea 3": [
      { cageId: "201", status: "en espera", progress: 10 },
      { cageId: "202", status: "en espera", progress: 0 },
      { cageId: "203", status: "error", progress: 0 },
    ],
    "Línea 4": [
      { cageId: "201", status: "en espera", progress: 10 },
      { cageId: "202", status: "en espera", progress: 0 },
      { cageId: "203", status: "error", progress: 0 },
    ],
    "Línea 5": [
      { cageId: "201", status: "en espera", progress: 10 },
      { cageId: "202", status: "en espera", progress: 0 },
      { cageId: "203", status: "error", progress: 0 },
    ],
    "Línea 6": [
      { cageId: "201", status: "en espera", progress: 10 },
      { cageId: "202", status: "en espera", progress: 0 },
      { cageId: "203", status: "error", progress: 0 },
    ],
  };

 return (
  <div className="p-0 space-y-10 overflow-y-auto">
    {Object.entries(cagesByLine).map(([lineName, cages]) => (
      <div key={lineName} className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{lineName}</h2>
        <div className="flex flex-wrap gap-4">
          {cages.map((cage) => (
            <CageCard
              key={cage.cageId}
              cageId={cage.cageId}
              status={cage.status as any}
              progress={cage.progress}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

}