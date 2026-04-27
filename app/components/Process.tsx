const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your goals, users, and business context to define scope, strategy, and success metrics.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "UI/UX design and prototyping that balances aesthetics with function — refined until it's exactly right.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Clean, scalable code built with modern tech. Transparent progress with regular demos and check-ins.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deployment, testing, and ongoing support. We stay with you post-launch to ensure everything runs smoothly.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E05A3A] mb-4 block">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Our Process
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-[#2C2C2C]" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col">
                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute left-6 top-14 w-px h-full bg-[#2C2C2C]" />
                )}

                {/* Number bubble */}
                <div className="relative z-10 w-12 h-12 flex items-center justify-center border border-[#E05A3A] bg-[#111111] mb-6 shrink-0">
                  <span className="text-sm font-bold text-[#E05A3A]">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#9B9B9B] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
