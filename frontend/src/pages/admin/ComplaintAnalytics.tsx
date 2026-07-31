import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardHeader from "../../components/admin/DashboardHeader";
import MonthlyTrendChart from "../../components/admin/MonthlyTrendChart";
import PriorityDistributionChart from "../../components/admin/PriorityDistributionChart";
import CategoryDistributionChart from "../../components/admin/CategoryDistributionChart";
import AnalyticsStats from "../../components/admin/AnalyticsStats";
const ComplaintAnalytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <DashboardHeader />

        <AnalyticsStats />

        <div className="grid gap-8 xl:grid-cols-2">

            <MonthlyTrendChart />

            <PriorityDistributionChart />

        </div>
        {/* Charts */}
        <div className="grid gap-8 xl:grid-cols-2">

            <CategoryDistributionChart />

            {/* DepartmentPerformanceChart */}

        </div>

        {/* Performance */}

      </div>
    </DashboardLayout>
  );
};

export default ComplaintAnalytics;