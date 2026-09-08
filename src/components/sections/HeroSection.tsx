import { Download } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import Button from "@/components/ui/Button";
import SocialIcon from "@/components/ui/SocialIcon";
import HeroPhotoCarousel from "@/components/ui/HeroPhotoCarousel";

export default function HeroSection() {
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

        {/* ── Left: text ─────────────────────────────────────────── */}
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

        {/* ── Right: 3D photo carousel ────────────────────────────── */}
        <div
          className="flex justify-center lg:justify-end animate-fade-up"
          style={{ animationDelay: "150ms", animationFillMode: "both" }}
        >
          <HeroPhotoCarousel ownerName={siteConfig.name} />
        </div>

      </div>
    </section>
  );
}
