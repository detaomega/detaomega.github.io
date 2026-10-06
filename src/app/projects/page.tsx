import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { Text } from "@/components/language-provider";
import { labels, profile, projects } from "@/content/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("projects");

export default function Projects() {
  return (
    <>
      <PageIntro page="projects" />
      <section className="projects-list" aria-label="Projects">
        <div className="project-grid projects-page-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} detailed />
          ))}
        </div>
      </section>
      <Text as="p" className="page-closing" text={labels.moreCode} />
      <a
        className="teal-link"
        href={profile.github + "?tab=repositories"}
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/detaomega
      </a>
    </>
  );
}
