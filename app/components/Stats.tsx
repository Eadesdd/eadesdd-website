const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "3+", label: "Years of Excellence" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="bg-[#1E1E1E] border-y border-[#2C2C2C] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E05A3A] mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Numbers That Speak For Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2C2C2C]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#1E1E1E] flex flex-col items-center justify-center py-12 px-6 text-center group hover:bg-[#111111] transition-colors duration-300"
            >
              <span className="text-5xl md:text-6xl font-bold text-[#E05A3A] mb-3 tabular-nums">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-[#9B9B9B] font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
