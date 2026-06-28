"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/services/wedding", label: "Wedding" },
  { href: "/services/corporate", label: "Corporate" },
  { href: "/services/brand-activation", label: "Brand Activation" },
  { href: "/locations/plano", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-semibold text-[#1a4fd8] tracking-tight"
        >
          Friday Coffee Co.
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#111827] hover:text-[#1a4fd8] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/quote"
            className="inline-flex items-center px-5 py-2 rounded-full bg-[#1a4fd8] text-white text-sm font-semibold hover:bg-[#1340b8] transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-[#111827] hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#111827] hover:text-[#1a4fd8] transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#1a4fd8] text-white text-sm font-semibold hover:bg-[#1340b8] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
