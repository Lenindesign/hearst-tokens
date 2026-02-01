import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
