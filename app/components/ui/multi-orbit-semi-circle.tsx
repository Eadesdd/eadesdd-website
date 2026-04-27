"use client";
import { useState, useEffect } from "react";

const TECH_ICONS = [
  // Inner orbit — automation engines
  { src: "/images/openai.svg", label: "OpenAI" },
  { src: "https://cdn.simpleicons.org/zapier/FF4A00", label: "Zapier" },
  { src: "https://cdn.simpleicons.org/nodedotjs/339933", label: "Node.js" },
  { src: "https://cdn.simpleicons.org/python/3776AB", label: "Python" },
  { src: "https://cdn.simpleicons.org/stripe/635BFF", label: "Stripe" },
  { src: "/images/twilio.svg", label: "Twilio" },
  // Middle orbit — communication + productivity
  { src: "https://cdn.simpleicons.org/gmail/EA4335", label: "Gmail" },
  { src: "/images/slack.svg", label: "Slack" },
  { src: "https://cdn.simpleicons.org/zoom/2D8CFF", label: "Zoom" },
  { src: "https://cdn.simpleicons.org/notion/ffffff", label: "Notion" },
  { src: "https://cdn.simpleicons.org/googledrive/4285F4", label: "Google Drive" },
  { src: "https://cdn.simpleicons.org/trello/0052CC", label: "Trello" },
  { src: "https://cdn.simpleicons.org/hubspot/FF7A59", label: "HubSpot" },
  { src: "https://cdn.simpleicons.org/asana/F06A6A", label: "Asana" },
  // Outer orbit — social, commerce + analytics
  { src: "https://cdn.simpleicons.org/shopify/96BF48", label: "Shopify" },
  { src: "/images/salesforce.svg", label: "Salesforce" },
  { src: "https://cdn.simpleicons.org/mailchimp/FFE01B", label: "Mailchimp" },
  { src: "https://cdn.simpleicons.org/whatsapp/25D366", label: "WhatsApp" },
  { src: "https://cdn.simpleicons.org/instagram/E4405F", label: "Instagram" },
  { src: "/images/linkedin.svg", label: "LinkedIn" },
  { src: "https://cdn.simpleicons.org/facebook/1877F2", label: "Facebook" },
  { src: "https://cdn.simpleicons.org/discord/5865F2", label: "Discord" },
  { src: "/images/outlook.svg", label: "Outlook" },
  { src: "https://cdn.simpleicons.org/dropbox/0061FF", label: "Dropbox" },
];

interface OrbitProps {
  radius: number;
  centerX: number;
  centerY: number;
  count: number;
  iconSize: number;
  iconOffset: number;
}

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize, iconOffset }: OrbitProps) {
  return (
    <>
      {/* Orbit ring */}
      <div
        className="absolute rounded-full border border-[#2C2C2C] pointer-events-none"
        style={{
          width: radius * 2,
          height: radius * 2,
          left: centerX - radius,
          top: centerY - radius,
        }}
      />

      {/* Icons along top half */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const tech = TECH_ICONS[(iconOffset + index) % TECH_ICONS.length];
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            {/* Icon container */}
            <div
              className="flex items-center justify-center rounded-full bg-[#1E1E1E] border border-[#2C2C2C] transition-all duration-200 group-hover:border-[#E05A3A] group-hover:bg-[#2C2C2C]"
              style={{ width: iconSize * 1.8, height: iconSize * 1.8 }}
            >
              <img
                src={tech.src}
                alt={tech.label}
                width={iconSize}
                height={iconSize}
                className="object-contain transition-transform duration-200 group-hover:scale-110"
                style={{ minWidth: iconSize, minHeight: iconSize }}
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const fallback = el.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <span
                className="items-center justify-center text-[#E05A3A] font-bold uppercase hidden"
                style={{ fontSize: iconSize * 0.55, width: iconSize, height: iconSize }}
              >
                {tech.label.charAt(0)}
              </span>
            </div>

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
              } hidden group-hover:flex whitespace-nowrap rounded bg-[#1E1E1E] border border-[#E05A3A]/30 px-2.5 py-1 text-xs text-white shadow-lg`}
            >
              {tech.label}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.85, 720);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? Math.max(14, baseWidth * 0.04)
      : size.width < 768
      ? Math.max(16, baseWidth * 0.045)
      : Math.max(18, baseWidth * 0.05);

  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#111111] overflow-hidden border-t border-[#2C2C2C]">
      {/* Orange glow at center bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#E05A3A] opacity-[0.06] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative flex flex-col items-center text-center z-10 px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#E05A3A] mb-4 block">
          How We Build It
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Automate Your Business
        </h2>
        <p className="mb-12 max-w-xl text-[#9B9B9B] leading-relaxed">
          We integrate with the tools your business already runs on — from Gmail
          and Slack to Salesforce and Shopify — and automate the work in between.
        </p>

        {/* Orbit canvas */}
        {size.width > 0 && (
          <div className="relative" style={{ width: baseWidth, height: baseWidth * 0.58 }}>
            <SemiCircleOrbit
              radius={baseWidth * 0.22}
              centerX={centerX}
              centerY={centerY}
              count={6}
              iconSize={iconSize}
              iconOffset={0}
            />
            <SemiCircleOrbit
              radius={baseWidth * 0.36}
              centerX={centerX}
              centerY={centerY}
              count={8}
              iconSize={iconSize}
              iconOffset={6}
            />
            <SemiCircleOrbit
              radius={baseWidth * 0.5}
              centerX={centerX}
              centerY={centerY}
              count={10}
              iconSize={iconSize}
              iconOffset={14}
            />
          </div>
        )}
      </div>
    </section>
  );
}
