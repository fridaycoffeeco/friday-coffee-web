export type Location = {
  slug: string;
  name: string;
  county: string;
  blurb: string;
};

export const locations: Location[] = [
  {
    slug: "allen",
    name: "Allen",
    county: "Collin County",
    blurb:
      "Allen is one of DFW's fastest-growing communities, known for its corporate campuses, upscale events, and family celebrations. Friday Coffee Co. brings specialty espresso right to your Allen venue — whether it's a wedding at a local estate or a corporate team event.",
  },
  {
    slug: "mckinney",
    name: "McKinney",
    county: "Collin County",
    blurb:
      "With its charming historic downtown and booming event scene, McKinney is one of our favorite places to set up a coffee cart. From weddings in restored venues to outdoor brand activations, we've got McKinney covered.",
  },
  {
    slug: "plano",
    name: "Plano",
    county: "Collin County",
    blurb:
      "Home to Fortune 500 headquarters and a thriving event culture, Plano is a prime market for corporate coffee catering. Friday Coffee Co. serves Plano businesses, campuses, and private events with a seamless espresso bar experience.",
  },
  {
    slug: "frisco",
    name: "Frisco",
    county: "Collin County",
    blurb:
      "Frisco's explosive growth has made it one of the most exciting event markets in Texas. Our coffee cart fits right in at Frisco's luxury wedding venues, sports events, and high-profile corporate gatherings.",
  },
  {
    slug: "richardson",
    name: "Richardson",
    county: "Dallas County",
    blurb:
      "Richardson's Telecom Corridor and diverse community make it a hub for tech industry events and multicultural celebrations. We're proud to serve Richardson with custom espresso menus that fit any occasion.",
  },
  {
    slug: "southlake",
    name: "Southlake",
    county: "Tarrant County",
    blurb:
      "Southlake is synonymous with elegance — and so is a Friday Coffee Co. espresso bar. We regularly serve Southlake's upscale weddings, galas, and executive retreats with premium specialty coffee and flawless presentation.",
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    county: "Tarrant County",
    blurb:
      "From Sundance Square events to West Side weddings, Fort Worth's rich culture and vibrant event scene is a natural fit for Friday Coffee Co. We bring specialty coffee to the heart of Cowtown with the craft and care it deserves.",
  },
  {
    slug: "irving",
    name: "Irving",
    county: "Dallas County",
    blurb:
      "Irving's Las Colinas district is one of DFW's premier corporate event destinations. We partner with Irving event planners and companies to elevate conferences, product launches, and team celebrations with exceptional coffee service.",
  },
  {
    slug: "arlington",
    name: "Arlington",
    county: "Tarrant County",
    blurb:
      "With world-class sports venues and a growing event scene, Arlington is always buzzing. Friday Coffee Co. brings the specialty coffee experience to Arlington's sports sponsorships, corporate events, and social gatherings.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
