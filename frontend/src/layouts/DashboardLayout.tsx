import { ReactNode } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex min-w-0 flex-1 flex-col">

        <Topbar />

        <main className="flex-1 overflow-y-auto">

          <div className="mx-auto w-full max-w-7xl px-8 py-8">

            {children}

          </div>

        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;