"use client";

import Navbar from "@/components/Navbar";
import ContactMe from "@/components/ContactMe";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AboutMe />
      <ContactMe />
    </div>
  );
}
