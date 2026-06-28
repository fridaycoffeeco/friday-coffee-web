import Image from "next/image";
import { Eyebrow } from "./Sparkle";

const clients = [
  { src: "/images/logo-champs.png", alt: "Champs Sports" },
  { src: "/images/logo-jpmc.png", alt: "JPMorgan Chase & Co." },
  { src: "/images/logo-kirkland.png", alt: "Kirkland & Ellis" },
  { src: "/images/logo-bollbranch.png", alt: "Boll & Branch" },
  { src: "/images/logo-guidestone.png", alt: "GuideStone" },
];

export default function TrustedBy() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
        <Eyebrow>Trusted partners</Eyebrow>
        <h2 className="mt-4 text-3xl lg:text-4xl text-navy mb-14 max-w-3xl mx-auto">
          Coffee Catering Trusted by the Best Venues, Schools and Companies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.src} className="relative h-14 w-full max-w-[170px] opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src={client.src}
                alt={client.alt}
                fill
                sizes="170px"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <p className="mt-14 font-display uppercase tracking-[0.15em] text-sm font-semibold text-navy">
          Proudly serving Dallas, Fort Worth, and the entire DFW metroplex
        </p>
      </div>
    </section>
  );
}
