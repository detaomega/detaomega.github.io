"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { navigation, profile } from "@/content/profile";
import { Icon, IconDefinitions, type IconName } from "./icons";
import { useLanguage } from "./language-provider";
import { TableOfContents } from "./table-of-contents";

const navigationIcons: Record<string, IconName> = {
  home: "home",
  about: "person",
  projects: "code",
  experience: "work",
};

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
              <span>Ping-Yu</span> Yang
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
                  <Icon name={navigationIcons[item.id]} />
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
        </header>
        <div
          className={`page-layout content-width ${route === "/" ? "overview-layout" : "inner-layout"}`}
        >
          {route === "/" && <TableOfContents />}
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
            <p>
              © {year} {profile.name}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
