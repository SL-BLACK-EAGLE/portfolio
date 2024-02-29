import React from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="justify-center flex overflow-x-hidden">
      <div className="overflow-x-hidden w-full mx-auto">{children}</div>
    </div>
  );
}
