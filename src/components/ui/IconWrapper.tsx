import { cn } from "@/lib/utils";

interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

export default function IconWrapper({ children, className, size = "md" }: IconWrapperProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg",
        "bg-stone-900 border border-stone-800",
        "text-copper-400",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}
