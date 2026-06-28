import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "./Sparkle";

const features = [
  {
    title: "Custom Cart Logo / Wraps",
    desc: "Full branding with your event logo, wedding names, or company design.",
  },
  {
    title: "Branded Cups",
    desc: "Personalized cups that double as event keepsakes.",
  },
  {
    title: "Latte Art Printing",
    desc: "Print photos, logos, or messages directly onto drinks.",
  },
  {
    title: "Custom Menus",
    desc: "Tailored drink selections that match your event theme.",
  },
];

export default function CartExperience() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <Eyebrow>Your event, your vision</Eyebrow>
          <h2 className="mt-4 text-4xl lg:text-5xl text-navy">
            Create a Coffee Cart Experience Your Guests Won&apos;t Stop Talking About
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features */}
          <div className="space-y-2">
            {features.map((f, i) => (
              <div key={f.title} className="flex gap-5 p-5 rounded-xl hover:bg-white transition-colors">
                <span className="font-display text-2xl text-cobalt/40 font-bold leading-none pt-1 w-8 shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-xl text-navy mb-1">{f.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
            <div className="pt-6 pl-5">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-navy text-white font-display uppercase tracking-wide text-sm font-semibold hover:bg-navy-dark transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl order-first lg:order-last">
            <Image
              src="/images/cart-experience.jpg"
              alt="Custom-branded Friday Coffee Co. coffee cart wrap at a DFW event"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
