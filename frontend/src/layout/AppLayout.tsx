import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";
import LinePanel from "./LinePanel";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const sidebarWidth = isExpanded || isHovered ? "lg:w-[290px]" : "lg:w-[90px]";
  const mobileSidebar = isMobileOpen ? "ml-0" : "";

  return (
    <div className="min-h-screen flex">  {/* ← cambiar xl:flex por flex fijo */}

      {/* Sidebar */}
      <div className={`transition-all duration-300 ease-in-out ${sidebarWidth} ${mobileSidebar}`}>
        <AppSidebar />
        <Backdrop />
      </div>

      {/* LinePanel */}
      <div className="hidden xl:block w-80 bg-gray-900 border-r border-gray-800">
        <LinePanel />
      </div>

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300 ease-in-out">
        <AppHeader />
        <div className="p-4 mx-auto max-w-[--breakpoint-2xl] md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
