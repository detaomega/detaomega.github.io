import { PageIntro } from "@/components/page-intro";
import { Text } from "@/components/language-provider";
import { CompanyBadge } from "@/components/icons";
import { experiences, labels, profile } from "@/content/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("experience");

export default function Experience() {
  return (
    <>
      <PageIntro page="experience" />
      <section className="experience-list" aria-label="Work experience">
        {experiences.map((job) => (
          <article className="experience-entry" id={job.id} key={job.id}>
            <div className="experience-top">
              <div className="experience-identity">
                <CompanyBadge company={job.id} />
                <div>
                  <h2>{job.company}</h2>
                  <Text as="p" text={job.context} />
                </div>
              </div>
              <Text className="date" text={job.dates} />
            </div>
            <Text as="p" text={job.description} />
            <ul>
              {job.achievements.map((achievement) => (
                <Text as="li" key={achievement.en} text={achievement} />
              ))}
            </ul>
            <p className="technology-line">{job.technologies.join(" · ")}</p>
          </article>
        ))}
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
