import DashboardLayout from "../../layouts/DashboardLayout";
import StatsGrid from "../../components/admin/StatsGrid";
import DashboardHeader from "../../components/admin/DashboardHeader";
import ComplaintTrendChart from "../../components/admin/ComplaintTrendChart";
import CategoryChart from "../../components/admin/CategoryChart";
import RecentComplaintsTable from "../../components/admin/RecentComplaintsTable";
import AIInsightsCard from "../../components/admin/AIInsightsCard";
import AdminQuickActions from "../../components/admin/AdminQuickActions";
const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <DashboardHeader />
        {/* Dashboard Header */}

        <StatsGrid />

        <div className="grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
                <ComplaintTrendChart />
            </div>

            <CategoryChart />
        </div>
        <RecentComplaintsTable />

        <div className="grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
                <RecentComplaintsTable />
            </div>

        <div className="space-y-6">
            <AIInsightsCard />
            <AdminQuickActions />
        </div>
    </div>

      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;