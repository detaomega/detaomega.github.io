import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Text } from "@/components/language-provider";
import { SocialLinks } from "@/components/social-links";
import {
  aboutSections,
  awards,
  education,
  labels,
  profile,
  research,
  skills,
} from "@/content/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("about");

export default function About() {
  return (
    <>
      <PageIntro page="about" />
      <div className="about-layout">
        <div className="about-story">
          {aboutSections.map((section) => (
            <section
              className="text-section"
              id={section.id}
              key={section.id}
              aria-labelledby={`${section.id}-title`}
            >
              <Text as="h2" id={`${section.id}-title`} text={section.title} />
              <Text as="p" text={section.description} />
              {section.id === "research" && (
                <div className="interest-list">
                  {research.interests.map((interest) => (
                    <Text key={interest.en} text={interest} />
                  ))}
                </div>
              )}
              {section.id === "engineering" && (
                <Link className="teal-link" href="/experience/">
                  <Text text={labels.exploreExperience} />
                </Link>
              )}
            </section>
          ))}
        </div>
        <aside className="about-sidebar">
          <Image
            className="about-photo"
            src={profile.photo}
            alt="Ping-Yu Yang at the seaside"
            width={460}
            height={460}
          />
          <SocialLinks sidebar />
        </aside>
      </div>
      <section
        className="detail-section"
        id="education"
        aria-labelledby="education-title"
      >
        <Text as="h2" id="education-title" text={labels.education} />
        {education.map((school) => (
          <article className="education-row" key={school.id}>
            <div>
              <Text as="h3" text={school.name} />
              <Text as="p" text={school.degree} />
              <Text as="p" className="secondary-detail" text={school.note} />
            </div>
            <Text className="date" text={school.dates} />
          </article>
        ))}
      </section>
      <section
        className="detail-section"
        id="awards"
        aria-labelledby="awards-title"
      >
        <Text as="h2" id="awards-title" text={labels.awards} />
        {awards.map((award) => (
          <div className="award-row" key={award.title.en}>
            <span className="date">{award.year}</span>
            <div>
              <Text as="h3" text={award.title} />
              <Text as="p" text={award.result} />
            </div>
          </div>
        ))}
      </section>
      <section
        className="detail-section"
        id="skills"
        aria-labelledby="skills-title"
      >
        <Text as="h2" id="skills-title" text={labels.skills} />
        {skills.map((skill) => (
          <div className="skill-row" key={skill.title.en}>
            <Text as="h3" text={skill.title} />
            <Text as="p" text={skill.description} />
          </div>
        ))}
      </section>
    </>
  );
}
