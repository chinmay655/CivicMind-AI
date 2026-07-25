import { useRef, useState } from "react";
import { ImagePlus, Upload, X } from "lucide-react";

const ImageUploader = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<string | null>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) handleFile(file);
  };

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6 flex items-center gap-3">

        <ImagePlus className="text-blue-400" size={28} />

        <h2 className="text-2xl font-semibold text-white">
          Upload Issue Image
        </h2>

      </div>

      {!image ? (
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
            or click to upload an image
          </p>
        </div>
      ) : (
        <div className="relative">

          <img
            src={image}
            alt="Preview"
            className="w-full rounded-2xl object-cover max-h-[450px]"
          />

          <button
            onClick={() => setImage(null)}
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
        onChange={handleChange}
      />

    </section>
  );
};

export default ImageUploader;