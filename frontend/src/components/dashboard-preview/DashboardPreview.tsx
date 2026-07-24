import KpiCard from "./KpiCard";
import {
  FileText,
  Brain,
  Clock,
  AlertTriangle,
} from "lucide-react";

const DashboardPreview = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
            CivicMind AI Dashboard
        </h2>
    <div className="grid grid-cols-2 gap-4">
        <KpiCard
            title="Total Reports"
            value="25,463"
            trend="+12%"
            icon={<FileText size={20} />}
            trendType="increase"
        />

        <KpiCard
            title="AI Accuracy"
            value="96%"
            trend="+2%"
            icon={<Brain size={20} />}
            trendType="increase"
        />

        <KpiCard
            title="Response Time"
            value="2.4 hrs"
            trend="-18%"
            icon={<Clock size={20} />}
            trendType="decrease"
        />

        <KpiCard
            title="Active Cases"
            value="312"
            trend="0%"
            icon={<AlertTriangle size={20} />}
            trendType="neutral"
        />
    </div>
    </div>
  );
};

export default DashboardPreview;