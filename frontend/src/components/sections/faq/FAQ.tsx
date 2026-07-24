import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How does CivicMind AI detect infrastructure issues?",
    answer:
      "The platform uses computer vision models to analyze uploaded images and identify issues such as potholes, garbage accumulation, water leakage, and damaged roads.",
  },
  {
    question: "Can citizens track complaint status?",
    answer:
      "Yes. Every complaint receives a unique tracking ID and users can monitor its progress from submission to resolution.",
  },
  {
    question: "Is location captured automatically?",
    answer:
      "Yes. GPS coordinates are attached to complaints to help municipalities identify the exact location of reported issues.",
  },
  {
    question: "Can municipalities prioritize urgent complaints?",
    answer:
      "Yes. AI predicts severity and helps departments focus on the most critical complaints first.",
  },
];

function FAQ() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Everything you need to know about CivicMind AI.
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;