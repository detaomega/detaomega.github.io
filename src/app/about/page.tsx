import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Text } from "@/components/language-provider";
import { SocialLinks } from "@/components/social-links";
import { EducationTimeline } from "@/components/resume-timeline";
import { Icon } from "@/components/icons";
import { StructuredData } from "@/components/structured-data";
import {
  aboutSections,
  awards,
  labels,
  profile,
  research,
  skills,
} from "@/content/profile";
import { pageMetadata } from "@/lib/metadata";
import { profilePageSchema } from "@/lib/structured-data";

export const metadata = pageMetadata("about");

export default function About() {
  return (
    <>
      <StructuredData data={profilePageSchema} />
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
        <h2 className="section-heading" id="education-title">
          <Icon name="education" />
          <Text text={labels.education} />
        </h2>
        <EducationTimeline />
      </section>
      <section
        className="detail-section"
        id="awards"
        aria-labelledby="awards-title"
      >
        <h2 className="section-heading" id="awards-title">
          <Icon name="award" />
          <Text text={labels.awards} />
        </h2>
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
    </>
  );
}
