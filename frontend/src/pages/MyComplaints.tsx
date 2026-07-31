import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import ComplaintCard from "../components/complaints/ComplaintCard";
import ComplaintToolbar from "../components/complaints/ComplaintToolbar";

import {
  ComplaintDetails,
  getAllComplaints,
} from "../services/complaintService";

const MyComplaints = () => {
  const navigate = useNavigate();

  const [complaints, setComplaints] = useState<
    ComplaintDetails[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadComplaints = async () => {
      try {
        const data = await getAllComplaints();
        setComplaints(data);
      } catch (error) {
        console.error("Failed to load complaints:", error);
      } finally {
        setLoading(false);
      }
    };

    loadComplaints();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">
            My Complaints
          </h1>

          <p className="mt-2 text-slate-400">
            View, search and track all the complaints you have
            reported.
          </p>
        </div>

        {/* Toolbar */}
        <ComplaintToolbar />

        {/* Loading */}
        {loading && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center text-slate-400">
            Loading complaints...
          </div>
        )}

        {/* Empty State */}
        {!loading && complaints.length === 0 && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center text-slate-400">
            No complaints found.
          </div>
        )}

        {/* Complaint List */}
        {!loading && complaints.length > 0 && (
          <div className="grid gap-6">
            {complaints.map((complaint) => (
              <div
                key={complaint.id}
                className="cursor-pointer"
                onClick={() =>
                  navigate(`/complaints/${complaint.id}`)
                }
              >
                <ComplaintCard id={complaint.id}
                  title={complaint.title}
                  location={complaint.address}
                  status={complaint.status}
                  priority={complaint.priority}
                  date={new Date(
                    complaint.created_at
                  ).toLocaleDateString()}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyComplaints;