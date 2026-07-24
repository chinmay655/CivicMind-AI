type SectionTitleProps = {
  badge: string;
  title: string;
  description: string;
};

function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-[4px] text-blue-600">
        {badge}
      </p>

      <h2 className="mt-4 text-5xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;