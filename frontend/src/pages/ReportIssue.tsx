import DashboardLayout from "../layouts/DashboardLayout";

import ImageUploader from "../components/report/ImageUploader";
import ComplaintForm from "../components/report/ComplaintForm";
import LocationPicker from "../components/report/LocationPicker";

const ReportIssue = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-6xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Report Civic Issue
          </h1>

          <p className="mt-2 text-slate-400">
            Upload an image and submit a civic complaint.
          </p>
        </div>

        <ImageUploader />

        <ComplaintForm />

        <LocationPicker />
      </div>
    </DashboardLayout>
  );
};

export default ReportIssue;