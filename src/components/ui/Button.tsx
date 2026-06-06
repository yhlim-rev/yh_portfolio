import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonBaseProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variants = {
  primary:
    "bg-copper-600 hover:bg-copper-500 text-white border border-copper-500",
  outline:
    "bg-transparent hover:bg-stone-900 text-stone-300 border border-stone-700 hover:border-copper-700",
  ghost:
    "bg-transparent hover:bg-stone-900 text-stone-400 hover:text-stone-200 border border-transparent",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export default function Button({ variant = "outline", size = "md", className, children, as, ...props }: ButtonProps) {
  const cls = cn(
    "inline-flex items-center gap-2 rounded font-body font-medium",
    "transition-all duration-200 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500",
    variants[variant],
    sizes[size],
    className
  );

  if (as === "a") {
    return (
      <a className={cls} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
