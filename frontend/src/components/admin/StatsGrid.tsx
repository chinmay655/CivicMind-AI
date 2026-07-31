import {
  FileText,
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import StatCard from "./StatCard";

const StatsGrid = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Complaints"
        value={1248}
        icon={FileText}
        iconColor="bg-blue-500/20 text-blue-400"
        change="+12% this month"
        changeType="increase"
      />

      <StatCard
        title="Pending"
        value={238}
        icon={Clock3}
        iconColor="bg-yellow-500/20 text-yellow-400"
        change="+8 today"
        changeType="increase"
      />

      <StatCard
        title="Resolved"
        value={932}
        icon={CheckCircle2}
        iconColor="bg-green-500/20 text-green-400"
        change="+21 today"
        changeType="increase"
      />

      <StatCard
        title="Critical"
        value={78}
        icon={AlertTriangle}
        iconColor="bg-red-500/20 text-red-400"
        change="-4 today"
        changeType="decrease"
      />

    </div>
  );
};

export default StatsGrid;