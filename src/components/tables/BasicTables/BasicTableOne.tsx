import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { FaCog } from "react-icons/fa";
import Badge from "../../ui/badge/Badge";

interface Cage {
  id: number;
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

// Define the table data using the interface
const tableData: Cage[] = [
  {
    id: 1,
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
    name: "103",
    status: "esperando",
    rate: 600,
    factoractivity: 100,
    completedvisits: 10,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 0,
    silo: "Silo A",
  },
  {
    id: 3,
    name: "105",
    status: "alarma",
    rate: 600,
    factoractivity: 100,
    completedvisits: 10,
    totalvisits: 100,
    visitobjective: 5500,
    feededvisit: 0,
    silo: "Silo A",
  },
];

export default function BasicTableOne() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <Table>
        {/* Table Body */}
        <TableBody className="  divide-gray-100 dark:divide-white/[0.05]">
          {tableData.map((cage) => (
            <TableRow  key={cage.id}>
              <TableCell className="px-4 py-3 text-center text-theme-sm text-gray-500 dark:text-gray-400">
                <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                  {cage.name}
                </span>
              </TableCell>
              <TableCell className="px-4 py-3 text-center text-theme-sm text-gray-500 dark:text-gray-400">
                <Badge
                  size="sm"
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
                  {cage.status.charAt(0).toUpperCase() + cage.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="px-4 py-3 text-center text-theme-sm text-gray-500 dark:text-gray-400">
                {cage.rate}
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                {cage.factoractivity}
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                <p>
                  {" "}
                  {cage.completedvisits}/{cage.totalvisits}{" "}
                </p>
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                <p>
                  {cage.feededvisit}/{cage.visitobjective} Grams
                </p>
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                {cage.silo}
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                <button
                  className="bg-emerald-600 hover:bg-emerald-800 text-white p-1.5 rounded "
                  title="Alimentar"
                >
                  <FaCog className="w-5 h-5" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
