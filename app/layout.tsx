import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "NGE Petroleum - Multi-Fuel Energy Solutions | Diesel, Petrol, CNG, CBG & EV Stations",
  description: "Leading facilitator for fuel and energy station setup across India. End-to-end solutions for Diesel, Petrol, CNG, CBG & EV Charging Stations. Trusted partner to leading Indian Oil & Gas PSUs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google tag (gtag.js) - placed in head via beforeInteractive strategy */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17731117963"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17731117963');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
