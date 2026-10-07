"use client";

import { useEffect, useState } from "react";
import { homeSections, labels } from "@/content/profile";
import { useLanguage } from "./language-provider";

export function TableOfContents() {
  const { translate } = useLanguage();
  const [active, setActive] = useState("introduction");
  useEffect(() => {
    let observer: IntersectionObserver;
    function observeSections() {
      observer?.disconnect();
      const headerHeight =
        document.querySelector(".site-header")?.getBoundingClientRect()
          .height ?? 72;
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting);
          if (visible.length) setActive(visible[0].target.id);
        },
        {
          rootMargin: `-${Math.ceil(headerHeight + 12)}px 0px -55% 0px`,
          threshold: 0,
        },
      );
      homeSections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });
    }
    observeSections();
    window.addEventListener("resize", observeSections);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", observeSections);
    };
  }, []);
  return (
    <aside className="section-navigation">
      <nav
        className="contents-navigation content-width"
        aria-label={translate(labels.contents)}
      >
        <h2>{translate(labels.contents)}</h2>
        {homeSections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={active === section.id ? "active" : undefined}
            aria-current={active === section.id ? "location" : undefined}
            onClick={() => setActive(section.id)}
          >
            <span className="section-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{translate(section.label)}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
