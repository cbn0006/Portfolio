"use client";

import Navbar from "@/components/Navbar";
import ContactMe from "@/components/ContactMe";
import AboutMe from "@/components/AboutMe";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen space-y-8">
      <Navbar />
      <AboutMe />
      <Timeline />
      <ContactMe />
    </div>
  );
}
