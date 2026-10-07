import type { LocalizedString } from "./profile";

export type VisitedCountry = {
  /** ISO 3166-1 alpha-2, e.g. JP. One entry per country. */
  code: string;
  name: LocalizedString;
  visits: {
    year: number;
    places?: LocalizedString;
    note?: LocalizedString;
    articleSlug?: string;
  }[];
};

// Add only places you have actually visited. See WEBSITE.md for an example.
export const visitedCountries: VisitedCountry[] = [];

export const travelLabels = {
  map: { en: "Places on my map", zh: "我的旅行地圖" },
  visited: { en: "Visited", zh: "已到訪" },
  emptyTitle: { en: "Collecting the memories.", zh: "正在整理旅途中的回憶。" },
  emptyDescription: {
    en: "The map will fill with the places I've been and the stories that stayed with me.",
    zh: "把到訪的國家與年份整理好後，這張地圖就會慢慢亮起，也會留下每一段旅途的故事。",
  },
  countries: { en: "countries on the map", zh: "個到訪國家" },
  readStory: { en: "Read the story", zh: "閱讀旅行文章" },
};
