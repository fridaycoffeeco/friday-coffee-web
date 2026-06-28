import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Aya and Mustafa — the husband-and-wife team behind Friday Coffee Co., Dallas-Fort Worth's premier mobile coffee catering service.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#f8f6f1] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#1a4fd8] text-sm font-semibold tracking-widest uppercase mb-4">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-semibold text-[#111827] leading-tight mb-6">
                Built on a Love of Great Coffee
              </h1>
              <p className="text-[#6b7280] text-lg leading-relaxed mb-5">
                Friday Coffee Co. was founded by Aya and Mustafa — a
                husband-and-wife team who believe that great coffee makes every
                occasion more memorable. Aya brings over 10 years of specialty
                coffee expertise to every event, ensuring that each cup is
                crafted with precision and care.
              </p>
              <p className="text-[#6b7280] leading-relaxed mb-5">
                What started as a passion for connecting people over exceptional
                coffee has grown into Dallas-Fort Worth&apos;s most trusted
                mobile coffee catering service. We&apos;ve served 75+ events
                across the metroplex — from intimate weddings to large-scale
                corporate gatherings — and we bring the same attention to detail
                to every single one.
              </p>
              <p className="text-[#6b7280] leading-relaxed">
                Our name says it all: Friday is the best day of the week, and
                every great event deserves that Friday feeling. We&apos;re here
                to bring that energy to your moments.
              </p>
            </div>

            {/* Photo placeholder */}
            <div className="aspect-square rounded-3xl bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              Photo — Aya & Mustafa at an event
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#111827]">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Specialty Coffee Expertise",
                body: "Aya has spent over a decade mastering the craft of specialty coffee. Every drink we serve — from a cortado to a lavender latte — is made to barista competition standards.",
              },
              {
                title: "True Customization",
                body: "No two events are alike. We work with you to craft a custom menu, branded experience, and cart presentation that fits your event perfectly.",
              },
              {
                title: "Seamless Execution",
                body: "We handle everything — setup, service, and breakdown. Our team is professional, punctual, and passionate. Your only job is to enjoy.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-[#f8f6f1] rounded-2xl p-8">
                <div className="w-10 h-10 rounded-full bg-[#eef2ff] flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#1a4fd8]" />
                </div>
                <h3 className="font-display font-semibold text-lg text-[#111827] mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8f6f1] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-display font-semibold text-[#111827] mb-4">
            Ready to work together?
          </h2>
          <p className="text-[#6b7280] mb-8">
            We&apos;d love to be part of your next event. Get in touch and let&apos;s start planning.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#1a4fd8] text-white font-semibold text-sm hover:bg-[#1340b8] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
