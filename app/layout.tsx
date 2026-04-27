import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import DiscoveryCallPopup from "./components/DiscoveryCallPopup";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EADES — Digital Development Studio",
  description:
    "We build Web Apps, Websites, Mobile Applications, and AI Automation solutions for Businesses and Entrepreneurs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#111111] text-white antialiased">
        {children}
        <DiscoveryCallPopup />
      </body>
    </html>
  );
}
