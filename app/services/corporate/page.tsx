import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

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
  { title: "Multi-Day Events", desc: "We&apos;re equipped for recurring or extended corporate engagements." },
];

export default function CorporatePage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero */}
      <section className="bg-[#f8f6f1] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#1a4fd8] text-sm font-semibold tracking-widest uppercase mb-4">
                Corporate Coffee Catering
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-semibold text-[#111827] leading-tight mb-6">
                Elevate Your Corporate Events with Premium Coffee
              </h1>
              <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
                From board meetings to company-wide celebrations, Friday Coffee
                Co. brings professional espresso service to your workplace.
                We&apos;ve partnered with leading DFW companies — including JP
                Morgan Chase, Guidestone Financial, and Kirkland &amp; Ellis —
                to create coffee experiences that impress clients and energize
                teams.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#1a4fd8] text-white font-semibold text-sm hover:bg-[#1340b8] transition-colors"
              >
                Get a Corporate Quote
              </Link>
            </div>
            <div className="aspect-[4/5] rounded-3xl bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              Photo — corporate event coffee service
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-display font-semibold text-[#111827]">
              We Cover Every Corporate Occasion
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-[#f8f6f1] rounded-2xl p-6">
                <h3 className="font-semibold text-[#111827] mb-2">{uc.title}</h3>
                <p className="text-sm text-[#6b7280]" dangerouslySetInnerHTML={{ __html: uc.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8f6f1] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-display font-semibold text-[#111827] mb-4">
            Plan your corporate coffee experience
          </h2>
          <p className="text-[#6b7280] mb-8">
            We&apos;ll work with your team to customize the menu, branding, and logistics.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#1a4fd8] text-white font-semibold text-sm hover:bg-[#1340b8] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
