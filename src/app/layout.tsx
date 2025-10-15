import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Payd.plus - Your Payments, Simplified",
  description: "From business invoices to creator tips to global transfers — all unified in Payd.plus.",
  keywords: ["payments", "fintech", "crypto", "fiat", "transfers", "invoices"],
  authors: [{ name: "Payd.plus" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Payd.plus - Your Payments, Simplified",
    description: "From business invoices to creator tips to global transfers — all unified in Payd.plus.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payd.plus - Your Payments, Simplified",
    description: "From business invoices to creator tips to global transfers — all unified in Payd.plus.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
