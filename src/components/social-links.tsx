"use client";

import { profile, labels } from "@/content/profile";
import { Icon } from "./icons";
import { useLanguage } from "./language-provider";

export function SocialLinks({
  sidebar = false,
  buttons = false,
}: {
  sidebar?: boolean;
  buttons?: boolean;
}) {
  const { language, translate } = useLanguage();
  const cvLabel = translate(labels.downloadCV);
  const github = (
    <a
      href={profile.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub: detaomega"
      title="GitHub"
    >
      <Icon name="github" />
      {sidebar && <span>GitHub / detaomega</span>}
      {buttons && <span>GitHub</span>}
    </a>
  );
  const email = (
    <a
      href={`mailto:${profile.email}`}
      aria-label={
        language === "en" ? "Email Ping-Yu Yang" : "寄信給 Ping-Yu Yang"
      }
      title={language === "en" ? "Email" : "電子郵件"}
    >
      <Icon name="mail" />
      {sidebar && <span>{profile.email}</span>}
      {buttons && <span>{profile.email}</span>}
    </a>
  );
  const cv = (
    <a
      href={profile.cv}
      download="Ping-Yu-Yang-CV.pdf"
      aria-label={cvLabel}
      title={cvLabel}
    >
      <Icon name="cv" />
      {sidebar && <span>{cvLabel}</span>}
      {buttons && <span>{cvLabel}</span>}
    </a>
  );
  return (
    <div
      className={
        sidebar
          ? "sidebar-links"
          : buttons
            ? "social-links contact-buttons"
            : "social-links"
      }
      aria-label={language === "en" ? "Find me online" : "聯絡方式"}
    >
      {sidebar || buttons ? (
        <>
          {github}
          {email}
          {cv}
        </>
      ) : (
        <>
          {cv}
          {github}
          {email}
        </>
      )}
    </div>
  );
}
