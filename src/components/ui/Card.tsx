import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-bg-card border border-stone-800/60 rounded-lg p-5",
        "shadow-card",
        hover && "card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
