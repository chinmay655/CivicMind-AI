import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCards from "../components/dashboard/StatsCards";
import QuickActions from "../components/dashboard/QuickActions";
import RecentComplaints from "../components/dashboard/RecentComplaints";
import AIInsights from "../components/dashboard/AIInsights";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import ComplaintCategoryChart from "../components/dashboard/ComplaintCategoryChart";
import ResolutionTrendChart from "../components/dashboard/ResolutionTrendChart";

import {
  DashboardResponse,
  getDashboard,
} from "../services/dashboardService";

const Dashboard = () => {
  const [dashboardData, setDashboardData] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getDashboard();
        setDashboardData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <WelcomeCard />

        <StatsCards
          stats={dashboardData}
          loading={loading}
        />

        <QuickActions />

        <RecentComplaints
          complaints={dashboardData?.recent_complaints ?? []}
          loading={loading}
        />

        <div className="grid gap-8 xl:grid-cols-2">
          <ResolutionTrendChart />
          <AIInsights />
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          <AnalyticsChart />
          <ComplaintCategoryChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;