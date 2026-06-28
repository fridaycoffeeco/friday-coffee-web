"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { locations } from "@/lib/locations";

const services = [
  { href: "/services/wedding", label: "Wedding Coffee Catering" },
  { href: "/services/corporate", label: "Corporate Coffee Catering" },
  { href: "/services/brand-activation", label: "Brand Activation Coffee Catering" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileLocations, setMobileLocations] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-20 lg:h-32">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="Friday Coffee Co."
            width={260}
            height={260}
            className="h-16 lg:h-24 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 font-display uppercase text-base tracking-wide font-medium text-navy">
          <Link href="/" className="hover:text-cobalt transition-colors">
            Home
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-cobalt transition-colors uppercase">
              Services
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="bg-white shadow-xl rounded-xl border border-gray-100 py-2 w-72">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-5 py-2.5 text-navy hover:bg-cream hover:text-cobalt transition-colors normal-case"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Locations dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-cobalt transition-colors uppercase">
              Locations
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="bg-white shadow-xl rounded-xl border border-gray-100 py-2 w-48">
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    className="block px-5 py-2 text-navy hover:bg-cream hover:text-cobalt transition-colors"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-cobalt transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-cobalt transition-colors">
            Contact Us
          </Link>
          <Link href="/faqs" className="hover:text-cobalt transition-colors">
            FAQs
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/quote"
          className="hidden lg:inline-flex items-center px-10 py-5 rounded-xl bg-navy text-white font-display uppercase text-lg tracking-wide font-semibold hover:bg-navy-dark transition-colors"
        >
          Get a Quote
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-navy"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-5 py-4 flex flex-col gap-1 font-display uppercase text-sm tracking-wide text-navy">
          <Link href="/" onClick={() => setOpen(false)} className="py-2.5">Home</Link>

          <button
            onClick={() => setMobileServices(!mobileServices)}
            className="flex items-center justify-between py-2.5 uppercase"
          >
            Services
            <svg className={`w-4 h-4 transition-transform ${mobileServices ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {mobileServices && (
            <div className="pl-4 flex flex-col gap-1 pb-2">
              {services.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="py-2 normal-case text-muted">
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() => setMobileLocations(!mobileLocations)}
            className="flex items-center justify-between py-2.5 uppercase"
          >
            Locations
            <svg className={`w-4 h-4 transition-transform ${mobileLocations ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {mobileLocations && (
            <div className="pl-4 grid grid-cols-2 gap-1 pb-2">
              {locations.map((l) => (
                <Link key={l.slug} href={`/locations/${l.slug}`} onClick={() => setOpen(false)} className="py-2 text-muted">
                  {l.name}
                </Link>
              ))}
            </div>
          )}

          <Link href="/about" onClick={() => setOpen(false)} className="py-2.5">About Us</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="py-2.5">Contact Us</Link>
          <Link href="/faqs" onClick={() => setOpen(false)} className="py-2.5">FAQs</Link>
          <Link
            href="/quote"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-navy text-white uppercase font-semibold tracking-wide"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
