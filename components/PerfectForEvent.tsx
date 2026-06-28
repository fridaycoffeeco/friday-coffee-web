import Link from "next/link";
import { Eyebrow } from "./Sparkle";

const categories = [
  {
    href: "/services/wedding",
    title: "Weddings & Events",
    blurb:
      "Make your special day unforgettable with handcrafted coffee that impresses guests and adds energy to your celebration.",
    perfectFor:
      "Weddings, Bridal Showers, Engagement Parties, Rehearsal Dinners, Anniversary Celebrations",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    href: "/services/corporate",
    title: "Corporate Events",
    blurb:
      "Elevate your next company event with premium coffee service that impresses clients and energizes your team.",
    perfectFor:
      "Conferences, Trade Shows, Office Events, Client Appreciation, Employee Recognition, Networking Events",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    href: "/services/brand-activation",
    title: "Private Parties & Brand Activations",
    blurb:
      "From product launches to grand openings and private celebrations, our mobile espresso bar creates buzz and unforgettable moments.",
    perfectFor:
      "Brand Launches, Grand Openings, Retail Activations, Birthday Parties, Baby Showers, Family Gatherings",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
];

export default function PerfectForEvent() {
  return (
    <section id="perfect-for-event" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <Eyebrow>Mobile coffee catering for every event</Eyebrow>
          <h2 className="mt-4 text-4xl lg:text-5xl text-navy">Perfect for Your Event</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.href}
              className="flex flex-col rounded-2xl border border-gray-100 bg-cream p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-xl bg-navy text-white flex items-center justify-center mb-6">
                {cat.icon}
              </div>
              <h3 className="text-2xl text-navy mb-3">{cat.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{cat.blurb}</p>
              <p className="text-sm text-ink mb-6">
                <span className="font-semibold">Perfect for: </span>
                {cat.perfectFor}
              </p>
              <Link
                href={cat.href}
                className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-navy text-white font-display uppercase tracking-wide text-xs font-semibold hover:bg-navy-dark transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
