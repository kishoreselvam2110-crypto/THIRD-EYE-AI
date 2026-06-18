import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HazardAlertInitializer from "../components/HazardAlertInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "THIRD EYE AI",
  description: "Your Intelligent Companion That Sees, Hears, Guides, and Protects.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HazardAlertInitializer />
        {children}
      </body>
    </html>
  );
}
