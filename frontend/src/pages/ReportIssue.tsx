import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import ImageUploader from "../components/report/ImageUploader";
import ComplaintForm from "../components/report/ComplaintForm";
import LocationPicker from "../components/report/LocationPicker";
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
      <div className="mx-auto max-w-6xl space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Report Civic Issue
          </h1>

          <p className="mt-2 text-slate-400">
            Upload an image and report a civic problem.
          </p>
        </div>

        <ImageUploader
          formData={formData}
          setFormData={setFormData}
        />

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
    </DashboardLayout>
  );
};

export default ReportIssue;