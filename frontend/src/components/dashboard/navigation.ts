import {
  LayoutDashboard,
  MapPinned,
  ClipboardList,
  Bell,
  User,
  ShieldCheck,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Report Issue",
    path: "/report",
    icon: MapPinned,
  },
  {
    title: "My Complaints",
    path: "/my-complaints",
    icon: ClipboardList,
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },

  // -------------------------
  // Admin Section
  // -------------------------
  {
    title: "Admin Dashboard",
    path: "/admin/dashboard",
    icon: ShieldCheck,
  },
];