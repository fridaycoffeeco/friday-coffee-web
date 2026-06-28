import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocationBySlug } from "@/lib/locations";
import SchemaMarkup from "@/components/SchemaMarkup";

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

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Friday Coffee Co.",
    description: `Friday Coffee Co. provides mobile coffee catering in ${loc.name}, TX — custom espresso bars for weddings, corporate events, and brand activations.`,
    telephone: "+12143260622",
    email: "fridaycoffee.co@gmail.com",
    url: `https://www.fridaycoffee.co/locations/${loc.slug}`,
    areaServed: {
      "@type": "City",
      name: `${loc.name}, TX`,
    },
  };

  return (
    <>
      <SchemaMarkup schema={citySchema} />

      {/* Hero */}
      <section className="bg-[#f8f6f1] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#1a4fd8] text-sm font-semibold tracking-widest uppercase mb-4">
                {loc.county} · DFW
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-semibold text-[#111827] leading-tight mb-6">
                Coffee Cart Catering in {loc.name}, TX
              </h1>
              <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
                {loc.blurb}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1a4fd8] text-white font-semibold text-sm hover:bg-[#1340b8] transition-colors"
                >
                  Get a Quote for {loc.name}
                </Link>
                <a
                  href="tel:2143260622"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-[#1a4fd8] text-[#1a4fd8] font-semibold text-sm hover:bg-[#eef2ff] transition-colors"
                >
                  Call (214) 326-0622
                </a>
              </div>
            </div>
            <div className="aspect-square rounded-3xl bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              Photo — event in {loc.name}
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-display font-semibold text-[#111827] mb-10 text-center">
            Our Services in {loc.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/services/wedding", title: "Wedding Coffee Catering", desc: `Custom espresso bars for ${loc.name} weddings — latte art, branded cups, and unforgettable service.` },
              { href: "/services/corporate", title: "Corporate Coffee Catering", desc: `Professional coffee service for ${loc.name} offices, conferences, and corporate events.` },
              { href: "/services/brand-activation", title: "Brand Activation", desc: `Custom-branded coffee experiences for ${loc.name} marketing events and pop-ups.` },
            ].map((s) => (
              <div key={s.href} className="bg-[#f8f6f1] rounded-2xl p-6">
                <h3 className="font-semibold text-[#111827] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6b7280] mb-4">{s.desc}</p>
                <Link href={s.href} className="text-sm font-semibold text-[#1a4fd8] hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other locations */}
      <section className="py-16 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-xl font-display font-semibold text-[#111827] mb-6">
            Also Serving the DFW Metroplex
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {locations
              .filter((l) => l.slug !== loc.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="px-4 py-2 rounded-full border border-[#1a4fd8]/30 text-[#1a4fd8] text-sm hover:bg-[#1a4fd8] hover:text-white transition-colors"
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
