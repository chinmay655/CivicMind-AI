import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardHeader from "../../components/admin/DashboardHeader";
import ComplaintSummaryCard from "../../components/admin/ComplaintSummaryCard";
import AssignOfficerCard from "../../components/admin/AssignOfficerCard";
import UpdateStatusCard from "../../components/admin/UpdateStatusCard";
import AdminQuickActionsCard from "../../components/admin/AdminQuickActionsCard";
import AnalyticsStats from "../../components/admin/AnalyticsStats";
import InternalNotesCard from "../../components/admin/InternalNotesCard";
const AdminComplaintDetails = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <AssignOfficerCard
            currentOfficer="Rahul Sharma"
        />
        <UpdateStatusCard
            currentStatus="Pending"
        />
        <DashboardHeader />

        <AnalyticsStats />

        <AdminQuickActionsCard />

        <ComplaintSummaryCard
            complaintId="CMP-1001"
            title="Road Pothole Near Main Road"
            priority="High"
            status="Pending"
            reportedDate="31 July 2026"
        />

        {/* Main Content */}

        <div className="grid gap-8 xl:grid-cols-3">

          {/* Left Side */}

          <div className="space-y-8 xl:col-span-2">

            {/* Complaint Information */}

            {/* Complaint Images */}

            {/* Timeline */}

            <InternalNotesCard />

          </div>

          {/* Right Side */}

          <div className="space-y-8">

            {/* AI Analysis */}

            {/* Assign Officer */}

            {/* Update Status */}

            {/* Quick Actions */}

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default AdminComplaintDetails;