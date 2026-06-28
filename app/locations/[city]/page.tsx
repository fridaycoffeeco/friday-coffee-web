import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { locations, getLocationBySlug } from "@/lib/locations";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Eyebrow } from "@/components/Sparkle";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocationBySlug(city);
  if (!loc) return {};
  return {
    title: `Coffee Cart Catering in ${loc.name}, TX`,
    description: `Friday Coffee Co. provides custom espresso bars and coffee catering in ${loc.name}, TX. Weddings, corporate events, and brand activations. Call (214) 326-0622.`,
    keywords: [
      `coffee catering ${loc.name}`,
      `coffee cart ${loc.name} TX`,
      `espresso bar ${loc.name}`,
      `wedding coffee ${loc.name} Texas`,
      `corporate coffee catering ${loc.name}`,
    ],
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const loc = getLocationBySlug(city);
  if (!loc) notFound();

  // Rotate through the real event photos so each city has a distinct image.
  const idx = locations.findIndex((l) => l.slug === loc.slug);
  const heroImage = `/images/gallery-${(idx % 8) + 1}.jpg`;

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Friday Coffee Co.",
    description: `Friday Coffee Co. provides mobile coffee catering in ${loc.name}, TX — custom espresso bars for weddings, corporate events, and brand activations.`,
    telephone: "+12143260622",
    email: "fridaycoffee.co@gmail.com",
    url: `https://www.fridaycoffee.co/locations/${loc.slug}`,
    areaServed: { "@type": "City", name: `${loc.name}, TX` },
  };

  return (
    <>
      <SchemaMarkup schema={citySchema} />

      {/* Hero */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow>{loc.county} · DFW</Eyebrow>
              <h1 className="mt-4 text-4xl lg:text-6xl text-navy leading-[0.95] mb-6">
                Coffee Cart Catering in {loc.name}, TX
              </h1>
              <p className="text-muted text-lg leading-relaxed mb-8">{loc.blurb}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-navy text-white font-display uppercase tracking-wide text-sm font-semibold hover:bg-navy-dark transition-colors"
                >
                  Get a Quote for {loc.name}
                </Link>
                <a
                  href="tel:2143260622"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-navy/30 text-navy font-display uppercase tracking-wide text-sm font-semibold hover:bg-navy/5 transition-colors"
                >
                  Call (214) 326-0622
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={heroImage}
                alt={`Friday Coffee Co. mobile espresso bar serving an event in ${loc.name}, TX`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <Eyebrow>What we offer</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl text-navy">
              Our Services in {loc.name}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/services/wedding", title: "Wedding Coffee Catering", desc: `Custom espresso bars for ${loc.name} weddings — latte art, branded cups, and unforgettable service.` },
              { href: "/services/corporate", title: "Corporate Coffee Catering", desc: `Professional coffee service for ${loc.name} offices, conferences, and corporate events.` },
              { href: "/services/brand-activation", title: "Brand Activation", desc: `Custom-branded coffee experiences for ${loc.name} marketing events and pop-ups.` },
            ].map((s) => (
              <div key={s.href} className="bg-cream rounded-2xl p-7">
                <h3 className="text-xl text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">{s.desc}</p>
                <Link href={s.href} className="text-sm font-semibold text-cobalt hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other locations */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl text-navy mb-8">
            Also Serving the DFW Metroplex
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {locations
              .filter((l) => l.slug !== loc.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="px-5 py-2.5 rounded-full border border-navy/20 text-navy text-sm font-medium hover:bg-navy hover:text-white transition-colors"
                >
                  {l.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
