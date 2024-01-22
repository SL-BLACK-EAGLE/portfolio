import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Main Menu",
  description: "This is menu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gradient-to-tr from-teal-800 via-violet-700  to-teal-700  max-h-screen overflow-hidden justify-between font_apoc">
      {children}
    </main>
  );
}
