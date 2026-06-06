import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialIconProps {
  type: "github" | "linkedin" | "email";
  href: string;
  className?: string;
  size?: number;
}

const icons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export default function SocialIcon({ type, href, className, size = 18 }: SocialIconProps) {
  const Icon = icons[type];
  return (
    <a
      href={href}
      target={type !== "email" ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={type}
      className={cn(
        "flex items-center justify-center w-9 h-9 rounded-lg",
        "border border-stone-800 bg-stone-900/60",
        "text-stone-400 hover:text-copper-400 hover:border-copper-700",
        "transition-all duration-200 hover:-translate-y-0.5",
        className
      )}
    >
      <Icon size={size} />
    </a>
  );
}
