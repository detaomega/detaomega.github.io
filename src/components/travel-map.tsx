"use client";

import Link from "next/link";
import { useState } from "react";
import { travelLabels, type VisitedCountry } from "@/content/travel";
import world from "@/content/world-map.json";
import { Icon } from "./icons";
import { useLanguage } from "./language-provider";

export function TravelMap({ countries }: { countries: VisitedCountry[] }) {
  const { language, translate } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const visited = new Set(countries.map((country) => country.code));
  const countryName = (code: string) =>
    countries.find((country) => country.code === code)?.name;
  return (
    <section className="travel-content" aria-labelledby="travel-map-title">
      <div className="map-panel">
        <div className="map-heading">
          <h2 id="travel-map-title">{translate(travelLabels.map)}</h2>
          {countries.length > 0 && (
            <p>
              <strong>{countries.length}</strong>{" "}
              {translate(travelLabels.countries)}
            </p>
          )}
        </div>
        <svg
          className="world-map"
          viewBox="0 0 960 490"
          role="img"
          aria-labelledby="world-map-title world-map-description"
        >
          <title id="world-map-title">{translate(travelLabels.map)}</title>
          <desc id="world-map-description">
            {countries.length
              ? countries.map((country) => translate(country.name)).join(", ")
              : translate(travelLabels.emptyDescription)}
          </desc>
          {world.countries.map((country) => (
            <path
              key={country.code}
              d={country.path}
              className={`${visited.has(country.code) ? "visited" : ""} ${selected === country.code ? "selected" : ""}`}
            >
              <title>
                {countryName(country.code)
                  ? translate(countryName(country.code)!)
                  : country.name}
              </title>
            </path>
          ))}
          {world.smallCountries
            .filter((country) => visited.has(country.code))
            .map((country) => (
              <circle
                key={country.code}
                cx={country.x}
                cy={country.y}
                r={4}
                className={`visited ${selected === country.code ? "selected" : ""}`}
              >
                <title>{translate(countryName(country.code)!)}</title>
              </circle>
            ))}
        </svg>
        <div className="map-legend">
          <span aria-hidden="true" />
          {translate(travelLabels.visited)}
        </div>
      </div>
      {countries.length ? (
        <div className="country-grid">
          {countries.map((country) => (
            <article
              className={`country-card ${selected === country.code ? "selected" : ""}`}
              key={country.code}
            >
              <button
                className="country-heading"
                type="button"
                aria-pressed={selected === country.code}
                aria-label={`${language === "en" ? "Highlight on map:" : "在地圖上標示："} ${translate(country.name)}`}
                onClick={() =>
                  setSelected(selected === country.code ? null : country.code)
                }
              >
                <span className="country-code" aria-hidden="true">
                  {country.code}
                </span>
                <h3>{translate(country.name)}</h3>
                <Icon name="globe" />
              </button>
              {country.visits.map((visit, index) => (
                <div className="country-visit" key={`${visit.year}-${index}`}>
                  <time dateTime={String(visit.year)}>{visit.year}</time>
                  {visit.places && (
                    <p className="visit-places">{translate(visit.places)}</p>
                  )}
                  {visit.note && <p>{translate(visit.note)}</p>}
                  {visit.articleSlug && (
                    <Link
                      className="section-link"
                      href={`/blog/${visit.articleSlug}/`}
                    >
                      {translate(travelLabels.readStory)} →
                    </Link>
                  )}
                </div>
              ))}
            </article>
          ))}
        </div>
      ) : (
        <div className="travel-empty">
          <Icon name="globe" />
          <div>
            <h2>{translate(travelLabels.emptyTitle)}</h2>
            <p>{translate(travelLabels.emptyDescription)}</p>
          </div>
        </div>
      )}
    </section>
  );
}
