import { Leaf, BookOpen, Code2, BarChart2, Rss } from "lucide-react";
import { sideProjects } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectCarousel from "@/components/ui/ProjectCarousel";

const iconMap: Record<string, React.ReactNode> = {
  Leaf:     <Leaf size={16} />,
  BookOpen: <BookOpen size={16} />,
  Code2:    <Code2 size={16} />,
  BarChart2: <BarChart2 size={16} />,
  Rss:      <Rss size={16} />,
};

export default function SideProjectsSection() {
  const cards = sideProjects.map((project) => (
    <ProjectCard
      key={project.name}
      name={project.name}
      description={project.description}
      tags={project.tags}
      icon={iconMap[project.icon]}
    />
  ));

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="flex items-center gap-3 mb-8">
        <SectionTitle>Side Projects</SectionTitle>
        <span className="text-stone-600 text-xs font-mono">Personal Experiments</span>
      </div>
      <ProjectCarousel visibleCount={3}>
        {cards}
      </ProjectCarousel>
    </section>
  );
}
