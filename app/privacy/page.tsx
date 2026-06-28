import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Friday Coffee Co. — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <h1 className="text-4xl lg:text-5xl text-navy mb-3">Privacy Policy</h1>
        <p className="text-sm text-muted mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-muted leading-relaxed [&_h2]:text-navy [&_h2]:text-2xl [&_h2]:mb-3 [&_p]:mb-3">
          <div>
            <h2>Overview</h2>
            <p>
              Friday Coffee Co. (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your
              privacy. This policy explains what information we collect through
              our website and how we use it. By using this site you agree to the
              practices described here.
            </p>
          </div>
          <div>
            <h2>Information We Collect</h2>
            <p>
              When you request a quote or contact us, we collect the details you
              provide — such as your name, email, phone number, and event
              information. We may also collect basic analytics data (pages
              visited, device type) to improve the site.
            </p>
          </div>
          <div>
            <h2>How We Use Your Information</h2>
            <p>
              We use your information solely to respond to inquiries, prepare
              quotes, coordinate your event, and improve our services. We do not
              sell your personal information.
            </p>
          </div>
          <div>
            <h2>Third-Party Services</h2>
            <p>
              Our quote form is powered by Flash Quotes and our reviews are
              displayed via Trustindex. These services may process information
              you submit in accordance with their own privacy policies.
            </p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>
              Questions about this policy? Email us at{" "}
              <a href="mailto:fridaycoffee.co@gmail.com" className="text-cobalt hover:underline">
                fridaycoffee.co@gmail.com
              </a>{" "}
              or call (214) 326-0622.
            </p>
          </div>

          <p className="text-sm italic">
            This is a general template and should be reviewed by a qualified
            professional before launch to ensure it meets your legal obligations.
          </p>
        </div>
      </div>
    </section>
  );
}
