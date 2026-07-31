import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import ReportHeader from "../components/report/ReportHeader";
import ComplaintForm from "../components/report/ComplaintForm";
import ImageUploader from "../components/report/ImageUploader";
import LocationPicker from "../components/report/LocationPicker";
import AIAnalysisCard from "../components/report/AIAnalysisCard";
import SubmitSection from "../components/report/SubmitSection";

import { ComplaintFormData } from "../types/complaint";
import { complaintService } from "../services/complaintService";

const ReportIssue = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] =
    useState<ComplaintFormData>({
      title: "",
      description: "",
      category: "",
      latitude: null,
      longitude: null,
      image: null,
    });

  const handleSubmit = async () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.category
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (!formData.image) {
      alert("Please upload an image.");
      return;
    }

    if (
      formData.latitude === null ||
      formData.longitude === null
    ) {
      alert("Please select a location.");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append(
        "latitude",
        formData.latitude.toString()
      );
      data.append(
        "longitude",
        formData.longitude.toString()
      );
      data.append("image", formData.image);

      await complaintService.report(data);

      alert("Complaint submitted successfully!");

      setFormData({
        title: "",
        description: "",
        category: "",
        latitude: null,
        longitude: null,
        image: null,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit complaint.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl px-6 py-8 space-y-8">

        <ReportHeader />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* Left Column */}

          <div className="xl:col-span-2 space-y-6">

            <ComplaintForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
              loading={loading}
            />

            <LocationPicker
              formData={formData}
              setFormData={setFormData}
            />

          </div>

          {/* Right Column */}

          <div className="space-y-6">

            <ImageUploader
              formData={formData}
              setFormData={setFormData}
            />

            <AIAnalysisCard />

            <SubmitSection
              loading={loading}
              onSubmit={handleSubmit}
            />

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default ReportIssue;