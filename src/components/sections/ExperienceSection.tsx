import { experience } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ExperienceSection() {
  return (
    <div id="experience">
      <SectionTitle className="mb-7">Experience</SectionTitle>
      <div className="space-y-8">
        {experience.map((job) => (
          <div key={job.role} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="timeline-dot mt-1" />
              <div className="w-px flex-1 bg-stone-800 mt-2" />
            </div>
            <div className="pb-6">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="text-stone-200 font-medium text-sm">{job.role}</h3>
                <span className="text-stone-600 text-xs font-mono">{job.period}</span>
              </div>
              {job.companyLink ? (
                <a
                  href={job.companyLink}
                  className="text-copper-500 hover:text-copper-400 text-xs transition-colors"
                >
                  {job.company}
                </a>
              ) : (
                <p className="text-copper-600 text-xs">{job.company}</p>
              )}
              <p className="text-stone-500 text-xs leading-relaxed mt-2">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
