interface SubmitSectionProps {
  loading: boolean;
  onSubmit: () => void;
}

const SubmitSection = ({
  loading,
  onSubmit,
}: SubmitSectionProps) => {
  return (
    <button
      onClick={onSubmit}
      disabled={loading}
      className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
    >
      {loading
        ? "Submitting..."
        : "Submit Complaint"}
    </button>
  );
};

export default SubmitSection;