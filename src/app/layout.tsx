import type { Metadata } from "next";
import { Inter, Barlow_Condensed, Barlow_Semi_Condensed, Lora } from "next/font/google";
import "./globals.css";

// Load Google Fonts for Car and Driver theme
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700", "800"],
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-semi-condensed",
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hearst Design System - Token Viewer",
  description: "Browse and explore Hearst Design System tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable} ${barlowSemiCondensed.variable} ${lora.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
