import {
  PlusCircle,
  MapPinned,
  FileClock,
  Bell,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import SectionHeader from "../ui/SectionHeader";

const actions = [
  {
    title: "Report Issue",
    description: "Report a new civic issue",
    icon: PlusCircle,
    color: "from-blue-500 to-cyan-500",
    link: "/report-issue",
  },
  {
    title: "City Map",
    description: "View nearby reports",
    icon: MapPinned,
    color: "from-green-500 to-emerald-500",
    link: "/map",
  },
  {
    title: "My Complaints",
    description: "Track your submitted issues",
    icon: FileClock,
    color: "from-orange-500 to-yellow-500",
    link: "/my-complaints",
  },
  {
    title: "Notifications",
    description: "View recent updates",
    icon: Bell,
    color: "from-violet-500 to-purple-500",
    link: "/notifications",
  },
];

const QuickActions = () => {
  return (
    <section>

      <SectionHeader
        title="Quick Actions"
        subtitle="Frequently used shortcuts"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <Link
              key={action.title}
              to={action.link}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              <div
                className={`
                  inline-flex
                  rounded-2xl
                  bg-gradient-to-r
                  ${action.color}
                  p-4
                  text-white
                `}
              >
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {action.description}
              </p>

              <div className="mt-6 flex items-center gap-2 font-medium text-blue-600">

                Open

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </div>

            </Link>

          );

        })}

      </div>

    </section>
  );
};

export default QuickActions;