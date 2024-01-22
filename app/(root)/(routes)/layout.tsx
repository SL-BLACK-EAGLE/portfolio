import React from "react";
import NewHeader from "@/app/components/NewHeader";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <NewHeader />
      {children}
    </main>
  );
}
