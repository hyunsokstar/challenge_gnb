'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Gnb from "./gnb";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Gnb />
        {children}
      </body>
    </html>
  );
}
