import React from "react";
import { HomeHero } from "@/app/components/homeHero";
import { Header } from "@/app/components/header";
import { PageProvider } from "@/context/pageContext";

export default function Home() {
  return (
    <PageProvider>
      <Header />
      <HomeHero />
    </PageProvider>
  );
}
