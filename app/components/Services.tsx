import { Globe, LayoutTemplate, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Custom web apps and SaaS platforms built for performance, scalability, and real business impact.",
    tag: "SaaS · Dashboards · Portals",
    size: "large",
    logos: [
      { src: "https://cdn.simpleicons.org/appstore/0D96F6", alt: "Apple App Store" },
      { src: "/images/microsoft.svg", alt: "Microsoft Store" },
      { src: "/images/amazon.svg", alt: "Amazon Store" },
    ],
  },
  {
    icon: LayoutTemplate,
    title: "Websites & Landing Pages",
    description:
      "High-converting marketing sites and portfolio pages that make your brand unforgettable.",
    tag: "Marketing · Portfolio · E-Commerce",
    size: "small",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native iOS & Android apps, and cross-platform solutions with React Native and Flutter.",
    tag: "iOS · Android · Cross-Platform",
    size: "small",
    logos: [
      { src: "https://cdn.simpleicons.org/appstore/0D96F6", alt: "App Store" },
      { src: "https://cdn.simpleicons.org/googleplay/01875F", alt: "Google Play" },
    ],
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description:
      "Intelligent integrations and workflow automation that reduce manual effort and accelerate your operations.",
    tag: "AI Agents · Automations · Integrations",
    size: "large",
    logos: [
      { src: "/images/openai.svg", alt: "OpenAI" },
      { src: "/images/slack.svg", alt: "Slack" },
      { src: "/images/outlook.svg", alt: "Outlook" },
      { src: "/images/salesforce.svg", alt: "Salesforce" },
      { src: "/images/twilio.svg", alt: "Twilio" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E05A3A] mb-4 block">
            What We Do
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg">
              Services Built for the Modern Business
            </h2>
            <p className="text-[#9B9B9B] max-w-sm leading-relaxed">
              End-to-end digital development across every platform, powered by
              the latest technology.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-[#1E1E1E] border border-[#2C2C2C] p-8 hover:border-[#E05A3A]/50 transition-all duration-300 cursor-pointer"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[#E05A3A]/[0.03]" />

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 bg-[#2C2C2C] group-hover:bg-[#E05A3A]/10 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[#E05A3A]"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-[#9B9B9B] leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {"logos" in service && service.logos && (
                  <div className="flex items-center gap-3 mb-6">
                    {service.logos.map((logo) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={logo.alt}
                        src={logo.src}
                        alt={logo.alt}
                        width={24}
                        height={24}
                        className="opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                      />
                    ))}
                  </div>
                )}

                <div className="text-xs font-medium text-[#E05A3A]/70 uppercase tracking-wider">
                  {service.tag}
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[24px] border-l-transparent border-b-[24px] border-b-[#E05A3A]/20 group-hover:border-b-[#E05A3A]/60 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
