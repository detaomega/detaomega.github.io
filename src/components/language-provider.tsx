"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { navigation, type LocalizedString } from "@/content/profile";

type Language = "en" | "zh-Hant";
type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  translate: (text: LocalizedString) => string;
};
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const pathname = usePathname();

  useEffect(() => {
    try {
      if (localStorage.getItem("ping-yu-language") === "zh-Hant")
        setLanguage("zh-Hant");
    } catch {
      /* Preferences are optional. */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    const page = navigation.find(
      (item) =>
        item.href ===
        (pathname === "/" ? "/" : pathname.replace(/\/$/, "") + "/"),
    );
    if (!page) return;
    const frame = requestAnimationFrame(() => {
      document.title = language === "en" ? page.title.en : page.title.zh;
      const description = document.querySelector('meta[name="description"]');
      description?.setAttribute(
        "content",
        language === "en" ? page.description.en : page.description.zh,
      );
    });
    return () => cancelAnimationFrame(frame);
  }, [language, pathname]);

  function toggleLanguage() {
    const nextLanguage = language === "en" ? "zh-Hant" : "en";
    setLanguage(nextLanguage);
    try {
      localStorage.setItem("ping-yu-language", nextLanguage);
    } catch {
      /* Preferences are optional. */
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        translate: (value) => (language === "en" ? value.en : value.zh),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("Language components need LanguageProvider.");
  return context;
}

export function Text({
  text,
  as: Tag = "span",
  className,
  id,
}: {
  text: LocalizedString;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "li";
  className?: string;
  id?: string;
}) {
  const { translate } = useLanguage();
  return (
    <Tag className={className} id={id}>
      {translate(text)}
    </Tag>
  );
}
