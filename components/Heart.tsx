import Image from "next/image";
import { Eyebrow } from "./Sparkle";

export default function Heart() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 text-4xl lg:text-5xl text-navy mb-6">
              The Heart Behind Friday Coffee Co.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                We&apos;re Aya and Mustafa—a husband-and-wife team bringing
                specialty coffee and genuine hospitality to every event across
                Dallas and the DFW area.
              </p>
              <p>
                <span className="font-semibold text-ink">
                  Aya&apos;s been perfecting her craft for over 10 years.
                </span>{" "}
                What started as a hobby became a lifelong passion. When our son
                was born, we realized if we didn&apos;t start building something
                meaningful now, we never would. That&apos;s when Friday Coffee
                Co. was born.
              </p>
              <p>
                <span className="font-semibold text-ink">Why &ldquo;Friday&rdquo;?</span>{" "}
                Because Friday is the best day of the week—the feeling of good
                times ahead, celebration, and connection. That&apos;s exactly
                what we bring to your event.
              </p>
              <p>
                Since launching, we&apos;ve served{" "}
                <span className="font-semibold text-ink">75+ events</span>{" "}
                across Dallas and beyond, working with top brands and premier
                venues throughout the DFW metroplex.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] max-w-md mx-auto w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about-couple.jpg"
              alt="Aya and Mustafa, founders of Friday Coffee Co., at a DFW venue"
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
