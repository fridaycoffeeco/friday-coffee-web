import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/lib/faqs";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Eyebrow } from "@/components/Sparkle";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about Friday Coffee Co. coffee catering — booking, packages, service areas, dietary options, and more.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <section className="py-20 lg:py-28 bg-cream min-h-[70vh]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <Eyebrow>FAQs</Eyebrow>
            <h1 className="mt-4 text-4xl lg:text-5xl text-navy mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted text-lg max-w-lg mx-auto">
              Everything you need to know about booking Friday Coffee Co. for
              your event.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-white rounded-2xl border border-gray-100 px-6 py-5 group"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-ink">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-cobalt shrink-0 ml-4 transition-transform group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-navy text-white font-display uppercase tracking-wide text-sm font-semibold hover:bg-navy-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
