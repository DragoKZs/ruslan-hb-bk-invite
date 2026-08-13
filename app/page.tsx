"use client";

import { useState } from "react";

import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/hero/Hero";
import About from "@/app/components/about/About";
import Program from "@/app/components/program/Program";
import Registration from "@/app/components/registration/Registration";
import Footer from "@/app/components/layout/Footer";

import Welcome from "@/app/components/welcome/Welcome";

export default function HomePage() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && (
        <Welcome
          onEnter={() => {
            setEntered(true);
          }}
        />
      )}

      <div
        className={`transition-all duration-1000 ${
          entered
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <Header />

        <main>
          <Hero />
          <About />
          <Program />
          <Registration />
        </main>

        <Footer />
      </div>
    </>
  );
}