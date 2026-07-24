import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Citizen",
    quote:
      "Reporting damaged roads became incredibly simple. The issue was tracked and resolved much faster than before.",
  },
  {
    name: "Anita Patil",
    role: "Municipal Officer",
    quote:
      "The AI prioritization helps our team focus on high-impact complaints first, improving response times significantly.",
  },
  {
    name: "David Wilson",
    role: "Smart City Consultant",
    quote:
      "CivicMind AI demonstrates how AI and urban governance can work together to create more efficient cities.",
  },
];

function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Trusted by Communities
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Designed to improve the experience of citizens, municipalities,
            and smart city initiatives.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;