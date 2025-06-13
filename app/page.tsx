"use client";

import Navbar from "@/components/Navbar";
import ContactMe from "@/components/ContactMe";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen space-y-8">
      <Navbar />
      <AboutMe />
      <Education />
      <Experience />
      <ContactMe />
    </div>
  );
}
