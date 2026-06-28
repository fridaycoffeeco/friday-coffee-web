import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#f8f6f1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="inline-block text-[#1a4fd8] text-sm font-semibold tracking-widest uppercase mb-4">
              Dallas-Fort Worth Coffee Catering
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-[#111827] leading-tight mb-6">
              Unforgettable Coffee for Your Most Important Moments
            </h1>
            <p className="text-lg text-[#6b7280] leading-relaxed mb-8 max-w-lg">
              Custom espresso bars, expert baristas, and stunning latte art for
              weddings, corporate events, and brand activations across the DFW
              metroplex.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1a4fd8] text-white font-semibold text-sm hover:bg-[#1340b8] transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-[#1a4fd8] text-[#1a4fd8] font-semibold text-sm hover:bg-[#eef2ff] transition-colors"
              >
                View Services
              </Link>
            </div>

            {/* Social proof pill */}
            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-[#1a4fd8] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#6b7280]">
                <span className="font-semibold text-[#111827]">75+ events</span>{" "}
                served across Dallas-Fort Worth
              </p>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gray-200 overflow-hidden shadow-2xl flex items-end justify-center">
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                {/* Replace with real hero photo */}
                <span className="text-center px-4">
                  Hero photo — barista crafting latte art
                </span>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#eef2ff] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1a4fd8]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#111827]">5-star rated</p>
                <p className="text-xs text-[#6b7280]">across DFW events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
