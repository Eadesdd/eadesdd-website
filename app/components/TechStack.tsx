"use client";

const technologies = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/54C5F8" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Swift", icon: "https://cdn.simpleicons.org/swift/F05138" },
  { name: "Xcode", icon: "https://cdn.simpleicons.org/xcode/147EFB" },
];

// Duplicate for seamless loop
const items = [...technologies, ...technologies, ...technologies];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="bg-[#1E1E1E] border-t border-[#2C2C2C] py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E05A3A] mb-4 block">
            Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Tech Stack
          </h2>
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #1E1E1E, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #1E1E1E, transparent)" }} />

        <div className="flex overflow-hidden">
          <div
            className="flex gap-12 shrink-0"
            style={{ animation: "marquee 36s linear infinite" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            {items.map((tech, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-4 cursor-default shrink-0"
              >
                <div className="w-28 h-28 flex items-center justify-center bg-[#2C2C2C] border border-[#2C2C2C] group-hover:border-[#E05A3A]/50 group-hover:bg-[#E05A3A]/5 transition-all duration-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    width={52}
                    height={52}
                    className="object-contain transition-transform duration-200 group-hover:scale-110"
                  />
                </div>
                <span className="text-sm text-[#9B9B9B] text-center leading-tight font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
}
