import { projects, labels } from "@/content/profile";
import { Icon } from "./icons";
import { Text } from "./language-provider";

type Project = (typeof projects)[number];

export function ProjectCard({
  project,
  detailed = false,
}: {
  project: Project;
  detailed?: boolean;
}) {
  const content = (
    <>
      <span className="project-icon">
        <Icon name={project.icon} />
      </span>
      <Text as="h2" text={detailed ? project.title : project.shortTitle} />
      <Text as="p" text={detailed ? project.description : project.summary} />
      {detailed && (
        <>
          <ul className="project-points">
            {project.details.map((detail, index) => (
              <Text as="li" key={index} text={detail} />
            ))}
          </ul>
          <p className="technology-line">{project.technologies.join(" · ")}</p>
        </>
      )}
    </>
  );
  const linkLabel = detailed ? labels.githubProject : labels.viewProject;
  if (detailed)
    return (
      <article className="project-preview">
        {content}
        <a
          className="subtle-link"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="link" />
          <Text text={linkLabel} />
        </a>
      </article>
    );
  return (
    <a
      className="project-preview"
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
      <span className="subtle-link">
        <Icon name="link" />
        <Text text={linkLabel} />
      </span>
    </a>
  );
}
