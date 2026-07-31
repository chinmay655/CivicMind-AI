import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

import { DashboardResponse } from "../../services/dashboardService";

interface Props {
  complaints: DashboardResponse["recent_complaints"];
  loading: boolean;
}

const statusClasses: Record<string, string> = {
  Pending: "bg-amber-100 text-amber-700",
  Assigned: "bg-violet-100 text-violet-700",
  Accepted: "bg-cyan-100 text-cyan-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Resolved: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

const RecentComplaints = ({
  complaints,
  loading,
}: Props) => {
  return (
    <Card>

      <SectionHeader
        title="Recent Complaints"
        subtitle="Latest issues reported by citizens"
        action={
          <Link
            to="/my-complaints"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            View All
          </Link>
        }
      />

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-200">

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                ID
              </th>

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Issue
              </th>

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Status
              </th>

              <th className="pb-4 text-left text-sm font-semibold text-slate-500">
                Reported
              </th>

              <th className="pb-4 text-right text-sm font-semibold text-slate-500">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-12 text-center text-slate-500"
                >
                  Loading recent complaints...
                </td>

              </tr>

            ) : complaints.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-12 text-center text-slate-500"
                >
                  No complaints available.
                </td>

              </tr>

            ) : (

              complaints.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-slate-100 transition hover:bg-slate-50 last:border-none"
                >

                  <td className="py-5 font-semibold text-slate-900">
                    #{item.id}
                  </td>

                  <td className="py-5 text-slate-700">
                    {item.title}
                  </td>

                  <td className="py-5">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        statusClasses[item.status] ??
                        "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="py-5 text-slate-500">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>

                  <td className="py-5 text-right">

                    <Link
                      to={`/complaints/${item.id}`}
                      className="inline-flex items-center gap-2 font-medium text-blue-600 transition hover:text-blue-700"
                    >
                      View
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </Card>
  );
};

export default RecentComplaints;