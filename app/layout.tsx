import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MMe AI — Automation that moves businesses forward",
  description:
    "MMe AI builds intelligent systems for content, leads, workflows, reporting, and sustainable business growth.",
  openGraph: {
    title: "MMe AI — Automation that moves businesses forward",
    description:
      "Automated systems for content, leads, workflows, reporting, and growth.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
