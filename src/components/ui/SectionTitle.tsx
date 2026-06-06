import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionTitle({ children, className, as: Tag = "h2" }: SectionTitleProps) {
  return (
    <Tag className={cn("section-title font-display text-2xl font-semibold text-stone-100", className)}>
      {children}
    </Tag>
  );
}
