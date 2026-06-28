import type { Metadata } from "next";
import FlashQuote from "@/components/FlashQuote";
import { Eyebrow } from "@/components/Sparkle";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a custom quote for Friday Coffee Co. coffee catering in Dallas-Fort Worth. Weddings, corporate events, and brand activations.",
};

export default function QuotePage() {
  return (
    <section className="py-20 lg:py-28 bg-cream min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-10">
          <Eyebrow>Let&apos;s get started</Eyebrow>
          <h1 className="mt-4 text-4xl lg:text-5xl text-navy mb-4">
            Request a Quote
          </h1>
          <p className="text-muted text-lg max-w-lg mx-auto leading-relaxed">
            Tell us about your event and we&apos;ll put together a custom
            proposal within 24 hours.
          </p>
        </div>

        <FlashQuote className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 min-h-[300px]" />

        <p className="mt-6 text-center text-sm text-muted">
          Prefer to reach us directly?{" "}
          <a href="tel:2143260622" className="text-cobalt font-medium hover:underline">
            (214) 326-0622
          </a>
        </p>
      </div>
    </section>
  );
}
