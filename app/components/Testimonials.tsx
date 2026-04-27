import { StaggerTestimonials } from "./ui/stagger-testimonials";

export default function Testimonials() {
  return (
    <section className="bg-[#111111] border-t border-[#2C2C2C] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#E05A3A] mb-4 block">
          Client Stories
        </span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg">
            Trusted by Companies That Move Fast
          </h2>
          <p className="text-[#9B9B9B] max-w-sm leading-relaxed">
            Click any card to bring it forward. Use the arrows to cycle through
            what our clients are saying.
          </p>
        </div>
      </div>
      <StaggerTestimonials />
    </section>
  );
}
