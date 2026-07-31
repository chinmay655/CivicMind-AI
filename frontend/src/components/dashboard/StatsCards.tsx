import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  BrainCircuit,
} from "lucide-react";

import StatCard from "../ui/StatCard";
import { DashboardResponse } from "../../services/dashboardService";

interface StatsCardsProps {
  stats: DashboardResponse | null;
  loading: boolean;
}

const StatsCards = ({
  stats,
  loading,
}: StatsCardsProps) => {
  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-40 animate-pulse rounded-3xl bg-slate-200"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Complaints"
        value={stats?.total_complaints ?? 0}
        icon={ClipboardList}
        color="bg-blue-600"
        change="+12% this month"
      />

      <StatCard
        title="Pending"
        value={stats?.pending_complaints ?? 0}
        icon={Clock3}
        color="bg-amber-500"
        change="Needs attention"
      />

      <StatCard
        title="Resolved"
        value={stats?.resolved_complaints ?? 0}
        icon={CheckCircle2}
        color="bg-green-600"
        change="Excellent progress"
      />

      <StatCard
        title="AI Accuracy"
        value="98%"
        icon={BrainCircuit}
        color="bg-violet-600"
        change="Running smoothly"
      />

    </div>
  );
};

export default StatsCards;