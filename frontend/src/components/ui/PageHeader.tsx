interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({
  title,
  subtitle,
}: PageHeaderProps) => {
  return (
    <div className="mb-8">

      <h1 className="text-4xl font-bold text-slate-900">
        {title}
      </h1>

      <p className="mt-2 text-slate-500">
        {subtitle}
      </p>

    </div>
  );
};

export default PageHeader;