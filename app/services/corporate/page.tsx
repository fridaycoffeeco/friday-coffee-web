import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Eyebrow } from "@/components/Sparkle";

export const metadata: Metadata = {
  title: "Corporate Coffee Catering Dallas-Fort Worth",
  description:
    "Friday Coffee Co. provides corporate coffee catering for offices, conferences, and team events across Dallas-Fort Worth. Professional baristas and premium espresso.",
  keywords: [
    "corporate coffee catering Dallas",
    "office coffee catering DFW",
    "corporate espresso bar Fort Worth",
    "coffee catering corporate events Texas",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate Coffee Catering",
  provider: {
    "@type": "LocalBusiness",
    name: "Friday Coffee Co.",
    telephone: "+12143260622",
  },
  areaServed: "Dallas-Fort Worth, TX",
  description:
    "Professional corporate coffee catering for offices, conferences, product launches, and team events across Dallas-Fort Worth.",
};

const useCases = [
  { title: "Office Events", desc: "Monthly team meetings, milestone celebrations, and holiday parties." },
  { title: "Conferences & Summits", desc: "Keep attendees energized and impressed throughout the day." },
  { title: "Client Entertainment", desc: "Make a strong first impression with exceptional coffee service." },
  { title: "Product Launches", desc: "Add a premium touch to your launch event or media day." },
  { title: "Employee Appreciation", desc: "Show your team they matter with a specialty coffee pop-up." },
  { title: "Multi-Day Events", desc: "We're equipped for recurring or extended corporate engagements." },
];

export default function CorporatePage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow>Corporate Coffee Catering</Eyebrow>
              <h1 className="mt-4 text-4xl lg:text-6xl text-navy leading-[0.95] mb-6">
                Elevate Your Corporate Events With Premium Coffee
              </h1>
              <p className="text-muted text-lg leading-relaxed mb-8">
                From board meetings to company-wide celebrations, Friday Coffee
                Co. brings professional espresso service to your workplace.
                We&apos;ve partnered with leading DFW companies — including JP
                Morgan Chase, Guidestone Financial, and Kirkland &amp; Ellis — to
                create coffee experiences that impress clients and energize
                teams.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-navy text-white font-display uppercase tracking-wide text-sm font-semibold hover:bg-navy-dark transition-colors"
              >
                Get a Corporate Quote
              </Link>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/gallery-4.jpg"
                alt="Friday Coffee Co. barista serving espresso at a corporate event"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <Eyebrow>Where we shine</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl text-navy">
              We Cover Every Corporate Occasion
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-cream rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <h3 className="text-xl text-navy mb-2">{uc.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-navy text-white text-center">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-3xl lg:text-4xl mb-4">Plan Your Corporate Coffee Experience</h2>
          <p className="text-white/80 mb-8">
            We&apos;ll work with your team to customize the menu, branding, and
            logistics.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-navy font-display uppercase tracking-wide text-sm font-semibold hover:bg-cream transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
