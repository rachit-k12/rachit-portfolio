import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rachit Kumar — AI Founder & Developer",
  description: "20-year-old founder building Veyu AI. Ex-Sarvam AI. Building AI that businesses actually use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-secondary">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
