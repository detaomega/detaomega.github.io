import { pages, type PageName } from "@/content/profile";
import { Text } from "./language-provider";

export function PageIntro({ page }: { page: Exclude<PageName, "home"> }) {
  return (
    <section className="page-intro" aria-labelledby={`${page}-title`}>
      <Text as="h1" id={`${page}-title`} text={pages[page].heading} />
      <Text as="p" className="intro-text" text={pages[page].intro} />
    </section>
  );
}
