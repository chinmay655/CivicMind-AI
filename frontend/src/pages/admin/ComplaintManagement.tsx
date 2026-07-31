import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardHeader from "../../components/admin/DashboardHeader";
import ComplaintSearch from "../../components/admin/ComplaintSearch";
import ComplaintFilters from "../../components/admin/ComplaintFilters";
import ComplaintTable from "../../components/admin/ComplaintTable";
import Pagination from "../../components/admin/Pagination";
import BulkActionBar from "../../components/admin/BulkActionBar";
const ComplaintManagement = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <DashboardHeader />

        <ComplaintSearch />

        <ComplaintFilters />

        <BulkActionBar />
        
        <ComplaintTable />

        <Pagination />

      </div>
    </DashboardLayout>
  );
};

export default ComplaintManagement;