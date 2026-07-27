export interface ComplaintFormData {
  title: string;
  description: string;
  category: string;

  latitude: number | null;
  longitude: number | null;

  image: File | null;
}