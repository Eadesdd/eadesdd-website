export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Geometric accent shapes */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#E05A3A] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-[#E05A3A] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

      {/* Corner accent lines */}
      <div className="absolute top-32 left-0 w-px h-32 bg-gradient-to-b from-transparent via-[#E05A3A]/40 to-transparent" />
      <div className="absolute top-32 right-0 w-px h-32 bg-gradient-to-b from-transparent via-[#E05A3A]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16 text-center">
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-[#E05A3A]/30 bg-[#E05A3A]/5 text-[#E05A3A] text-xs font-semibold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E05A3A] inline-block" />
          Digital Development Studio
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white mb-8 max-w-5xl mx-auto">
          We Build Digital{" "}
          <span className="text-[#E05A3A]">Products</span>{" "}
          That Drive Growth
        </h1>

        <p className="text-lg md:text-xl text-[#9B9B9B] max-w-2xl mx-auto mb-12 leading-relaxed">
          From powerful web applications and mobile apps to AI-driven automation
          — we craft digital solutions that help businesses and entrepreneurs
          scale faster.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/start-project"
            className="inline-flex items-center justify-center h-13 px-8 text-base font-semibold text-white bg-[#E05A3A] hover:bg-[#c94e30] transition-colors duration-200 cursor-pointer"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center h-13 px-8 text-base font-semibold text-white border border-[#2C2C2C] hover:border-[#9B9B9B] transition-colors duration-200 cursor-pointer"
          >
            View Our Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs uppercase tracking-widest text-[#9B9B9B]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#9B9B9B] to-transparent" />
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E05A3A]/30 to-transparent" />
    </section>
  );
}
