import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import React from "react";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chathuranga Lakmal",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <main className="w-[100vw]  min-h-screen">{children}</main>
      </body>
    </html>
  );
}
