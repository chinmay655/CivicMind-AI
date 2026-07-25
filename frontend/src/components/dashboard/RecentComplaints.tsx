const complaints = [
  {
    id: "#CM-1001",
    issue: "Pothole on MG Road",
    status: "Pending",
    date: "Today",
  },
  {
    id: "#CM-1002",
    issue: "Broken Street Light",
    status: "In Progress",
    date: "Yesterday",
  },
  {
    id: "#CM-1003",
    issue: "Garbage Overflow",
    status: "Resolved",
    date: "2 days ago",
  },
  {
    id: "#CM-1004",
    issue: "Water Leakage",
    status: "Pending",
    date: "3 days ago",
  },
];

const statusClasses: Record<string, string> = {
  Pending: "bg-yellow-500/15 text-yellow-400",
  "In Progress": "bg-blue-500/15 text-blue-400",
  Resolved: "bg-green-500/15 text-green-400",
};

const RecentComplaints = () => {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">
          Recent Complaints
        </h2>

        <button className="text-sm font-medium text-blue-400 hover:text-blue-300">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-slate-800">
            <tr>
              <th className="pb-4 text-sm text-slate-400">ID</th>
              <th className="pb-4 text-sm text-slate-400">Issue</th>
              <th className="pb-4 text-sm text-slate-400">Status</th>
              <th className="pb-4 text-sm text-slate-400">Reported</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-800/50 last:border-none"
              >
                <td className="py-5 font-medium text-white">
                  {item.id}
                </td>

                <td className="py-5 text-slate-300">
                  {item.issue}
                </td>

                <td className="py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      statusClasses[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="py-5 text-slate-400">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentComplaints;