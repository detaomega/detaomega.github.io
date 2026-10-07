import type { ReactNode } from "react";
import {
  education,
  experiences,
  type LocalizedString,
  type OrganizationId,
} from "@/content/profile";
import { Icon } from "./icons";
import { Text } from "./language-provider";
import { OrganizationLogo } from "./organization-logo";

type TimelineEntry = {
  id: OrganizationId;
  title: LocalizedString;
  subtitle?: LocalizedString;
  organization: LocalizedString;
  dates: LocalizedString;
  upcoming?: boolean;
  detail: ReactNode;
};

function ResumeTimeline({
  items,
  kind,
  expanded = false,
}: {
  items: TimelineEntry[];
  kind: "education" | "experience";
  expanded?: boolean;
}) {
  return (
    <div className={`resume-timeline ${kind}-timeline`}>
      {items.map((item) => (
        <details
          className={`timeline-entry${item.upcoming ? " timeline-upcoming" : ""}`}
          key={item.id}
          id={item.id}
          open={expanded}
        >
          <summary className="timeline-summary">
            <OrganizationLogo organization={item.id} />
            <span className="timeline-copy">
              <Text className="timeline-title" text={item.title} />
              {item.subtitle && (
                <Text className="timeline-subtitle" text={item.subtitle} />
              )}
              <span className="timeline-meta">
                <Text
                  className="timeline-organization"
                  text={item.organization}
                />
                <Text className="date" text={item.dates} />
              </span>
            </span>
            <Icon name="chevron" />
          </summary>
          <div className="timeline-detail">{item.detail}</div>
        </details>
      ))}
    </div>
  );
}

export function EducationTimeline() {
  return (
    <ResumeTimeline
      kind="education"
      items={education.map((school) => ({
        id: school.id,
        title: school.degreeTitle,
        subtitle: school.field,
        organization: school.institution,
        dates: school.dates,
        detail: <Text as="p" text={school.note} />,
      }))}
    />
  );
}

export function ExperienceTimeline({
  expanded = false,
}: {
  expanded?: boolean;
}) {
  return (
    <ResumeTimeline
      kind="experience"
      expanded={expanded}
      items={experiences.map((job) => ({
        id: job.id,
        title: job.role,
        subtitle: job.subtitle,
        organization: job.organization,
        dates: job.dates,
        upcoming: job.upcoming,
        detail: (
          <>
            <Text as="p" text={job.description} />
            {job.achievements.length > 0 && (
              <ul>
                {job.achievements.map((achievement) => (
                  <Text as="li" key={achievement.en} text={achievement} />
                ))}
              </ul>
            )}
            {job.technologies.length > 0 && (
              <p className="technology-line">{job.technologies.join(" · ")}</p>
            )}
          </>
        ),
      }))}
    />
  );
}
