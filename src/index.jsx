import React from "react";
import { FaqSection } from "./FaqSection";
import { FeaturesSection } from "./FeaturesSection";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { NavbarSection } from "./NavbarSection";
import { ServicesSection } from "./ServicesSection";

export default function LandingWeb() {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-950">
      <NavbarSection />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
