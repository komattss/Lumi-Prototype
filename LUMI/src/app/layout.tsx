import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { AppLayout } from "@/components/common/AppLayout";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lumi - Interactive Mini-Superapp",
    template: "%s | Lumi",
  },
  description:
    "A modern, responsive web application with maps, tasks, store, and profile modules.",
  keywords: ["mini-superapp", "tasks", "maps", "chat", "productivity"],
  authors: [{ name: "Lumi Team" }],
  creator: "Lumi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumi.app",
    title: "Lumi - Interactive Mini-Superapp",
    description:
      "A modern, responsive web application with maps, tasks, store, and profile modules.",
    siteName: "Lumi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumi - Interactive Mini-Superapp",
    description:
      "A modern, responsive web application with maps, tasks, store, and profile modules.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('lumi-theme') || 'light';
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-background text-foreground antialiased`}
      >
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
