"use client";

import { useEffect, useState } from "react";
import { homeSections, labels } from "@/content/profile";
import { useLanguage } from "./language-provider";

export function TableOfContents() {
  const { translate } = useLanguage();
  const [active, setActive] = useState("introduction");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );
    homeSections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <aside className="contents-sidebar">
      <nav
        className="contents-navigation"
        aria-label={translate(labels.contents)}
      >
        <h2>{translate(labels.contents)}</h2>
        {homeSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={active === section.id ? "active" : undefined}
            aria-current={active === section.id ? "location" : undefined}
            onClick={() => setActive(section.id)}
          >
            {translate(section.label)}
          </a>
        ))}
      </nav>
    </aside>
  );
}
