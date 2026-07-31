import api from "../api/axios";

export interface RecentComplaint {
  id: number;
  title: string;
  status: string;
  priority: string;
  created_at: string;
}

export interface DashboardResponse {
  total_complaints: number;
  pending_complaints: number;
  assigned_complaints: number;
  accepted_complaints: number;
  in_progress_complaints: number;
  resolved_complaints: number;
  rejected_complaints: number;
  recent_complaints: RecentComplaint[];
}

export const getDashboard = async (): Promise<DashboardResponse> => {
  const response = await api.get("/citizens/dashboard");
  return response.data;
};