"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/95 backdrop-blur-md border-b border-[#2C2C2C]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <div className="relative w-16 h-16">
            <Image
              src="/images/EAS.png"
              alt="EADES logo"
              fill
              className="object-contain"
            />
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#9B9B9B] hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/book-demo"
            className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold text-white bg-[#E05A3A] hover:bg-[#c94e30] transition-colors duration-200 cursor-pointer rounded-[5px]"
          >
            Schedule Demo
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-t border-[#2C2C2C] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[#9B9B9B] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/book-demo"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center h-11 px-5 text-sm font-semibold text-white bg-[#E05A3A] hover:bg-[#c94e30] transition-colors duration-200 cursor-pointer mt-2 rounded-[5px]"
          >
            Schedule Demo
          </a>
        </div>
      )}
    </header>
  );
}
