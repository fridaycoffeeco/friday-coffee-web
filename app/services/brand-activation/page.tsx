import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Brand Activation Coffee Catering Dallas-Fort Worth",
  description:
    "Friday Coffee Co. creates immersive brand activation experiences with custom coffee carts, branded cups, and logo latte art for DFW marketing events.",
  keywords: [
    "brand activation coffee catering Dallas",
    "custom branded coffee cart DFW",
    "marketing event coffee service Texas",
    "experiential marketing coffee bar",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Brand Activation Coffee Catering",
  provider: {
    "@type": "LocalBusiness",
    name: "Friday Coffee Co.",
    telephone: "+12143260622",
  },
  areaServed: "Dallas-Fort Worth, TX",
  description:
    "Immersive brand activation coffee experiences with custom cart wraps, branded cups, and latte art for marketing events in Dallas-Fort Worth.",
};

const features = [
  {
    title: "Custom Cart Wraps",
    desc: "Transform our coffee cart into a branded centerpiece. Full-coverage logo wraps turn every photo into brand exposure.",
  },
  {
    title: "Branded Cups",
    desc: "Guests take home a keepsake — your logo on every cup. Perfect for events, pop-ups, and launch parties.",
  },
  {
    title: "Latte Art Printing",
    desc: "Print your logo, mascot, or campaign image directly onto foam. A guaranteed crowd-stopper and social media moment.",
  },
  {
    title: "Custom Drink Menu",
    desc: "Name drinks after your products, campaigns, or brand values. We build the menu around your narrative.",
  },
];

export default function BrandActivationPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero */}
      <section className="bg-[#f8f6f1] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#1a4fd8] text-sm font-semibold tracking-widest uppercase mb-4">
                Brand Activation
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-semibold text-[#111827] leading-tight mb-6">
                Make Your Brand the Talk of the Event
              </h1>
              <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
                A Friday Coffee Co. brand activation turns coffee into a
                marketing moment. From logo-wrapped carts to custom latte art,
                we create immersive experiences that drive engagement, generate
                social content, and make your brand unforgettable. Trusted by
                brands like Champs Sports and Boll &amp; Branch.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#1a4fd8] text-white font-semibold text-sm hover:bg-[#1340b8] transition-colors"
              >
                Plan Your Activation
              </Link>
            </div>
            <div className="aspect-[4/5] rounded-3xl bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              Photo — branded cart at brand activation event
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-display font-semibold text-[#111827]">
              Brand-First Coffee Experiences
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-5 bg-[#f8f6f1] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[#eef2ff] flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#1a4fd8]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1">{f.title}</h3>
                  <p className="text-sm text-[#6b7280]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8f6f1] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-display font-semibold text-[#111827] mb-4">
            Ready to activate your brand?
          </h2>
          <p className="text-[#6b7280] mb-8">
            Tell us about your campaign and we&apos;ll design a coffee experience around your brand.
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
