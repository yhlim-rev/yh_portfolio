import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lim Yonghay — Software Developer",
  description:
    "Portfolio of Lim Yonghay, a Software Developer specialising in full-stack web applications, Python, and JavaScript ecosystems.",
  keywords: ["software developer", "full-stack", "Vue.js", "Python", "Cambodia"],
  authors: [{ name: "Lim Yonghay" }],
  openGraph: {
    title: "Lim Yonghay — Software Developer",
    description: "Building secure, scalable, and user-friendly web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable} bg-bg-primary text-stone-200 font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
