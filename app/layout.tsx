import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { GradientBackground } from "@/components/animations/gradient-bg";
import { CommandPalette } from "@/components/ui/command-palette";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "Ishaan Singh Chawla — Software Engineer",
    template: "%s | Ishaan Singh Chawla",
  },
  description:
    "Building scalable backend systems, AI-powered applications, and production-ready software. Software Engineer portfolio.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "AI Engineer",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Ishaan Singh Chawla" }],
  creator: "Ishaan Singh Chawla",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ishaan Singh Chawla — Software Engineer",
    description:
      "Building scalable backend systems, AI-powered applications, and production-ready software.",
    siteName: "Ishaan Singh Chawla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishaan Singh Chawla — Software Engineer",
    description:
      "Building scalable backend systems, AI-powered applications, and production-ready software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrains.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <SmoothScrollProvider>
          <GradientBackground />
          <div className="noise-overlay" aria-hidden />
          <Navbar />
          <CommandPalette />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
