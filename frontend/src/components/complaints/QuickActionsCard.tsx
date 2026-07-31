import {
  Share2,
  Download,
  Pencil,
  Trash2,
} from "lucide-react";

interface QuickActionsCardProps {
  onShare?: () => void;
  onDownload?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const QuickActionsCard = ({
  onShare,
  onDownload,
  onEdit,
  onDelete,
}: QuickActionsCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Quick Actions
      </h2>

      <div className="space-y-3">

        <button
          onClick={onShare}
          className="flex w-full items-center gap-3 rounded-xl bg-slate-800 px-4 py-3 text-slate-300 transition hover:bg-slate-700"
        >
          <Share2 size={18} />
          Share Complaint
        </button>

        <button
          onClick={onDownload}
          className="flex w-full items-center gap-3 rounded-xl bg-slate-800 px-4 py-3 text-slate-300 transition hover:bg-slate-700"
        >
          <Download size={18} />
          Download Report
        </button>

        <button
          onClick={onEdit}
          className="flex w-full items-center gap-3 rounded-xl bg-slate-800 px-4 py-3 text-slate-300 transition hover:bg-slate-700"
        >
          <Pencil size={18} />
          Edit Complaint
        </button>

        <button
          onClick={onDelete}
          className="flex w-full items-center gap-3 rounded-xl bg-red-500/10 px-4 py-3 text-red-400 transition hover:bg-red-500/20"
        >
          <Trash2 size={18} />
          Delete Complaint
        </button>

      </div>
    </div>
  );
};

export default QuickActionsCard;