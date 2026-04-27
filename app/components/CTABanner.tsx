export default function CTABanner() {
  return (
    <section id="contact" className="relative bg-[#111111] py-24 md:py-32 overflow-hidden border-t border-[#2C2C2C]">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-[#E05A3A] opacity-[0.07] blur-[120px] rounded-full" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#E05A3A] mb-6 block">
          Let&apos;s Work Together
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Ready to Build Something{" "}
          <span className="text-[#E05A3A]">Great?</span>
        </h2>
        <p className="text-lg text-[#9B9B9B] mb-10 max-w-xl mx-auto leading-relaxed">
          Tell us about your project and let&apos;s create something exceptional
          together. No commitment, just a conversation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/book-demo"
            className="inline-flex items-center justify-center h-13 px-8 text-base font-semibold text-white bg-[#E05A3A] hover:bg-[#c94e30] transition-colors duration-200 cursor-pointer rounded-[5px]"
          >
            Schedule a Demo
          </a>
          <a
            href="mailto:info@eadesdd.com"
            className="inline-flex items-center justify-center h-13 px-8 text-base font-semibold text-[#9B9B9B] border border-[#2C2C2C] hover:border-[#9B9B9B] hover:text-white transition-all duration-200 cursor-pointer rounded-[5px]"
          >
            info@eadesdd.com
          </a>
        </div>
      </div>
    </section>
  );
}
