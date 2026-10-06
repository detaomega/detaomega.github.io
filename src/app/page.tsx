import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/language-provider";
import { SocialLinks } from "@/components/social-links";
import { ProjectCard } from "@/components/project-card";
import { WorkWidget } from "@/components/work-widget";
import { Icon } from "@/components/icons";
import {
  education,
  labels,
  pages,
  profile,
  projects,
  research,
} from "@/content/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("home");

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Text as="h1" id="hero-title" text={pages.home.heading} />
          <Text as="p" className="intro-text" text={pages.home.intro} />
          <SocialLinks />
        </div>
        <figure className="hero-photo">
          <Image
            src={profile.photo}
            alt="Ping-Yu Yang standing by the sea"
            width={460}
            height={460}
            preload
          />
        </figure>
      </section>
      <section
        className="home-projects"
        aria-label="Selected projects and research"
      >
        <div className="project-grid">
          <Link className="project-preview" href="/about/#research">
            <span className="project-emoji" aria-hidden="true">
              {research.icon}
            </span>
            <Text as="h2" text={research.title} />
            <Text as="p" text={research.summary} />
            <span className="subtle-link">
              <Icon name="link" />
              <Text text={labels.research} />
            </span>
          </Link>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section className="home-background" aria-label="Education and work">
        <div className="background-notes">
          {education.map((school, index) => (
            <article className="background-note" key={school.id}>
              <Text as="p" className="note-date" text={school.years} />
              <Text as="h2" text={school.name} />
              <Text as="p" text={school.summary} />
              <Link
                className="teal-link"
                href={index === 0 ? "/about/#education" : "/about/#awards"}
              >
                <Text
                  text={index === 0 ? labels.academicBackground : labels.awards}
                />
              </Link>
            </article>
          ))}
        </div>
        <WorkWidget />
      </section>
    </>
  );
}
