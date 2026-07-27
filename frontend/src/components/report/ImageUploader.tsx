import { useRef } from "react";
import { ImagePlus, Upload, X } from "lucide-react";
import { ComplaintFormData } from "../../types/complaint";

interface ImageUploaderProps {
  formData: ComplaintFormData;
  setFormData: React.Dispatch<
    React.SetStateAction<ComplaintFormData>
  >;
}

const ImageUploader = ({
  formData,
  setFormData,
}: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const imageUrl = formData.image
    ? URL.createObjectURL(formData.image)
    : null;

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center gap-3">
        <ImagePlus className="text-blue-400" size={28} />

        <h2 className="text-2xl font-semibold text-white">
          Upload Issue Image
        </h2>
      </div>

      {!imageUrl ? (
        <div
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-slate-700 p-12 text-center transition hover:border-blue-500 hover:bg-slate-800"
        >
          <Upload
            className="mx-auto mb-4 text-blue-400"
            size={50}
          />

          <h3 className="text-xl font-semibold text-white">
            Drag & Drop
          </h3>

          <p className="mt-2 text-slate-400">
            Click to upload an image
          </p>
        </div>
      ) : (
        <div className="relative">
          <img
            src={imageUrl}
            alt="Preview"
            className="max-h-[450px] w-full rounded-2xl object-cover"
          />

          <button
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                image: null,
              }))
            }
            className="absolute right-4 top-4 rounded-full bg-red-500 p-2 text-white hover:bg-red-600"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (file) handleFile(file);
        }}
      />
    </section>
  );
};

export default ImageUploader;