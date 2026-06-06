import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
  className?: string;
}

export default function Tag({ label, className }: TagProps) {
  return (
    <span className={cn("tag-pill", className)}>
      {label}
    </span>
  );
}
