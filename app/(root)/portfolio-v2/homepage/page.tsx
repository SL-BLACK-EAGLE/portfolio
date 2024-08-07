"use client";

import React from "react";
import { navItems } from "@/data";

import Hero from "@/app/components/v2/Hero";
import Grid from "@/app/components/Grid";
import Footer from "@/app/components/Footer";
import Clients from "@/app/components/Clients";
import Approach from "@/app/components/Approach";
import Experience from "@/app/components/Experience";
import RecentProjects from "@/app/components/RecentProjects";
import { FloatingNav } from "@/app/components/ui/FloatingNav";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
