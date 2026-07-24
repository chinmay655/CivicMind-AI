interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

function TestimonialCard({
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="text-yellow-400 text-xl">
            ★
          </span>
        ))}
      </div>

      <p className="text-slate-600 leading-7 italic">
        "{quote}"
      </p>

      <div className="mt-8">
        <h4 className="font-semibold text-slate-900">
          {name}
        </h4>

        <p className="text-sm text-slate-500">
          {role}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;