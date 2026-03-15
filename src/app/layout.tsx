import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INQUESTA 2.0 | Investigation Begins",
  description: "Solve the mystery. Join the tech investigation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          outfit.variable,
          spaceGrotesk.variable,
          "antialiased min-h-screen font-outfit selection:bg-accent selection:text-detective-brown overflow-x-hidden"
        )}
      >
        {children}
      </body>
    </html>
  );
}
