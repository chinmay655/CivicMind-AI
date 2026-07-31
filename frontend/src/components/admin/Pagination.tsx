const Pagination = () => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <p className="text-sm text-slate-500">
        Showing <span className="font-semibold">1–4</span> of{" "}
        <span className="font-semibold">24</span> complaints
      </p>

      <div className="flex gap-2">

        <button className="rounded-lg border px-4 py-2 hover:bg-slate-100">
          Previous
        </button>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
          1
        </button>

        <button className="rounded-lg border px-4 py-2 hover:bg-slate-100">
          2
        </button>

        <button className="rounded-lg border px-4 py-2 hover:bg-slate-100">
          3
        </button>

        <button className="rounded-lg border px-4 py-2 hover:bg-slate-100">
          Next
        </button>

      </div>

    </div>
  );
};

export default Pagination;