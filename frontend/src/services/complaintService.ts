import { complaintApi } from "../api/complaintApi";

export const complaintService = {
  async report(formData: FormData) {
    return await complaintApi.report(formData);
  },
};