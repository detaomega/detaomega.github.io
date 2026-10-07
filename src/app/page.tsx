import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/language-provider";
import { SocialLinks } from "@/components/social-links";
import { ProjectCard } from "@/components/project-card";
import {
  EducationTimeline,
  ExperienceTimeline,
} from "@/components/resume-timeline";
import { Icon } from "@/components/icons";
import {
  awards,
  labels,
  pages,
  profile,
  projects,
  research,
  skills,
} from "@/content/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("home");

export default function Home() {
  return (
    <>
      <section
        className="profile-introduction"
        id="introduction"
        aria-labelledby="profile-title"
      >
        <div className="profile-heading">
          <div className="profile-identity">
            <Text as="p" className="profile-focus" text={profile.focus} />
            <h1 id="profile-title">{profile.name}</h1>
            <Text as="p" className="profile-subtitle" text={profile.subtitle} />
            <SocialLinks buttons />
          </div>
          <div className="profile-portrait">
            <Image
              src={profile.photo}
              alt="Ping-Yu Yang by the sea"
              width={460}
              height={460}
              preload
            />
          </div>
        </div>
        <div className="profile-biography">
          <p>
            <strong>
              <Text text={labels.research} />
            </strong>
            <Text text={research.summary} />
          </p>
          <p>
            <strong>
              <Text text={labels.biography} />
            </strong>
            <Text text={pages.home.intro} />
          </p>
        </div>
      </section>
      <section
        className="resume-section"
        id="education"
        aria-labelledby="education-title"
      >
        <h2 className="section-heading" id="education-title">
          <Icon name="education" />
          <Text text={labels.education} />
        </h2>
        <EducationTimeline />
      </section>
      <section
        className="resume-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="section-header">
          <h2 className="section-heading" id="experience-title">
            <Icon name="work" />
            <Text text={pages.experience.label} />
          </h2>
          <Link className="section-link" href="/experience/">
            <Text text={labels.viewDetails} />
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ExperienceTimeline />
      </section>
      <section
        className="resume-section"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="section-header">
          <h2 className="section-heading" id="projects-title">
            <Icon name="code" />
            <Text text={labels.selectedProjects} />
          </h2>
          <Link className="section-link" href="/projects/">
            <Text text={labels.allProjects} />
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section
        className="resume-section"
        id="awards"
        aria-labelledby="awards-title"
      >
        <h2 className="section-heading" id="awards-title">
          <Icon name="award" />
          <Text text={labels.awards} />
        </h2>
        <div className="awards-list">
          {awards.map((award) => (
            <article className="award-row" key={award.title.en}>
              <span className="date">{award.year}</span>
              <div>
                <Text as="h3" text={award.title} />
                <Text as="p" text={award.result} />
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="resume-section"
        id="skills"
        aria-labelledby="skills-title"
      >
        <h2 className="section-heading" id="skills-title">
          <Icon name="skills" />
          <Text text={labels.skills} />
        </h2>
        {skills.map((skill) => (
          <div className="skill-row" key={skill.title.en}>
            <Text as="h3" text={skill.title} />
            <Text as="p" text={skill.description} />
          </div>
        ))}
      </section>
      <section
        className="resume-section"
        id="journal"
        aria-labelledby="journal-title"
      >
        <Text
          as="h2"
          className="section-heading"
          id="journal-title"
          text={labels.journal}
        />
        <div className="journal-grid">
          <Link className="journal-card" href="/blog/">
            <Icon name="book" />
            <Text as="h3" text={pages.blog.label} />
            <Text as="p" text={pages.blog.intro} />
            <span className="journal-card-link">
              <Text text={labels.readBlog} />
              <span aria-hidden="true">↗</span>
            </span>
          </Link>
          <Link className="journal-card" href="/travel/">
            <Icon name="globe" />
            <Text as="h3" text={pages.travel.label} />
            <Text as="p" text={pages.travel.intro} />
            <span className="journal-card-link">
              <Text text={labels.exploreTravel} />
              <span aria-hidden="true">↗</span>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
