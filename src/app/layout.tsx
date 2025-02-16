import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rope Access Services",
  description:
    "Professional rope access banner installation in South Africa. Safely install advertising banners on buildings and billboards. Expert services for your high-reach advertising needs.",
  keywords: [
    "rope access banner installation",
    "building banner installation South Africa",
    "billboard banner installation South Africa",
    "high-rise banner installation",
    "advertising banner installers",
    "large format banner installation",
    "banner change outs South Africa",
    "safe banner installation",
    "efficient banner installation",
    "outdoor advertising installation",
    "abseiling banner installation",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    // url: "https://ropeaccess.services",
    title: "Rope Access Services",
    images: [
      {
        url: "https://utfs.io/f/KiiHyHYhEMIzyWe3LIQRTnsWmtyXUHv6xBaSCruAVbNQP0oD",
        alt: "Rope Access Services",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
