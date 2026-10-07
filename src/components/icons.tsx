export type IconName =
  | "github"
  | "linkedin"
  | "mail"
  | "link"
  | "work"
  | "cv"
  | "education"
  | "award"
  | "code"
  | "music"
  | "home"
  | "person"
  | "chevron"
  | "skills"
  | "book"
  | "globe";

export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <use href={`#icon-${name}`} />
    </svg>
  );
}

export function IconDefinitions() {
  return (
    <svg
      className="icon-definitions"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <symbol id="icon-linkedin" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 10v7M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
          <circle cx="7" cy="7" r=".75" fill="currentColor" stroke="none" />
        </symbol>
        <symbol id="icon-book" viewBox="0 0 24 24">
          <path d="M12 5c-3-2-7-2-10-1v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1ZM12 5v15M5 8h4M5 11h4M15 8h4M15 11h4" />
        </symbol>
        <symbol id="icon-globe" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
          <path d="M3 12h18M5 6.5h14M5 17.5h14" />
        </symbol>
        <symbol id="icon-education" viewBox="0 0 24 24">
          <path d="m2 9 10-5 10 5-10 5-10-5ZM6 11v6c3 3 9 3 12 0v-6M22 9v7" />
        </symbol>
        <symbol id="icon-award" viewBox="0 0 24 24">
          <path d="M8 3h8v5a4 4 0 0 1-8 0V3ZM8 5H4v2a4 4 0 0 0 4 4M16 5h4v2a4 4 0 0 1-4 4M12 12v6M8 21h8M9 18h6v3H9z" />
        </symbol>
        <symbol id="icon-code" viewBox="0 0 24 24">
          <path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16" />
        </symbol>
        <symbol id="icon-music" viewBox="0 0 24 24">
          <path d="M9 18V5l12-2v13M9 8l12-2" />
          <ellipse cx="6" cy="18" rx="3" ry="3" />
          <ellipse cx="18" cy="16" rx="3" ry="3" />
        </symbol>
        <symbol id="icon-home" viewBox="0 0 24 24">
          <path d="m3 10 9-7 9 7v10H3V10ZM9 20v-7h6v7" />
        </symbol>
        <symbol id="icon-person" viewBox="0 0 24 24">
          <circle cx="12" cy="7" r="4" />
          <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
        </symbol>
        <symbol id="icon-chevron" viewBox="0 0 24 24">
          <path d="m6 9 6 6 6-6" />
        </symbol>
        <symbol id="icon-skills" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4m-5-13 3 3-3 3m6 0h4" />
        </symbol>
        <symbol id="icon-github" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            stroke="none"
            d="M12 .8a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.5v-2.1c-3.4.7-4.1-1.4-4.1-1.4-.5-1.3-1.2-1.6-1.2-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3c0 .3.2.6.8.5A11.3 11.3 0 0 0 12 .8Z"
          />
        </symbol>
        <symbol id="icon-mail" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 6 9 7 9-7" />
        </symbol>
        <symbol id="icon-link" viewBox="0 0 24 24">
          <path
            d="m10 13 4-4M8 15l-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 3 1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0"
            transform="translate(2 1)"
          />
        </symbol>
        <symbol id="icon-work" viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M8 7V4h8v3M3 12c5 3 13 3 18 0M12 12v4" />
        </symbol>
        <symbol id="icon-cv" viewBox="0 0 24 24">
          <rect x="3" y="2" width="18" height="20" rx="2" />
          <path d="M11 9c-4-2-6 4-2 6l2-.3M13 9l2 6 2-6" />
        </symbol>
      </defs>
    </svg>
  );
}
