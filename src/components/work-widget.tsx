import Link from "next/link";
import { experiences, labels } from "@/content/profile";
import { CompanyBadge, Icon } from "./icons";
import { Text } from "./language-provider";

export function WorkWidget() {
  return (
    <aside className="work-widget" aria-labelledby="work-widget-title">
      <h2 id="work-widget-title">
        <Icon name="work" />
        <Text text={labels.work} />
      </h2>
      {experiences.map((job) => (
        <Link
          className="work-summary"
          key={job.id}
          href={`/experience/#${job.id}`}
        >
          <CompanyBadge company={job.id} />
          <div>
            <h3>{job.company}</h3>
            <Text as="p" text={job.role} />
          </div>
          <Text className="work-date" text={job.shortDates} />
        </Link>
      ))}
      <Link className="widget-link" href="/experience/">
        <Text text={labels.moreWork} />
      </Link>
    </aside>
  );
}
