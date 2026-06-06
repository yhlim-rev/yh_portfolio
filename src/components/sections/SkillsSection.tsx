import { skills } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

export default function SkillsSection() {
  return (
    <div>
      <SectionTitle className="mb-7">Skills</SectionTitle>
      <div className="space-y-6">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-stone-500 text-xs uppercase tracking-widest font-mono mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <span key={item} className="flex items-center gap-2 text-stone-300 text-sm">
                  {i > 0 && <span className="text-stone-700">•</span>}
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
