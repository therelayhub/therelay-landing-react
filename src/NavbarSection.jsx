import { Button } from "@mui/material";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";

export default function NavbarSection() {
  // Navigation links data
  const navLinks = [
    { title: "About", href: "#" },
    { title: "Request an app", href: "#" },
  ];

  return (
    <header className="w-full bg-colors-app-background py-4 px-8">
      <div className="flex items-center justify-between max-w-[1312px] mx-auto">
        {/* Logo and navigation links */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-9 h-9 flex items-center justify-center">
            <img className="w-9 h-[32.03px]" alt="Logo" src="" />
          </div>

          {/* Navigation links */}
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium text-colors-app-foreground text-sm"
                    href={link.href}
                  >
                    {link.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Join Waitlist button */}
        <Button className="h-9 px-4 py-3 rounded-lg shadow-shimmer font-action-l text-variable-collection-sand-7 bg-gradient-to-b from-[rgba(248,247,244,1)] to-[rgba(154,148,118,1)]">
          Join Waitlist
        </Button>
      </div>
    </header>
  );
}
