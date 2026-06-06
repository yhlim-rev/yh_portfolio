import { navLinks, siteConfig } from "@/data/portfolio";
import SocialIcon from "@/components/ui/SocialIcon";

export default function Footer() {
  return (
    <footer className="border-t border-stone-800/60 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-stone-600 text-sm">{siteConfig.copyright}</p>

        {/* Footer nav */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-500 hover:text-copper-400 text-xs transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-2">
          <SocialIcon type="github" href={siteConfig.socials.github} />
          <SocialIcon type="linkedin" href={siteConfig.socials.linkedin} />
          <SocialIcon type="email" href={siteConfig.socials.email} />
        </div>
      </div>
    </footer>
  );
}
