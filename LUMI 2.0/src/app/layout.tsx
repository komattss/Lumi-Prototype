import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUMI — Experience the Future",
  description:
    "A story-driven journey into the world of LUMI. Scroll to discover.",
  metadataBase: new URL("https://lumi.example.com"),
  openGraph: {
    title: "LUMI — Experience the Future",
    description: "A story-driven journey into the world of LUMI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
