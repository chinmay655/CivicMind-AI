import DashboardPreview from "../../dashboard-preview/DashboardPreview";
import { CheckCircle } from "lucide-react";

const points = [
  "Live Complaint Analytics",
  "AI Severity Detection",
  "Interactive GIS Map",
  "Officer Management",
];

function Showcase() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            See CivicMind AI in Action
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Monitor complaints, AI predictions, analytics, departments,
            and city performance from one intelligent dashboard.
          </p>
        </div>

        <div className="mt-16">
          <DashboardPreview />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {points.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border bg-white p-5 shadow-sm"
            >
              <CheckCircle className="text-green-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Showcase;