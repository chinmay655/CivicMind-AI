interface ComplaintImageGalleryProps {
  images?: string[];
}

const ComplaintImageGallery = ({
  images = [],
}: ComplaintImageGalleryProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Complaint Images
      </h2>

      {images.length === 0 ? (
        <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-800 text-slate-500">
          No images uploaded.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Complaint ${index + 1}`}
              className="h-64 w-full rounded-xl object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ComplaintImageGallery;