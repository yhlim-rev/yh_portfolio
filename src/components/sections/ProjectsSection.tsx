import { FileText, ShoppingCart, Globe, Users, Truck, Bell } from "lucide-react";
import { professionalProjects } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectCarousel from "@/components/ui/ProjectCarousel";

const iconMap: Record<string, React.ReactNode> = {
  FileText:    <FileText size={16} />,
  ShoppingCart: <ShoppingCart size={16} />,
  Globe:       <Globe size={16} />,
  Users:       <Users size={16} />,
  Truck:       <Truck size={16} />,
  Bell:        <Bell size={16} />,
};

export default function ProjectsSection() {
  const cards = professionalProjects.map((project) => (
    <ProjectCard
      key={project.name}
      company={project.company}
      name={project.name}
      description={project.description}
      tags={project.tags}
      icon={iconMap[project.icon] ?? <FileText size={16} />}
    />
  ));

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 pb-20">
      {/* Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border border-stone-800 bg-stone-900 text-stone-400">
          <span className="w-1.5 h-1.5 rounded-full bg-copper-500 inline-block" />
          Bikay Projects
        </span>
      </div>

      <SectionTitle className="mb-8">Professional Work @ Bikay</SectionTitle>

      <ProjectCarousel visibleCount={3}>
        {cards}
      </ProjectCarousel>
    </section>
  );
}
