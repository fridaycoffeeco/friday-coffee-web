import Link from "next/link";

const serviceLinks = [
  { href: "/services/wedding", label: "Wedding Coffee Catering" },
  { href: "/services/corporate", label: "Corporate Coffee Catering" },
  { href: "/services/brand-activation", label: "Brand Activation" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Get a Quote" },
];

const locationLinks = [
  { href: "/locations/plano", label: "Plano" },
  { href: "/locations/frisco", label: "Frisco" },
  { href: "/locations/mckinney", label: "McKinney" },
  { href: "/locations/allen", label: "Allen" },
  { href: "/locations/fort-worth", label: "Fort Worth" },
  { href: "/locations/arlington", label: "Arlington" },
  { href: "/locations/irving", label: "Irving" },
  { href: "/locations/southlake", label: "Southlake" },
  { href: "/locations/richardson", label: "Richardson" },
];

export default function Footer() {
  return (
    <footer>
      {/* CTA Banner */}
      <div className="bg-[#1a4fd8] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Ready to create an unforgettable experience?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s bring Friday Coffee Co. to your next event. Request a
            quote and we&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-[#1a4fd8] font-semibold text-sm hover:bg-blue-50 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Footer links */}
      <div className="bg-[#111827] text-gray-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="font-display text-xl font-semibold text-white block mb-3"
              >
                Friday Coffee Co.
              </Link>
              <p className="text-sm leading-relaxed mb-5">
                Custom espresso bars, expert baristas, and unforgettable coffee
                experiences across Dallas-Fort Worth.
              </p>
              <div className="flex items-center gap-1 text-sm">
                <svg className="w-4 h-4 text-[#1a4fd8] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:2143260622" className="hover:text-white transition-colors">
                  (214) 326-0622
                </a>
              </div>
              <div className="flex items-center gap-1 text-sm mt-2">
                <svg className="w-4 h-4 text-[#1a4fd8] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:fridaycoffee.co@gmail.com" className="hover:text-white transition-colors">
                  fridaycoffee.co@gmail.com
                </a>
              </div>
              {/* Socials */}
              <div className="flex items-center gap-3 mt-5">
                <a
                  href="https://www.instagram.com/fridaycoffee.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/fridaycoffeeco"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">DFW Locations</h3>
              <ul className="space-y-2.5">
                {locationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Friday Coffee Co. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
