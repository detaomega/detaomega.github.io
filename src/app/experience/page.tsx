import { PageIntro } from "@/components/page-intro";
import { Text } from "@/components/language-provider";
import { ExperienceTimeline } from "@/components/resume-timeline";
import { labels, profile } from "@/content/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("experience");

export default function Experience() {
  return (
    <>
      <PageIntro page="experience" />
      <section className="experience-list" aria-label="Work experience">
        <ExperienceTimeline expanded />
      </section>
      <div className="experience-contact">
        <Text as="h2" text={labels.connect} />
        <Text as="p" text={labels.contact} />
        <a className="teal-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </>
  );
}
