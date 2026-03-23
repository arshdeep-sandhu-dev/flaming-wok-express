import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flaming Wok Express | Chinese & Asian Fusion | San Antonio, TX",
  description:
    "Wok-fired Chinese and Asian fusion in San Antonio. Drive-thru available. Famous Bourbon Chicken, Flaming Wok Fried Rice, Kung Pao, and more. Mon–Sat 11AM–9PM.",
  keywords: [
    "Chinese food San Antonio",
    "drive thru Chinese",
    "wok fired",
    "Asian fusion 1604",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} antialiased`}
    >
      <body className="font-body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
