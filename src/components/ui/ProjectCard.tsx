import { Calendar } from "lucide-react";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";

interface ProjectCardProps {
  company?: string;
  name: string;
  description: string;
  tags: string[];
  icon?: React.ReactNode;
}

export default function ProjectCard({ company, name, description, tags, icon }: ProjectCardProps) {
  return (
    <Card className="flex flex-col gap-3 h-full">
      {/* Card header */}
      <div className="flex items-start justify-between gap-2">
        {icon ? (
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 text-copper-500 flex-shrink-0">
            {icon}
          </div>
        ) : null}
        {company && (
          <span className="ml-auto flex items-center gap-1 text-stone-600 text-xs font-mono border border-stone-800 rounded px-2 py-0.5">
            <Calendar size={10} />
            {company}
          </span>
        )}
      </div>

      <div>
        <h3 className="text-stone-200 font-medium text-sm mb-1">{name}</h3>
        <p className="text-stone-500 text-xs leading-relaxed">{description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </Card>
  );
}
