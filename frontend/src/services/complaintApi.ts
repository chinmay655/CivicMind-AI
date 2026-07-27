import api from "./axios";

export const reportComplaint = async (formData: FormData) => {
  const response = await api.post(
    "/complaints/report",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};