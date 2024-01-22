import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-slate-900 min-h-screen">{children}</main>;
}
