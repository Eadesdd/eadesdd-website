"use client";

import Link from "next/link";
import { ArrowUp, Mail, Heart } from "lucide-react";

function handleScrollTop() {
  window.scroll({ top: 0, behavior: "smooth" });
}

const navigation = [
  {
    id: "services",
    name: "Services",
    items: [
      { name: "Web Applications", href: "#services" },
      { name: "Websites & Landing Pages", href: "#services" },
      { name: "Mobile Applications", href: "#services" },
      { name: "AI & Automation", href: "#services" },
    ],
  },
  {
    id: "company",
    name: "Company",
    items: [
      { name: "Process", href: "#process" },
      { name: "Tech Stack", href: "#tech" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    id: "legal",
    name: "Legal",
    items: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

const socials = [
  {
    label: "Email",
    href: "mailto:info@eadesdd.com",
    icon: <Mail className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#2C2C2C] w-full">
      {/* Logo + description */}
      <div className="relative mx-auto flex flex-col items-start gap-6 max-w-7xl px-6 md:px-10 pt-14 pb-0 md:flex-row md:items-center">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/EAS.png" alt="EADES logo" className="w-8 h-8 object-contain" />
          <span className="text-lg font-bold text-white tracking-tight">EADES</span>
        </Link>
        <p className="text-xs leading-5 text-[#9B9B9B] md:text-left">
          EADES is a digital development studio building web apps, websites, mobile
          applications, and AI automation solutions for businesses and entrepreneurs.
          We turn ambitious ideas into high-performance digital products — from first
          concept to final launch.
        </p>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-10">
        <div className="border-b border-dashed border-[#2C2C2C]" />
      </div>

      {/* Nav columns */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10">
        <div className="grid grid-cols-3 gap-6 md:flex md:flex-row md:justify-between">
          {navigation.map((section) => (
            <div key={section.id} className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9B9B9B]">
                {section.name}
              </span>
              <ul className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#9B9B9B] hover:text-white transition-colors duration-200 md:text-xs"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9B9B9B]">
              Get In Touch
            </span>
            <Link
              href="mailto:info@eadesdd.com"
              className="text-sm text-[#9B9B9B] hover:text-[#E05A3A] transition-colors duration-200 md:text-xs"
            >
              info@eadesdd.com
            </Link>
            <Link
              href="/start-project"
              className="mt-2 inline-flex w-fit items-center justify-center px-5 h-9 text-xs font-semibold text-white bg-[#E05A3A] hover:bg-[#c94e30] transition-colors duration-200"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="border-b border-dashed border-[#2C2C2C]" />
      </div>

      {/* Socials + scroll to top */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-wrap items-center justify-center gap-4">
        {socials.map(({ label, href, icon }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="hover:-translate-y-1 border border-dashed border-[#2C2C2C] rounded-xl p-2.5 text-[#9B9B9B] hover:text-white hover:border-[#E05A3A]/50 transition-all duration-200"
          >
            {icon}
          </Link>
        ))}

        <button
          type="button"
          onClick={handleScrollTop}
          aria-label="Scroll to top"
          className="hover:-translate-y-1 border border-dashed border-[#2C2C2C] rounded-full p-2.5 text-[#9B9B9B] hover:text-white hover:border-[#E05A3A]/50 transition-all duration-200"
        >
          <ArrowUp className="h-3 w-3" />
        </button>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-10 flex flex-col items-center justify-center gap-1 text-center text-xs text-[#9B9B9B]">
        <div className="flex flex-row items-center gap-1">
          <span>©</span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Heart className="mx-1 h-3 w-3 text-[#E05A3A] animate-pulse" fill="currentColor" />
          <span>by</span>
          <Link
            href="#"
            className="font-bold text-white hover:text-[#E05A3A] transition-colors duration-200"
          >
            EADES
          </Link>
        </div>
        <p className="text-[#9B9B9B]/60">Built with precision. Delivered with purpose.</p>
      </div>
    </footer>
  );
}
