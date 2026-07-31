const complaints = [
  {
    id: "CMP-1001",
    title: "Road Pothole",
    citizen: "Rahul Sharma",
    status: "Pending",
    priority: "High",
  },
  {
    id: "CMP-1002",
    title: "Water Leakage",
    citizen: "Priya Patel",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "CMP-1003",
    title: "Garbage Overflow",
    citizen: "Amit Kumar",
    status: "Resolved",
    priority: "Low",
  },
];

const RecentComplaintsTable = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Recent Complaints
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800 text-left">
              <th className="pb-4 text-slate-400">ID</th>
              <th className="pb-4 text-slate-400">Title</th>
              <th className="pb-4 text-slate-400">Citizen</th>
              <th className="pb-4 text-slate-400">Priority</th>
              <th className="pb-4 text-slate-400">Status</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((complaint) => (
              <tr
                key={complaint.id}
                className="border-b border-slate-800 hover:bg-slate-800/40"
              >
                <td className="py-4 text-white">{complaint.id}</td>
                <td className="py-4 text-white">{complaint.title}</td>
                <td className="py-4 text-slate-300">{complaint.citizen}</td>
                <td className="py-4 text-slate-300">{complaint.priority}</td>
                <td className="py-4">
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
                    {complaint.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentComplaintsTable;