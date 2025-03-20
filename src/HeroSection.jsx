import { Button } from "@mui/material";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex w-full items-center justify-between py-20 px-8 bg-colors-app-background">
      <div className="flex flex-col items-start gap-12 max-w-[667px] z-10">
        <div className="flex flex-col items-start gap-8 w-full">
          <h1 className="text-7xl font-semibold leading-[72px] tracking-tight text-variable-collection-sand-2 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            Make your apps do the work you hate
          </h1>
          <p className="text-xl text-colors-app-muted-foreground max-w-[544px]">
            Bring all your work apps together. Chat, automate, and get work done
            right from your phone with The Relay
          </p>
        </div>

        <Button className="w-[300px] h-12 rounded-lg shadow-shimmer bg-gradient-to-b from-[rgba(248,247,244,1)] to-[rgba(154,148,118,1)] text-variable-collection-sand-7 font-medium">
          Join Waitlist
        </Button>
      </div>

      <div className="relative">
        <img
          className="w-[609px] h-[784px] object-cover z-[1]"
          alt="Mobile app interface showing The Relay application"
          src=""
        />
      </div>
    </section>
  );
}
