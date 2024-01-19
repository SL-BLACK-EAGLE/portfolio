import React from "react";
import { MainHero } from "@/app/components/mainHero";
import { Header } from "@/app/components/header";
import { PageProvider } from "@/context/pageContext";

export default function Home() {
  return (
    <PageProvider>
      <Header />
      <MainHero />
    </PageProvider>
  );
}
