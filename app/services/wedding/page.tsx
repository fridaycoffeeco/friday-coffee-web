import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Eyebrow } from "@/components/Sparkle";

export const metadata: Metadata = {
  title: "Wedding Coffee Catering Dallas-Fort Worth",
  description:
    "Friday Coffee Co. provides custom wedding espresso bars with professional baristas, branded cups, and stunning latte art for DFW weddings. Get a quote today.",
  keywords: [
    "wedding coffee catering Dallas",
    "wedding espresso bar DFW",
    "wedding coffee bar Fort Worth",
    "mobile coffee cart wedding Texas",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wedding Coffee Catering",
  provider: {
    "@type": "LocalBusiness",
    name: "Friday Coffee Co.",
    telephone: "+12143260622",
  },
  areaServed: "Dallas-Fort Worth, TX",
  description:
    "Custom wedding espresso bars with professional baristas, branded cups, latte art, and full espresso menus for DFW weddings.",
};

const includes = [
  "Professional barista staff",
  "Custom coffee cart setup",
  "Full espresso menu (lattes, cappuccinos, cortados, americanos)",
  "Chai, tea & hot chocolate alternatives",
  "Dairy, oat & almond milk options",
  "Setup and breakdown handled by our team",
];

const addOns = [
  "Custom cart logo wrap",
  "Branded cups (event keepsakes)",
  "Latte art printing with your monogram",
  "Second barista for faster service",
  "Iced drink station",
  "Custom signature drink menu",
];

export default function WeddingPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow>Wedding Coffee Catering</Eyebrow>
              <h1 className="mt-4 text-4xl lg:text-6xl text-navy leading-[0.95] mb-6">
                The Perfect Cup for Your Perfect Day
              </h1>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Your wedding day deserves every detail to be exceptional. Friday
                Coffee Co. brings a custom espresso bar to your venue — complete
                with professional baristas, latte art, and branded touches that
                make your coffee station as beautiful as the rest of your
                celebration.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-navy text-white font-display uppercase tracking-wide text-sm font-semibold hover:bg-navy-dark transition-colors"
              >
                Get a Wedding Quote
              </Link>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/gallery-3.jpg"
                alt="Bride and groom toasting espresso at a Friday Coffee Co. wedding cart"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Includes / Add-ons */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl lg:text-3xl text-navy mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <svg className="w-5 h-5 text-cobalt shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl text-navy mb-6">Popular Add-Ons</h2>
              <ul className="space-y-3">
                {addOns.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <svg className="w-5 h-5 text-cobalt shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-navy text-white text-center">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-3xl lg:text-4xl mb-4">Book Your Wedding Coffee Bar</h2>
          <p className="text-white/80 mb-8">
            Dates fill up fast — especially during wedding season. Request a
            quote to check your date.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-navy font-display uppercase tracking-wide text-sm font-semibold hover:bg-cream transition-colors"
            >
              Get a Quote
            </Link>
            <a
              href="tel:2143260622"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-white/30 text-white font-display uppercase tracking-wide text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Call (214) 326-0622
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
