import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Eyebrow } from "@/components/Sparkle";

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
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow>Brand Activation</Eyebrow>
              <h1 className="mt-4 text-4xl lg:text-6xl text-navy leading-[0.95] mb-6">
                Make Your Brand the Talk of the Event
              </h1>
              <p className="text-muted text-lg leading-relaxed mb-8">
                A Friday Coffee Co. brand activation turns coffee into a
                marketing moment. From logo-wrapped carts to custom latte art, we
                create immersive experiences that drive engagement, generate
                social content, and make your brand unforgettable. Trusted by
                brands like Champs Sports and Boll &amp; Branch.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-navy text-white font-display uppercase tracking-wide text-sm font-semibold hover:bg-navy-dark transition-colors"
              >
                Plan Your Activation
              </Link>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/gallery-8.jpg"
                alt="Custom-branded Friday Coffee Co. cart at a Boll & Branch brand activation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <Eyebrow>How we activate</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl text-navy">
              Brand-First Coffee Experiences
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((f, i) => (
              <div key={f.title} className="flex gap-5 bg-cream rounded-2xl p-7">
                <span className="font-display text-2xl text-cobalt/40 font-bold leading-none pt-1 w-8 shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-xl text-navy mb-1">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-navy text-white text-center">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-3xl lg:text-4xl mb-4">Ready to Activate Your Brand?</h2>
          <p className="text-white/80 mb-8">
            Tell us about your campaign and we&apos;ll design a coffee experience
            around your brand.
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
