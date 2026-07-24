import {
  Globe,
  Mail,
  ArrowUp,
  MapPin,
} from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              CivicMind AI
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              AI-powered urban infrastructure intelligence helping
              citizens and municipalities build smarter cities.
            </p>
            
            <div className="mt-6 flex gap-4">
              <a href="#">
                <Mail />
              </a>

            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="font-semibold text-white">
              Product
            </h3>

            <ul className="mt-6 space-y-3">

              <li>Dashboard</li>
              <li>Complaint Tracking</li>
              <li>Analytics</li>
              <li>AI Detection</li>

            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="font-semibold text-white">
              Resources
            </h3>

            <ul className="mt-6 space-y-3">

              <li>Documentation</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Support</li>

            </ul>
          </div>

          {/* Contact */}

          <div>

            <h3 className="font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                contact@civicmind.ai
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Mumbai, India
              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © {year} CivicMind AI. All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-full border border-slate-700 p-3 transition hover:bg-slate-800"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;