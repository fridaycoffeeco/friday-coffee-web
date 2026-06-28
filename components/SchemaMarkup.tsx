type SchemaProps = {
  schema: Record<string, unknown>;
};

export default function SchemaMarkup({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Friday Coffee Co.",
  description:
    "Friday Coffee Co. provides custom espresso bars, expert baristas, and unforgettable coffee experiences for weddings, corporate events, and brand activations across Dallas-Fort Worth.",
  url: "https://www.fridaycoffee.co",
  telephone: "+12143260622",
  email: "fridaycoffee.co@gmail.com",
  areaServed: [
    "Allen, TX",
    "McKinney, TX",
    "Plano, TX",
    "Frisco, TX",
    "Richardson, TX",
    "Southlake, TX",
    "Fort Worth, TX",
    "Irving, TX",
    "Arlington, TX",
    "Dallas, TX",
  ],
  sameAs: [
    "https://www.instagram.com/fridaycoffee.co",
    "https://www.facebook.com/fridaycoffeeco",
  ],
  priceRange: "$$",
  serviceType: [
    "Wedding Coffee Catering",
    "Corporate Coffee Catering",
    "Brand Activation Coffee Catering",
    "Mobile Espresso Bar",
  ],
};
