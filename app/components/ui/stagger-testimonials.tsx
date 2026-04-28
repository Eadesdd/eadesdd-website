"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/app/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "EADES delivered our SaaS platform on time and beyond spec. We went from idea to live product in 8 weeks.",
    by: "NovaSpark Technologies",
    industry: "SaaS · Fintech",
    avatar: "https://i.pravatar.cc/96?img=11",
    accent: "#E05A3A",
  },
  {
    tempId: 1,
    testimonial: "Their AI automation work cut our manual data processing by 80%. The ROI was immediate.",
    by: "Meridian Logistics",
    industry: "Logistics · Operations",
    avatar: "https://i.pravatar.cc/96?img=52",
    accent: "#2C6FBF",
  },
  {
    tempId: 2,
    testimonial: "We had a complex React Native app built in record time. Quality was top-tier and communication was seamless.",
    by: "PulseHealth Group",
    industry: "HealthTech · Mobile",
    avatar: "https://i.pravatar.cc/96?img=47",
    accent: "#2BA85A",
  },
  {
    tempId: 3,
    testimonial: "EADES rebuilt our entire web presence. Conversions are up 3x since the relaunch. Genuinely impressive work.",
    by: "Elevate Brands",
    industry: "E-Commerce · Marketing",
    avatar: "https://i.pravatar.cc/96?img=38",
    accent: "#9B59B6",
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars, I'd give 12. Best dev team we've ever worked with, period.",
    by: "Ironclad Capital",
    industry: "Finance · Investment",
    avatar: "https://i.pravatar.cc/96?img=60",
    accent: "#E05A3A",
  },
  {
    tempId: 5,
    testimonial: "Our Flutter app launched flawlessly on both iOS and Android. Users love it. We love EADES.",
    by: "Orbit Mobility",
    industry: "Transport · Consumer Apps",
    avatar: "https://i.pravatar.cc/96?img=33",
    accent: "#E8A020",
  },
  {
    tempId: 6,
    testimonial: "Took some convincing to outsource, but now that we're working with EADES — we're never going back.",
    by: "Cascadia Ventures",
    industry: "Venture · Startup Studio",
    avatar: "https://i.pravatar.cc/96?img=25",
    accent: "#2BA85A",
  },
  {
    tempId: 7,
    testimonial: "Their AI integration gave us analytics we didn't even know we needed. The insights changed how we operate.",
    by: "DataCore Analytics",
    industry: "Data · Intelligence",
    avatar: "https://i.pravatar.cc/96?img=56",
    accent: "#2C6FBF",
  },
  {
    tempId: 8,
    testimonial: "Clean code, clean design, clean delivery. EADES sets the standard.",
    by: "Summit Digital Studio",
    industry: "Agency · Creative",
    avatar: "https://i.pravatar.cc/96?img=17",
    accent: "#E05A3A",
  },
  {
    tempId: 9,
    testimonial: "We switched to EADES two years ago and our product velocity has never been higher.",
    by: "CloudAxis Systems",
    industry: "Cloud · Infrastructure",
    avatar: "https://i.pravatar.cc/96?img=43",
    accent: "#9B59B6",
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 border-[#E05A3A]"
          : "z-0 border-[#2C2C2C] hover:border-[#E05A3A]/40"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        backgroundColor: isCenter ? "#1E1E1E" : "#181818",
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px #2C2C2C"
          : "0px 0px 0px 0px transparent",
      }}
    >
      {/* Diagonal cut line */}
      <span
        className="absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
          backgroundColor: isCenter ? "#E05A3A" : "#2C2C2C",
        }}
      />

      {/* Avatar */}
      <div
        className="mb-5 h-12 w-12 overflow-hidden"
        style={{
          boxShadow: isCenter ? `3px 3px 0px ${testimonial.accent}` : "3px 3px 0px #111111",
          outline: isCenter ? `2px solid ${testimonial.accent}` : "2px solid #2C2C2C",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={testimonial.avatar}
          alt={testimonial.by}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Quote */}
      <h3
        className={cn(
          "text-sm sm:text-base font-medium leading-relaxed",
          isCenter ? "text-white" : "text-[#9B9B9B]"
        )}
      >
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>

      {/* Company info */}
      <div className="absolute bottom-8 left-8 right-8">
        <p
          className={cn(
            "text-sm font-semibold",
            isCenter ? "text-[#E05A3A]" : "text-[#9B9B9B]"
          )}
        >
          {testimonial.by}
        </p>
        <p className="text-xs text-[#9B9B9B]/60 mt-0.5">{testimonial.industry}</p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#111111]" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}

      {/* Nav buttons */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-14 w-14 items-center justify-center border-2 border-[#2C2C2C] bg-[#111111] text-[#9B9B9B] transition-colors duration-200 hover:border-[#E05A3A] hover:text-[#E05A3A] focus-visible:outline-none cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-14 w-14 items-center justify-center border-2 border-[#2C2C2C] bg-[#111111] text-[#9B9B9B] transition-colors duration-200 hover:border-[#E05A3A] hover:text-[#E05A3A] focus-visible:outline-none cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};
