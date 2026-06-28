import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "./Sparkle";

const included = [
  {
    title: "Premium Specialty Coffee",
    desc: "Fresh beans, expertly brewed.",
  },
  {
    title: "Full Espresso Bar Menu",
    desc: "Lattes, cappuccinos, cortados & more.",
  },
  {
    title: "Alternative Drinks",
    desc: "Chai, tea, and hot chocolate for non-coffee lovers.",
  },
  {
    title: "Syrups & Alternative Milks",
    desc: "Oat, almond, and more.",
  },
  {
    title: "Custom Branding Available",
    desc: "Cart wraps, branded cups, latte art printing, custom menus.",
  },
  {
    title: "Unlimited Drinks & Pro Baristas",
    desc: "Your guests enjoy as much as they want, with expert service.",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="relative py-20 lg:py-28 bg-navy text-white overflow-hidden">
      {/* background image, dimmed */}
      <Image
        src="/images/gallery-5.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative max-w-6xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="mt-4 text-4xl lg:text-5xl">
            What&apos;s Included With Every Friday Coffee Co. Event
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-7 mb-12">
          {included.map((item) => (
            <div key={item.title} className="flex gap-4">
              <svg className="w-6 h-6 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg text-white normal-case font-display tracking-normal">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-display uppercase tracking-wide text-white/80 text-lg mb-6">
            Everything you need for an unforgettable coffee catering experience
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-navy font-display uppercase tracking-wide text-sm font-semibold hover:bg-cream transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
