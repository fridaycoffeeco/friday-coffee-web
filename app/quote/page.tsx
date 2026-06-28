import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a custom quote for Friday Coffee Co. coffee catering in Dallas-Fort Worth. Weddings, corporate events, and brand activations.",
};

export default function QuotePage() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f6f1] min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#1a4fd8] text-sm font-semibold tracking-widest uppercase mb-3">
            Let&apos;s Get Started
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-[#111827] mb-4">
            Request a Quote
          </h1>
          <p className="text-[#6b7280] text-lg max-w-lg mx-auto">
            Tell us about your event and we&apos;ll put together a custom
            proposal within 24 hours.
          </p>
        </div>

        {/* Flash Quotes embed */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <Script
            src="https://app.flashquotes.com/embed.js"
            strategy="afterInteractive"
            data-form-id="cma1x9evw002bowcyvmz4auia"
          />
        </div>

        <p className="mt-6 text-center text-sm text-[#6b7280]">
          Prefer to reach us directly?{" "}
          <a
            href="tel:2143260622"
            className="text-[#1a4fd8] font-medium hover:underline"
          >
            (214) 326-0622
          </a>
        </p>
      </div>
    </section>
  );
}
