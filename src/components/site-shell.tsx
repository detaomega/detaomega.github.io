"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import {
  designReferences,
  labels,
  navigation,
  profile,
} from "@/content/profile";
import { IconDefinitions } from "./icons";
import { useLanguage } from "./language-provider";
import { TableOfContents } from "./table-of-contents";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { language, toggleLanguage, translate } = useLanguage();
  const route = pathname === "/" ? "/" : pathname.replace(/\/$/, "") + "/";
  const page = navigation.find((item) => item.href === route);
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <>
      <a className="skip-link" href="#main">
        {language === "en" ? "Skip to content" : "跳到主要內容"}
      </a>
      <IconDefinitions />
      <div className="site-shell" data-page={page?.id}>
        <header className="site-header">
          <div className="header-content content-width">
            <Link
              href="/"
              className="site-brand"
              aria-label="Ping-Yu Yang, home"
            >
              <span className="brand-mark" aria-hidden="true">
                {profile.initials}
              </span>
              <span>{profile.name}</span>
            </Link>
            <nav
              className="navigation"
              aria-label={language === "en" ? "Main navigation" : "主要導覽"}
            >
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={item.href === route ? "active" : undefined}
                  aria-current={item.href === route ? "page" : undefined}
                >
                  {translate(item.label)}
                </Link>
              ))}
            </nav>
            <button
              className="language-button"
              id="language-toggle"
              type="button"
              onClick={toggleLanguage}
              aria-label={
                language === "en"
                  ? "Switch to Traditional Chinese"
                  : "Switch to English"
              }
            >
              {language === "en" ? "繁中" : "EN"}
            </button>
          </div>
          {route === "/" && <TableOfContents />}
        </header>
        <div
          className={`page-layout content-width ${route === "/" ? "overview-layout" : "inner-layout"}`}
        >
          <main id="main">{children}</main>
        </div>
        <footer className="site-footer">
          <div className="content-width footer-content">
            <nav
              className="footer-navigation"
              aria-label={language === "en" ? "Footer navigation" : "頁尾導覽"}
            >
              {navigation.map((item) => (
                <Link key={item.id} href={item.href}>
                  {translate(item.label)}
                </Link>
              ))}
            </nav>
            <div className="footer-details">
              <p>
                © {year} {profile.name}
              </p>
              <p className="design-credits">
                {translate(labels.designReferences)}{" "}
                {designReferences.map((reference, index) => (
                  <span key={reference.url}>
                    {index > 0 && " · "}
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {reference.name}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
