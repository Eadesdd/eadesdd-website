"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, TrendingUp, DollarSign } from "lucide-react";

export default function DiscoveryCallPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("discovery-popup-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    sessionStorage.setItem("discovery-popup-dismissed", "1");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-[100] inset-0 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
          >
            <div
              className="relative w-full max-w-lg bg-[#1E1E1E] border border-[#2C2C2C] overflow-hidden rounded-[5px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Orange top bar */}
              <div className="h-1 w-full bg-[#E05A3A]" />

              {/* Close */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 text-[#9B9B9B] hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="px-8 py-8">
                {/* Eyebrow */}
                <span className="text-xs font-semibold uppercase tracking-widest text-[#E05A3A] mb-4 block">
                  Free · 15 Minutes · No Commitment
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                  Find Out How Much Time &amp; Money Your Business Could Save
                </h2>

                <p className="text-[#9B9B9B] text-sm leading-relaxed mb-6">
                  Book a free 15-minute discovery call and we&apos;ll show you
                  exactly where automation can eliminate manual work, cut costs,
                  and free up your team — no fluff, just real numbers.
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {[
                    {
                      icon: <Clock size={16} className="text-[#E05A3A]" />,
                      text: "Identify tasks wasting your team's hours every week",
                    },
                    {
                      icon: <DollarSign size={16} className="text-[#E05A3A]" />,
                      text: "Get a realistic savings estimate for your business",
                    },
                    {
                      icon: <TrendingUp size={16} className="text-[#E05A3A]" />,
                      text: "Walk away with a clear automation roadmap — free",
                    },
                  ].map(({ icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0">{icon}</span>
                      <span className="text-sm text-[#9B9B9B]">{text}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/book-demo"
                    className="flex-1 inline-flex items-center justify-center h-12 px-6 text-sm font-semibold text-white bg-[#E05A3A] hover:bg-[#c94e30] transition-colors duration-200 cursor-pointer rounded-[5px]"
                    onClick={dismiss}
                  >
                    Book My Free Call
                  </a>
                  <button
                    onClick={dismiss}
                    className="flex-1 inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-[#9B9B9B] border border-[#2C2C2C] hover:border-[#9B9B9B] hover:text-white transition-all duration-200 cursor-pointer rounded-[5px]"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
