const ComplaintFilters = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="grid gap-4 md:grid-cols-4">

        <select className="rounded-xl border p-3">
          <option>All Status</option>
          <option>Pending</option>
          <option>Assigned</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>

        <select className="rounded-xl border p-3">
          <option>All Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>

        <select className="rounded-xl border p-3">
          <option>All Departments</option>
          <option>Road</option>
          <option>Water</option>
          <option>Electricity</option>
        </select>

        <button className="rounded-xl bg-blue-600 text-white">
          Apply Filters
        </button>

      </div>

    </div>
  );
};

export default ComplaintFilters;