import {
  Camera,
  Brain,
  MapPinned,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Image Detection",
    description:
      "Upload a photo and let AI automatically identify potholes, garbage, damaged roads, drainage issues, and more.",
  },
  {
    icon: Brain,
    title: "Smart Prioritization",
    description:
      "Complaints are ranked by severity, estimated repair cost, and urgency to help municipalities respond faster.",
  },
  {
    icon: MapPinned,
    title: "Live Map Tracking",
    description:
      "Track every complaint on an interactive city map with real-time status updates.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description:
      "Receive updates whenever your complaint progresses from verification to completion.",
  },
];

function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            FEATURES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Everything Needed for a Smarter City
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            CivicMind AI combines Artificial Intelligence,
            GIS Mapping, Complaint Tracking,
            Analytics, and Smart Notifications
            into one powerful platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon size={28} className="text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Features;