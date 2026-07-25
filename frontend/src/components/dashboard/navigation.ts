import {
  LayoutDashboard,
  MapPinned,
  ClipboardList,
  Map,
  Bell,
  User,
  Settings,
  LogOut,
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
    path: "/complaints",
    icon: ClipboardList,
  },
  {
    title: "City Map",
    path: "/map",
    icon: Map,
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
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: LogOut,
  },
];