import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Sparkle";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Friday Coffee Co. for coffee catering inquiries in Dallas-Fort Worth. Call, email, or request a quote online.",
};

export default function ContactPage() {
  return (
    <section className="py-20 lg:py-28 bg-cream min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <Eyebrow>Get in Touch</Eyebrow>
          <h1 className="mt-4 text-4xl lg:text-5xl text-navy mb-4">Contact Us</h1>
          <p className="text-muted text-lg max-w-lg mx-auto">
            We&apos;d love to hear about your event. Reach out and we&apos;ll
            respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact info */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-7">
            <div>
              <h2 className="text-xl text-navy mb-5">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-cobalt" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">Phone</p>
                    <a href="tel:2143260622" className="text-ink font-medium hover:text-cobalt transition-colors">
                      (214) 326-0622
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-cobalt" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">Email</p>
                    <a href="mailto:fridaycoffee.co@gmail.com" className="text-ink font-medium hover:text-cobalt transition-colors">
                      fridaycoffee.co@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-cobalt" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">Service Area</p>
                    <p className="text-ink font-medium">Dallas-Fort Worth Metroplex</p>
                    <p className="text-sm text-muted">Allen · McKinney · Plano · Frisco · Richardson · Southlake · Fort Worth · Irving · Arlington</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">Follow Us</p>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/fridaycoffee.co" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cobalt transition-colors text-sm font-medium">
                  Instagram
                </a>
                <a href="https://www.facebook.com/fridaycoffeeco" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cobalt transition-colors text-sm font-medium">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Quote CTA */}
          <div className="bg-navy rounded-2xl p-8 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-3xl mb-4">Ready to Book Your Event?</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                The fastest way to get started is through our online quote
                request. Tell us about your event and we&apos;ll send a detailed
                proposal within 24 hours.
              </p>
            </div>
            <div className="space-y-3">
              <Link
                href="/quote"
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg bg-white text-navy font-display uppercase tracking-wide text-sm font-semibold hover:bg-cream transition-colors"
              >
                Request a Quote Online
              </Link>
              <a
                href="tel:2143260622"
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg border border-white/30 text-white font-display uppercase tracking-wide text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Call (214) 326-0622
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
