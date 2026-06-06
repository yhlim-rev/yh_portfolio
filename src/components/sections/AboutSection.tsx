import { Calendar, MapPin, GraduationCap } from "lucide-react";
import { aboutDescription, aboutStats } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  MapPin,
  GraduationCap,
};

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Description */}
        <div>
          <SectionTitle className="mb-6">About Me</SectionTitle>
          <div className="space-y-4">
            {aboutDescription.map((paragraph, i) => (
              <p key={i} className="text-stone-400 leading-relaxed text-sm">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-4 lg:pt-2">
          {aboutStats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-stone-800 bg-stone-900 text-copper-500 flex-shrink-0">
                  {Icon && <Icon size={16} />}
                </div>
                <div>
                  <p className="text-stone-600 text-xs uppercase tracking-wider font-mono">
                    {stat.label}
                  </p>
                  <p className="text-stone-200 text-sm font-medium mt-0.5">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
