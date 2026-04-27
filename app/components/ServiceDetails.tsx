import SectionWithMockup from "./ui/section-with-mockup";

const serviceBlocks = [
  {
    title: (
      <>
        Web Apps &amp; SaaS
        <br />
        <span style={{ color: "#E05A3A" }}>Built to Scale.</span>
      </>
    ),
    description:
      "We design and build custom web applications and SaaS platforms from the ground up — architected for performance, security, and long-term growth. Whether you need a client portal, internal tool, or full B2B product, we own the full stack from database to deployment.",
    primaryImageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    secondaryImageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    reverseLayout: false,
  },
  {
    title: (
      <>
        Mobile Apps for
        <br />
        <span style={{ color: "#E05A3A" }}>iOS &amp; Android.</span>
      </>
    ),
    description:
      "From native Swift and Kotlin to cross-platform React Native and Flutter — we build mobile experiences users love. We handle everything: UX design, backend APIs, app store submission, and ongoing updates so you can stay focused on your business.",
    primaryImageSrc:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
    secondaryImageSrc:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=900&q=80",
    reverseLayout: true,
  },
  {
    title: (
      <>
        Websites That
        <br />
        <span style={{ color: "#E05A3A" }}>Convert &amp; Impress.</span>
      </>
    ),
    description:
      "Your website is your hardest-working salesperson. We craft fast, responsive marketing sites and landing pages that tell your story, rank on Google, and turn visitors into customers. Every pixel is intentional, every interaction purposeful.",
    primaryImageSrc:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80",
    secondaryImageSrc:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
    reverseLayout: false,
  },
  {
    title: (
      <>
        AI &amp; Automation
        <br />
        <span style={{ color: "#E05A3A" }}>That Does the Work.</span>
      </>
    ),
    description:
      "We integrate AI into your existing workflows and build intelligent automations that eliminate repetitive tasks, surface insights, and unlock new capabilities. From OpenAI integrations to custom AI agents — we make your business smarter without the complexity.",
    primaryImageSrc:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
    secondaryImageSrc:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80",
    reverseLayout: true,
  },
];

export default function ServiceDetails() {
  return (
    <div className="bg-[#111111] border-t border-[#2C2C2C]">
      {serviceBlocks.map((block, i) => (
        <SectionWithMockup key={i} {...block} />
      ))}
    </div>
  );
}
