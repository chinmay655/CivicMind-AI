import {
  Brain,
  BadgeCheck,
  Building2,
  DollarSign,
  Activity,
} from "lucide-react";

interface AIAnalysisCardProps {
  detectedIssue: string;
  confidence: number;
  estimatedCost?: number | null;
  department?: string | null;
  analysisStatus?: string | null;
}

const AIAnalysisCard = ({
  detectedIssue,
  confidence,
  estimatedCost,
  department,
  analysisStatus,
}: AIAnalysisCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center gap-3">
        <Brain className="text-blue-400" />
        <h2 className="text-xl font-semibold text-white">
          AI Analysis
        </h2>
      </div>

      <div className="mt-6 space-y-6">

        <div className="flex items-center gap-3">
          <BadgeCheck className="text-green-400" />

          <div>
            <p className="text-sm text-slate-500">
              Detected Issue
            </p>

            <p className="font-medium text-white">
              {detectedIssue}
            </p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm text-slate-500">
            Confidence
          </p>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{ width: `${confidence}%` }}
            />
          </div>

          <p className="mt-2 text-white">
            {confidence}%
          </p>
        </div>

        <div className="flex items-center gap-3">
          <DollarSign className="text-emerald-400" />

          <div>
            <p className="text-sm text-slate-500">
              Estimated Cost
            </p>

            <p className="text-white">
              {estimatedCost
                ? `$${estimatedCost}`
                : "Not Available"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Building2 className="text-purple-400" />

          <div>
            <p className="text-sm text-slate-500">
              Recommended Department
            </p>

            <p className="text-white">
              {department ?? "Not Assigned"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Activity className="text-cyan-400" />

          <div>
            <p className="text-sm text-slate-500">
              Analysis Status
            </p>

            <p className="text-white">
              {analysisStatus ?? "Pending"}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AIAnalysisCard;