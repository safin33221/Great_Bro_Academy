import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

import { ThemeProvider } from "./components/theme-provider";
import { AOSProvider } from "@/components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Great Bro Academy",
  description: "E-Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-[1920px] mx-auto">
            <nav className="bg-background">

              <Navbar />
            </nav>
            <main className=" mx-auto">
              
            {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <AOSProvider/>
      </body>
    </html>
  );
}
