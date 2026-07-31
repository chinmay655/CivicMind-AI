import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import ComplaintImageGallery from "../components/complaints/ComplaintImageGallery";
import ComplaintInfoCard from "../components/complaints/ComplaintInfoCard";
import ComplaintTimeline from "../components/complaints/ComplaintTimeline";
import ActivityFeed from "../components/complaints/ActivityFeed";
import AIAnalysisCard from "../components/complaints/AIAnalysisCard";
import AssignedOfficerCard from "../components/complaints/AssignedOfficerCard";
import QuickActionsCard from "../components/complaints/QuickActionsCard";

import {
  ComplaintDetails as ComplaintType,
  getComplaint,
} from "../services/complaintService";

const ComplaintDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [complaint, setComplaint] =
    useState<ComplaintType | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const loadComplaint = async () => {
      try {
        const data = await getComplaint(id);
        setComplaint(data);
      } catch (error) {
        console.error("Failed to load complaint:", error);
      } finally {
        setLoading(false);
      }
    };

    loadComplaint();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-24 text-center text-lg text-slate-400">
          Loading complaint...
        </div>
      </DashboardLayout>
    );
  }

  if (!complaint) {
    return (
      <DashboardLayout>
        <div className="py-24 text-center text-lg text-red-400">
          Complaint not found.
        </div>
      </DashboardLayout>
    );
  }

  const {
    id: complaintId,
    title,
    description,
    category,
    priority,
    status,
    address,
    created_at,

    ai_detected_issue,
    ai_confidence,
    ai_estimated_cost,
    ai_recommended_department,
    ai_analysis_status,
  } = complaint;

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* ================= Header ================= */}

        <div>
          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>

          <p className="mt-2 text-slate-400">
            Complaint ID:{" "}
            <span className="font-medium text-blue-400">
              CMP-{complaintId}
            </span>
          </p>
        </div>

        {/* ================= Main Layout ================= */}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* ================= Left Section ================= */}

          <div className="space-y-8 lg:col-span-2">

            {/* TODO: Replace with actual uploaded images */}
            <ComplaintImageGallery
              images={[]}
            />

            <ComplaintInfoCard
              id={complaintId}
              title={title}
              description={description}
              category={category}
              priority={priority}
              status={status}
              address={address}
              date={new Date(created_at).toLocaleDateString()}
              department={ai_recommended_department}
              aiIssue={ai_detected_issue}
              aiConfidence={ai_confidence}
            />

            <ComplaintTimeline
              complaintId={complaintId.toString()}
            />

            {/* TODO: Replace with complaint activity history */}
            <ActivityFeed
              activities={[]}
            />

          </div>

          {/* ================= Right Section ================= */}

          <div className="space-y-8">

            <AIAnalysisCard
              detectedIssue={
                ai_detected_issue ?? "Not Available"
              }
              confidence={
                ai_confidence ?? 0
              }
              estimatedCost={
                ai_estimated_cost
              }
              department={
                ai_recommended_department
              }
              analysisStatus={
                ai_analysis_status
              }
            />

            <AssignedOfficerCard
              officerName={null}
              department={ai_recommended_department}
              assignedDate={null}
            />

            <QuickActionsCard
              onShare={() =>
                console.log("Share Complaint")
              }
              onDownload={() =>
                console.log("Download Report")
              }
              onEdit={() =>
                console.log("Edit Complaint")
              }
              onDelete={() =>
                console.log("Delete Complaint")
              }
            />

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default ComplaintDetails;