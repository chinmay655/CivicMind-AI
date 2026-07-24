import KpiCard from "./KpiCard";
import ActivityItem from "./ActivityItem";
import ChartCard from "./ChartCard";
import {
  FileText,
  Brain,
  Clock,
  AlertTriangle,
  Activity,
} from "lucide-react";
import {
  MapPin,
  Trash2,
  Lightbulb,
  Droplets,
} from "lucide-react";
const DashboardPreview = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
  <div>
    <h2 className="text-2xl font-bold text-gray-900">
      Smart City Dashboard
    </h2>

    <p className="mt-1 text-sm text-gray-500">
      AI-powered infrastructure monitoring
    </p>
  </div>

  <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1">
    <Activity size={16} className="text-green-600" />

    <span className="text-sm font-medium text-green-700">
      Live
    </span>
  </div>
</div>
    <div className="grid grid-cols-2 gap-4">
        <div className="mt-6">
            <ChartCard />
        </div>
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

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Recent Activity
            </h3>

            <div className="space-y-3">
                <ActivityItem
                    icon={<MapPin size={18} />}
                    title="Pothole reported"
                    time="2 min ago"
                />

                <ActivityItem
                    icon={<Trash2 size={18} />}
                    title="Garbage complaint verified"
                    time="8 min ago"
                />  

                <ActivityItem
                    icon={<Lightbulb size={18} />}
                    title="Streetlight repaired"
                    time="15 min ago"
                />

                <ActivityItem
                    icon={<Droplets size={18} />}
                    title="Water leakage detected"
                    time="22 min ago"
                />
            </div>
        </div>
    </div>
    </div>
  );
};

export default DashboardPreview;