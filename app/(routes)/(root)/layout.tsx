import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-slate-900">{children}</main>;
}