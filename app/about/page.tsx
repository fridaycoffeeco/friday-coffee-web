import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/Sparkle";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Aya and Mustafa — the husband-and-wife team behind Friday Coffee Co., Dallas-Fort Worth's premier mobile coffee catering service.",
};

const values = [
  {
    title: "Specialty Coffee Expertise",
    body: "Aya has spent over a decade mastering the craft of specialty coffee. Every drink — from a cortado to a lavender latte — is made to barista-competition standards.",
  },
  {
    title: "True Customization",
    body: "No two events are alike. We craft a custom menu, branded experience, and cart presentation that fits your event perfectly.",
  },
  {
    title: "Seamless Execution",
    body: "We handle everything — setup, service, and breakdown. Our team is professional, punctual, and passionate. Your only job is to enjoy.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow>Our Story</Eyebrow>
              <h1 className="mt-4 text-4xl lg:text-6xl text-navy leading-[0.95] mb-6">
                The Heart Behind Friday Coffee Co.
              </h1>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  We&apos;re Aya and Mustafa — a husband-and-wife team bringing
                  specialty coffee and genuine hospitality to every event across
                  Dallas and the DFW area.
                </p>
                <p>
                  <span className="font-semibold text-ink">
                    Aya&apos;s been perfecting her craft for over 10 years.
                  </span>{" "}
                  What started as a hobby became a lifelong passion. When our son
                  was born, we realized that if we didn&apos;t start building
                  something meaningful now, we never would. That&apos;s when
                  Friday Coffee Co. was born.
                </p>
                <p>
                  <span className="font-semibold text-ink">Why &ldquo;Friday&rdquo;?</span>{" "}
                  Because Friday is the best day of the week — the feeling of good
                  times ahead, celebration, and connection. That&apos;s exactly
                  what we bring to your event.
                </p>
                <p>
                  Since launching, we&apos;ve served{" "}
                  <span className="font-semibold text-ink">75+ events</span>{" "}
                  across Dallas and beyond, working with top brands and premier
                  venues throughout the DFW metroplex.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] max-w-md mx-auto w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-couple.jpg"
                alt="Aya and Mustafa, founders of Friday Coffee Co."
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <Eyebrow>What sets us apart</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl text-navy">
              Coffee Worth Remembering
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-cream rounded-2xl p-8">
                <div className="w-11 h-11 rounded-xl bg-navy text-white flex items-center justify-center mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
                <h3 className="text-xl text-navy mb-3">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-navy text-white text-center">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-3xl lg:text-4xl mb-4">Ready to Work Together?</h2>
          <p className="text-white/80 mb-8">
            We&apos;d love to be part of your next event. Get in touch and
            let&apos;s start planning.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-navy font-display uppercase tracking-wide text-sm font-semibold hover:bg-cream transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
