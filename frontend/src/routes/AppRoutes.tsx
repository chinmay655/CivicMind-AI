import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ReportIssue from "../pages/ReportIssue";
import MyComplaints from "../pages/MyComplaints";
import ComplaintDetails from "../pages/ComplaintDetails";
import Notifications from "../pages/Notifications";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Profile from "../pages/Profile";
import AdminComplaintDetails from "../pages/admin/AdminComplaintDetails";
import ComplaintManagement from "../pages/admin/ComplaintManagement";
import ComplaintAnalytics from "../pages/admin/ComplaintAnalytics";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/report"
          element={<ReportIssue />}
        />
        <Route
          path="/my-complaints"
          element={<MyComplaints />}
        />
        <Route
          path="/complaints/:id"
          element={<ComplaintDetails />}
        />
        <Route
          path="/notifications"
          element={<Notifications />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route 
          path="/admin/dashboard"
          element={<AdminDashboard />} />
        <Route
          path="/admin/complaints"
          element={<ComplaintManagement />}
        />
        <Route
          path="/admin/complaints/:id"
          element={<AdminComplaintDetails />}
        />
        <Route
          path="/admin/analytics"
          element={<ComplaintAnalytics />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;