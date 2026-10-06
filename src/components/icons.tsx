export type IconName = "github" | "mail" | "link" | "work" | "cv";

export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="icon" aria-hidden="true">
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

export function CompanyBadge({
  company,
}: {
  company: "tsmc" | "microsoft" | "logitech";
}) {
  return (
    <span className={`company-badge ${company}-badge`} aria-hidden="true">
      {company === "microsoft" ? (
        <>
          <i />
          <i />
          <i />
          <i />
        </>
      ) : company === "tsmc" ? (
        "TSMC"
      ) : (
        "logi"
      )}
    </span>
  );
}
