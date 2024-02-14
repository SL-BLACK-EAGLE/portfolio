import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="justify-center flex">
      <div className="overflow-x-hidden">{children}</div>
    </div>
  );
}
