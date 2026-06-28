import Link from "next/link";
import { locations } from "@/lib/locations";

export default function LocationsGrid() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#1a4fd8] text-sm font-semibold tracking-widest uppercase mb-3">
            Where We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#111827] mb-4">
            Coffee Catering Across Dallas-Fort Worth
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto">
            Friday Coffee Co. serves events throughout the DFW metroplex. Select
            your city to learn more about our local availability.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1a4fd8]/30 bg-[#eef2ff] text-[#1a4fd8] text-sm font-medium hover:bg-[#1a4fd8] hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.952-5.463 3.952-9.827A8.25 8.25 0 006 11.5c0 4.364 2.007 7.748 3.953 9.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {loc.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
