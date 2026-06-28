import Link from "next/link";
import { faqs } from "@/lib/faqs";

export default function FaqTeaser() {
  const preview = faqs.slice(0, 3);

  return (
    <section className="py-20 lg:py-24 bg-[#f8f6f1]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#1a4fd8] text-sm font-semibold tracking-widest uppercase mb-3">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#111827]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {preview.map((faq) => (
            <details
              key={faq.question}
              className="bg-white rounded-2xl border border-gray-100 px-6 py-5 group"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-[#111827] text-sm">
                {faq.question}
                <svg
                  className="w-5 h-5 text-[#1a4fd8] shrink-0 ml-4 transition-transform group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-[#6b7280] leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 text-[#1a4fd8] font-semibold text-sm hover:underline"
          >
            See all FAQs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
