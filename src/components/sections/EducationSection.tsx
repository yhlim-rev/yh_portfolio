import { GraduationCap, BookOpen, Plane, Award, Cpu } from "lucide-react";
import { education } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import IconWrapper from "@/components/ui/IconWrapper";
import ProjectCarousel from "@/components/ui/ProjectCarousel";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  BookOpen,
  Plane,
  Award,
  Cpu,
};

export default function EducationSection() {
  const cards = education.map((edu) => {
    const Icon = iconMap[edu.icon] ?? GraduationCap;
    return (
      <Card key={edu.degree} className="flex gap-4 h-full">
        <IconWrapper size="md" className="flex-shrink-0">
          <Icon size={18} />
        </IconWrapper>
        <div>
          <h3 className="text-stone-200 font-medium text-sm">{edu.degree}</h3>
          <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{edu.school}</p>
          <p className="text-copper-600 text-xs font-mono mt-2">{edu.period}</p>
        </div>
      </Card>
    );
  });

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <SectionTitle className="mb-8">Education</SectionTitle>
      <ProjectCarousel visibleCount={3}>
        {cards}
      </ProjectCarousel>
    </section>
  );
}
