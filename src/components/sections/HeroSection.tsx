"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/portfolio";
import Button from "@/components/ui/Button";
import SocialIcon from "@/components/ui/SocialIcon";

/** Derives initials from the full name (e.g. "Lim Yonghay" → "LY") */
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);
  const showImage = !!siteConfig.avatarImage && !imgError;

  return (
    <section id="home" className="hero-mesh relative min-h-screen flex items-center pt-16">
      {/* Decorative corner brackets */}
      <div className="absolute top-24 right-8 hidden lg:block opacity-20 pointer-events-none">
        <div className="w-20 h-20 border-t-2 border-r-2 border-copper-600 rounded-tr-sm" />
      </div>
      <div className="absolute bottom-12 left-8 hidden lg:block opacity-20 pointer-events-none">
        <div className="w-16 h-16 border-b-2 border-l-2 border-copper-600 rounded-bl-sm" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">

        {/* ── Left: text ─────────────────────────────────────────────── */}
        <div className="animate-fade-up" style={{ animationFillMode: "both" }}>
          <p className="text-stone-500 text-sm font-mono mb-3 tracking-widest uppercase">
            Hi, I&apos;m
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-100 leading-none mb-4">
            {siteConfig.name}
          </h1>
          <p className="text-copper-400 text-xl font-display italic mb-6">
            {siteConfig.role}
          </p>
          <p className="text-stone-400 text-base leading-relaxed max-w-md mb-8">
            {siteConfig.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Button variant="outline" size="md" as="a" href="/resume.pdf" download>
              <Download size={15} />
              Download Resume
            </Button>
          </div>

          <div className="flex gap-2">
            <SocialIcon type="github"   href={siteConfig.socials.github} />
            <SocialIcon type="linkedin" href={siteConfig.socials.linkedin} />
            <SocialIcon type="email"    href={siteConfig.socials.email} />
          </div>
        </div>

        {/* ── Right: avatar ──────────────────────────────────────────── */}
        <div
          className="flex justify-center lg:justify-end animate-fade-up"
          style={{ animationDelay: "150ms", animationFillMode: "both" }}
        >
          {/*
           * To use your own photo:
           *   1. Copy your image to  /public/avatar.jpg  (jpg, png, or webp)
           *   2. Set  avatarImage: "/avatar.jpg"  in src/data/portfolio.ts
           * The initials placeholder shows automatically when no image is found.
           */}
          <div className="relative">
            {/* Decorative offset border (behind the photo) */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-copper-700/30 rounded pointer-events-none" />

            <div className="relative w-44 h-52 rounded border-2 border-copper-700/50 overflow-hidden bg-stone-900/70 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              {showImage ? (
                <Image
                  src={siteConfig.avatarImage!}
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-top"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                /* Initials fallback — styled like a wabi-sabi seal */
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <span className="font-display text-5xl font-bold text-stone-700 select-none leading-none">
                    {getInitials(siteConfig.name)}
                  </span>
                  <span className="text-stone-800 text-[10px] font-mono tracking-[0.3em] uppercase select-none">
                    photo
                  </span>
                </div>
              )}

              {/* Subtle inner vignette overlay so text stays readable if photo is bright */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
