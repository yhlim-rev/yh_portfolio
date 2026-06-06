"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active nav highlighting
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-stone-800/60 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-copper-500 font-mono text-sm font-medium">&lt;/&gt;</span>
          <span className="font-display text-stone-100 font-semibold tracking-wide group-hover:text-copper-400 transition-colors">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link text-sm transition-colors duration-200",
                activeSection === link.href.replace("#", "")
                  ? "text-copper-400 active"
                  : "text-stone-400 hover:text-stone-200"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-stone-400 hover:text-stone-200 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-secondary/95 backdrop-blur-md border-b border-stone-800">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-sm py-1 transition-colors",
                  activeSection === link.href.replace("#", "")
                    ? "text-copper-400"
                    : "text-stone-400"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
