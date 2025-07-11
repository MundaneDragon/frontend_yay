// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter
import "./globals.css";

// Configure the font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Set up a CSS variable
});

export const metadata: Metadata = {
  title: "SpeakAndLearn.ai",
  description: "Improve your communication skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Add the font variable to the body */}
      <body className={`${inter.variable} font-sans bg-background`}>
        {children}
      </body>
    </html>
  );
}