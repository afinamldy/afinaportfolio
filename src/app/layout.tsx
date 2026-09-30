import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afina Maulidya Farahdila – Portfolio",
  description:
    "Professional portfolio of Afina Maulidya Farahdila – Aviation professional, Frontliner & Marketing Support.",
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
