import { Eye, Pencil, Trash2 } from "lucide-react";
import ComplaintPriorityBadge from "./ComplaintPriorityBadge";
import ComplaintStatusBadge from "./ComplaintStatusBadge";

const complaints = [
  {
    id: "CMP-1001",
    title: "Road Pothole",
    citizen: "Rahul Sharma",
    priority: "High",
    status: "Pending",
    date: "31 Jul 2026",
  },
  {
    id: "CMP-1002",
    title: "Water Leakage",
    citizen: "Priya Patel",
    priority: "Medium",
    status: "Assigned",
    date: "30 Jul 2026",
  },
  {
    id: "CMP-1003",
    title: "Garbage Overflow",
    citizen: "Amit Kumar",
    priority: "Critical",
    status: "In Progress",
    date: "29 Jul 2026",
  },
  {
    id: "CMP-1004",
    title: "Street Light Issue",
    citizen: "Neha Singh",
    priority: "Low",
    status: "Resolved",
    date: "28 Jul 2026",
  },
];

const ComplaintTable = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Complaint Management
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage and monitor all reported complaints.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Citizen</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Priority</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
              <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((complaint) => (
              <tr
                key={complaint.id}
                className="border-t hover:bg-slate-50 transition"
              >
                <td className="px-6 py-4 font-medium">{complaint.id}</td>
                <td className="px-6 py-4">{complaint.title}</td>
                <td className="px-6 py-4">{complaint.citizen}</td>

                <td className="px-6 py-4">
                  <ComplaintPriorityBadge
                    priority={complaint.priority}
                  />
                </td>

                <td className="px-6 py-4">
                  <ComplaintStatusBadge
                    status={complaint.status}
                  />
                </td>

                <td className="px-6 py-4">{complaint.date}</td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">

                    <button className="rounded-lg p-2 hover:bg-blue-100">
                      <Eye className="text-blue-600" size={18} />
                    </button>

                    <button className="rounded-lg p-2 hover:bg-green-100">
                      <Pencil className="text-green-600" size={18} />
                    </button>

                    <button className="rounded-lg p-2 hover:bg-red-100">
                      <Trash2 className="text-red-600" size={18} />
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplaintTable;