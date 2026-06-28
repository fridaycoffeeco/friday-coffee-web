import Link from "next/link";
import Image from "next/image";
import Sparkle from "./Sparkle";

export default function Hero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {/* ambient sparkle texture */}
      <Sparkle className="hidden lg:block absolute top-16 left-[46%] w-5 h-5 text-white/10" />
      <Sparkle className="hidden lg:block absolute bottom-24 left-[40%] w-3 h-3 text-white/10" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 font-display uppercase tracking-[0.2em] text-xs font-semibold text-white/70 mb-5">
              <Sparkle className="w-3 h-3" />
              Serving Dallas, Fort Worth &amp; Beyond
            </span>
            <h1 className="font-display uppercase font-bold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl mb-6">
              Dallas Coffee Cart <span className="text-white/90">&amp;</span> Coffee Catering
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-lg mb-8 font-light">
              Custom coffee carts, expert baristas, and unforgettable
              experiences for weddings, corporate events, and private
              celebrations in Dallas &amp; Fort Worth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-navy font-display uppercase tracking-wide text-sm font-semibold hover:bg-cream transition-colors"
              >
                Get Your Custom Quote
              </Link>
              <Link
                href="#perfect-for-event"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-white/30 text-white font-display uppercase tracking-wide text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                See What We Do
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-8 text-white/70 text-sm">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.952-5.463 3.952-9.827A8.25 8.25 0 006 11.5c0 4.364 2.007 7.748 3.953 9.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Proudly serving the entire DFW metroplex
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/hero-cart.webp"
                alt="Friday Coffee Co. barista crafting drinks at a branded espresso cart at a Dallas event"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
