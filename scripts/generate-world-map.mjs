import { readFile, writeFile } from "node:fs/promises";
import { geoNaturalEarth1, geoPath, geoCentroid } from "d3-geo";

// Natural Earth, public domain. Download these two datasets locally before regenerating.
const [coarsePath, detailedPath] = process.argv.slice(2);
if (!coarsePath || !detailedPath)
  throw new Error(
    "Usage: node scripts/generate-world-map.mjs 110m.geojson 50m.geojson",
  );
const coarse = JSON.parse(await readFile(coarsePath, "utf8"));
const detailed = JSON.parse(await readFile(detailedPath, "utf8"));
const projection = geoNaturalEarth1().fitExtent(
  [
    [12, 12],
    [948, 478],
  ],
  { type: "Sphere" },
);
const draw = geoPath(projection).digits(1);
const countryCode = (feature) => feature.properties.ISO_A2_EH;
const countries = coarse.features
  .filter(
    (feature) =>
      /^[A-Z]{2}$/.test(countryCode(feature)) && countryCode(feature) !== "AQ",
  )
  .map((feature) => ({
    code: countryCode(feature),
    name: feature.properties.ADMIN,
    path: draw(feature),
  }));
const available = new Set(countries.map(({ code }) => code));
const smallCountries = detailed.features
  .filter(
    (feature) =>
      /^[A-Z]{2}$/.test(countryCode(feature)) &&
      !available.has(countryCode(feature)) &&
      countryCode(feature) !== "AQ",
  )
  .map((feature) => {
    const [x, y] = projection(geoCentroid(feature));
    return {
      code: countryCode(feature),
      name: feature.properties.ADMIN,
      x: Math.round(x * 10) / 10,
      y: Math.round(y * 10) / 10,
    };
  });
await writeFile(
  new URL("../src/content/world-map.json", import.meta.url),
  JSON.stringify({ countries, smallCountries }) + "\n",
);
console.log(
  `Generated ${countries.length} country outlines and ${smallCountries.length} small-country markers.`,
);
