import api from "../api/axios";

export type ComplaintStatus =
  | "Pending"
  | "Assigned"
  | "Accepted"
  | "In Progress"
  | "Resolved"
  | "Rejected";

export type ComplaintPriority =
  | "Low"
  | "Medium"
  | "High"
  | "Critical";

export interface ComplaintDetails {
  id: number;

  title: string;
  category: string;
  description: string;

  status: ComplaintStatus;
  priority: ComplaintPriority;

  latitude: number;
  longitude: number;
  address: string;

  citizen_id: number;

  ai_detected_issue?: string | null;
  ai_confidence?: number | null;
  ai_estimated_cost?: number | null;
  ai_recommended_department?: string | null;
  ai_analysis_status?: string | null;

  created_at: string;
  updated_at: string;
}

export interface ComplaintHistory {
  id: number;
  complaint_id: number;
  action: string;
  old_status: string | null;
  new_status: string | null;
  remarks: string | null;
  performed_by: number;
  created_at: string;
}

export const complaintService = {
  async report(formData: FormData) {
    const { data } = await api.post("/complaints", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  },

  async getAllComplaints(): Promise<ComplaintDetails[]> {
    const { data } = await api.get("/complaints");
    return data;
  },

  async getComplaint(id: string): Promise<ComplaintDetails> {
    const { data } = await api.get(`/complaints/${id}`);
    return data;
  },

  async getComplaintHistory(
    id: string
  ): Promise<ComplaintHistory[]> {
    const { data } = await api.get(`/complaints/${id}/history`);
    return data;
  },
};

export const getAllComplaints =
  complaintService.getAllComplaints;

export const getComplaint =
  complaintService.getComplaint;

export const getComplaintHistory =
  complaintService.getComplaintHistory;