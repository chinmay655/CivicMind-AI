import StatCard from "./StatCard";

function TrustedSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-slate-900">
          Trusted by Growing Smart Cities
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          Empowering citizens and municipalities with AI-driven infrastructure intelligence.
        </p>

        {/* Stats Grid */}
        
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <StatCard
                value="25K+"
                label="Reports Processed"
            />

            <StatCard
                value="96%"
                label="AI Detection Accuracy"
            />

            <StatCard
                value="120+"
                label="Municipal Wards"
            />

            <StatCard
                value="18 min"
                label="Average Response Time"
            />

        </div>
          {/* Stat Cards go here */}
        </div>
    </section>
  );
}

export default TrustedSection;