import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://abahazem-portfolio.vercel.app/"),
  title: "Abahazem Mohamed | Next.js | React  | Web-DEV",
  description:
    "Full Stack  Developer from Morocco with 2 years of expertise. Senior Digital Developer. Specializing web apps , DevOps, and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Abahazem",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Abahazem Mohamed | Next.js | React  | Web-DEV",
    description:
    "Full Stack  Developer from Morocco with 2 years of expertise. Senior Digital Developer. Specializing web apps , DevOps, and JavaScript technologies.",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "https://abahazem-portfolio.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll  overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
