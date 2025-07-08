import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { FaCog } from "react-icons/fa";
import Badge from "../../components/ui/badge/Badge";

interface Cage {
  id: number;
  linea: string;
  name: string;
  status: string;
  rate: number;
  factoractivity: number;
  completedvisits: number;
  totalvisits: number;
  visitobjective: number;
  feededvisit: number;
  silo: string;
}

const tableData: Cage[] = [
  // Línea 1
  {
    id: 1,
    linea: "Línea 1",
    name: "101",
    status: "alimentando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 10,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 0,
    silo: "Silo A",
  },
  {
    id: 2,
    linea: "Línea 1",
    name: "102",
    status: "esperando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 20,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 200,
    silo: "Silo A",
  },
  {
    id: 3,
    linea: "Línea 1",
    name: "103",
    status: "alarma",
    rate: 600,
    factoractivity: 100,
    completedvisits: 30,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 400,
    silo: "Silo A",
  },

  // Línea 2
  {
    id: 4,
    linea: "Línea 2",
    name: "201",
    status: "alimentando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 40,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 800,
    silo: "Silo B",
  },
  {
    id: 5,
    linea: "Línea 2",
    name: "202",
    status: "esperando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 50,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 900,
    silo: "Silo B",
  },
  {
    id: 6,
    linea: "Línea 2",
    name: "203",
    status: "alarma",
    rate: 600,
    factoractivity: 100,
    completedvisits: 60,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 1000,
    silo: "Silo B",
  },

  // Línea 3
  {
    id: 7,
    linea: "Línea 3",
    name: "301",
    status: "alimentando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 70,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 1200,
    silo: "Silo C",
  },
  {
    id: 8,
    linea: "Línea 3",
    name: "302",
    status: "esperando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 80,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 1300,
    silo: "Silo C",
  },
  {
    id: 9,
    linea: "Línea 3",
    name: "303",
    status: "alarma",
    rate: 600,
    factoractivity: 100,
    completedvisits: 90,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 1400,
    silo: "Silo C",
  },

  // Línea 4
  {
    id: 10,
    linea: "Línea 4",
    name: "401",
    status: "alimentando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 15,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 100,
    silo: "Silo D",
  },
  {
    id: 11,
    linea: "Línea 4",
    name: "402",
    status: "esperando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 25,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 200,
    silo: "Silo D",
  },
  {
    id: 12,
    linea: "Línea 4",
    name: "403",
    status: "alarma",
    rate: 600,
    factoractivity: 100,
    completedvisits: 35,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 300,
    silo: "Silo D",
  },

  // Línea 5
  {
    id: 13,
    linea: "Línea 5",
    name: "501",
    status: "alimentando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 45,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 400,
    silo: "Silo E",
  },
  {
    id: 14,
    linea: "Línea 5",
    name: "502",
    status: "esperando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 55,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 500,
    silo: "Silo E",
  },
  {
    id: 15,
    linea: "Línea 5",
    name: "503",
    status: "alarma",
    rate: 600,
    factoractivity: 100,
    completedvisits: 65,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 600,
    silo: "Silo E",
  },

  // Línea 6
  {
    id: 16,
    linea: "Línea 6",
    name: "601",
    status: "alimentando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 75,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 700,
    silo: "Silo F",
  },
  {
    id: 17,
    linea: "Línea 6",
    name: "602",
    status: "esperando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 85,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 800,
    silo: "Silo F",
  },
  {
    id: 18,
    linea: "Línea 6",
    name: "603",
    status: "alarma",
    rate: 600,
    factoractivity: 100,
    completedvisits: 95,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 900,
    silo: "Silo F",
  },
];

const lineColorMap: Record<string, string> = {
  "Línea 1": "bg-indigo-600/20 text-indigo-300",
  "Línea 2": "bg-blue-600/20 text-blue-300",
  "Línea 3": "bg-emerald-600/20 text-emerald-300",
  "Línea 4": "bg-yellow-600/20 text-yellow-300",
  "Línea 5": "bg-pink-600/20 text-pink-300",
  "Línea 6": "bg-rose-600/20 text-rose-300",
};

function groupByLine(data: Cage[]) {
  return data.reduce((acc: Record<string, Cage[]>, item) => {
    if (!acc[item.linea]) acc[item.linea] = [];
    acc[item.linea].push(item);
    return acc;
  }, {});
}

export default function GroupedTable() {
  const grouped = groupByLine(tableData);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table className="table-fixed w-full">
          <TableHeader className="text-center text-gray-800 dark:text-gray-100">
            <TableRow>
              <TableCell isHeader className="py-5 text-center">
                {""}
              </TableCell>
              <TableCell isHeader className="text-center">
                Estado
              </TableCell>
              <TableCell isHeader className="text-center">
                Tasa
              </TableCell>
              <TableCell isHeader className="text-center">
                Factor Actividad
              </TableCell>
              <TableCell isHeader className="text-center">
                Visita
              </TableCell>
              <TableCell isHeader className="text-center">
                Total Objetivo
              </TableCell>
              <TableCell isHeader className="text-center">
                Silo
              </TableCell>
              <TableCell isHeader className="text-center">
                Config
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="text-center text-gray-600 dark:text-gray-200">
            {Object.entries(grouped).map(([linea, cages]) => (
              <>
                {/* Línea como separador */}
                <TableRow>
                  <td colSpan={8}>
                    <div className="w-full border-t border-black-900 mb-3 -mx-4   dark:border-white/[0.3]" />
                    <div
                      className={`ml-4 text-left rounded  py-1 text-sm font-semibold`}
                    >
                      {linea}
                    </div>
                  </td>
                </TableRow>
                {cages.map((cage) => (
                  <TableRow key={cage.id}>
                    <TableCell className="px-0 py-1 text-center text-theme-xl text-gray-500 dark:text-gray-100">
                      Jaula {cage.name}
                    </TableCell>
                    <TableCell className="text-center ">
                      <Badge
                        size="md"
                        variant="light"
                        color={
                          cage.status === "esperando"
                            ? "warning"
                            : cage.status === "detenida"
                            ? "dark"
                            : cage.status === "alimentando"
                            ? "success"
                            : cage.status === "completada"
                            ? "info"
                            : cage.status === "alarma"
                            ? "error"
                            : "light"
                        }
                      >
                        {cage.status.charAt(0).toUpperCase() +
                          cage.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-0 py-1 text-center">
                      <div>{cage.rate}</div>
                      <div className="text-xs text-gray-400">Grams/sec</div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div>{cage.factoractivity}</div>
                      <div className="text-xs text-gray-400">%</div>
                    </TableCell>
                    <TableCell className="text-center">
                      {cage.completedvisits}/{cage.totalvisits}
                    </TableCell>
                    <TableCell className="text-center">
                      {cage.feededvisit}/{cage.visitobjective} Grams
                    </TableCell>
                    <TableCell className="text-center">{cage.silo}</TableCell>
                    <TableCell className="text-center">
                      <button
                        className="bg-emerald-600 hover:bg-emerald-800 text-white p-1.5 rounded"
                        title="Alimentar"
                      >
                        <FaCog className="w-5 h-5" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
