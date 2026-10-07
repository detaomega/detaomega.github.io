import { organizations, pages, profile } from "@/content/profile";

// Stable IDs connect the profile, external accounts, and future blog bylines.
export const personId = `${profile.siteUrl}/#person`;
export const websiteId = `${profile.siteUrl}/#website`;

export const personSchema = {
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  alternateName: "detaomega",
  url: `${profile.siteUrl}/`,
  image: `${profile.siteUrl}${profile.photo}`,
  description: pages.about.description.en,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "Software Engineering",
    "Semantic Communication",
    "Deep Learning",
    "Wireless Communication",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: organizations.nycu.name,
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: organizations.ntu.name,
  },
  mainEntityOfPage: `${profile.siteUrl}/about/`,
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  name: profile.name,
  url: `${profile.siteUrl}/`,
  inLanguage: ["en", "zh-Hant"],
  author: { "@id": personId },
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${profile.siteUrl}/about/#profile`,
  url: `${profile.siteUrl}/about/`,
  name: pages.about.title.en,
  isPartOf: { "@id": websiteId },
  mainEntity: personSchema,
};
