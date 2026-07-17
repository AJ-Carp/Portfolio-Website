"use client";

import { useEffect, useState } from "react";
import { Home, Briefcase, Wrench, Contact, Building2 } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "Experience", url: "#experience", icon: Building2 },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Skills", url: "#skills", icon: Wrench },
  { name: "Contact", url: "#contact", icon: Contact },
];

export function Navbar() {
  return (
    <NavBar items={navItems} />
  );
}
