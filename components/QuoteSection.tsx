import FlashQuote from "./FlashQuote";
import { Eyebrow } from "./Sparkle";

export default function QuoteSection() {
  return (
    <section id="quote" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-10">
          <Eyebrow>Let&apos;s plan it</Eyebrow>
          <h2 className="mt-4 text-4xl lg:text-5xl text-navy mb-4">
            Book Friday Coffee for Your Next Event!
          </h2>
          <p className="text-muted leading-relaxed max-w-xl mx-auto">
            Let&apos;s make your celebration unforgettable. Whether it&apos;s a
            wedding, shower, corporate event, or party, we&apos;ll bring the
            espresso bar to you — serving Dallas and the surrounding areas.
          </p>
        </div>

        <FlashQuote className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 min-h-[300px]" />
      </div>
    </section>
  );
}
