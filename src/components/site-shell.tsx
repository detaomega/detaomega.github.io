"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { navigation, profile } from "@/content/profile";
import { IconDefinitions } from "./icons";
import { useLanguage } from "./language-provider";

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
        </header>
        <main className="content-width" id="main">
          <Link
            className="avatar"
            href="/"
            aria-label={
              language === "en" ? "Ping-Yu Yang, home" : "Ping-Yu Yang，首頁"
            }
          >
            <Image
              src={profile.photo}
              alt="Ping-Yu Yang"
              width={460}
              height={460}
            />
          </Link>
          {children}
        </main>
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
