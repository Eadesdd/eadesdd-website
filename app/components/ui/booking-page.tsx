"use client";

import Link from "next/link";
import Script from "next/script";
import { ArrowLeft } from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/eadesdd-info/intro-call?hide_event_type_details=0&hide_gdpr_banner=1&background_color=111111&text_color=ffffff&primary_color=E05A3A";

export interface BookingPageProps {
  eyebrow: string;
  heading: string;
  subheading: string;
  // successHeading and successBody are handled by Calendly's confirmation screen
  successHeading?: string;
  successBody?: string;
}

export default function BookingPage({
  eyebrow,
  heading,
  subheading,
}: BookingPageProps) {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Top bar */}
      <div className="border-b border-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/EAS.png" alt="EADES" className="w-7 h-7 object-contain" />
            <span className="text-base font-bold text-white tracking-tight">EADES</span>
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-sm text-[#9B9B9B] hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </div>

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#E05A3A] mb-4 block">
          {eyebrow}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {heading}
        </h1>
        <p className="mt-3 text-[#9B9B9B] max-w-lg leading-relaxed">
          {subheading}
        </p>
      </div>

      {/* Calendly inline embed */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div
          className="calendly-inline-widget w-full rounded-sm overflow-hidden"
          data-url={CALENDLY_URL}
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
