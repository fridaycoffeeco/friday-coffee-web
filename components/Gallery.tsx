import Image from "next/image";
import { Eyebrow } from "./Sparkle";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Bride and groom holding branded Friday Coffee cups at a Dallas wedding" },
  { src: "/images/gallery-2.jpg", alt: "Guest holding a branded Friday Coffee Co. cup" },
  { src: "/images/gallery-3.jpg", alt: "Bride and groom toasting espresso at a wedding coffee cart" },
  { src: "/images/gallery-4.jpg", alt: "Friday Coffee barista preparing drinks at the espresso bar" },
  { src: "/images/gallery-5.jpg", alt: "Close-up of fresh specialty coffee beans and branded cups" },
  { src: "/images/gallery-6.jpg", alt: "Couple at a floral-wall Friday Coffee cart setup" },
  { src: "/images/gallery-7.jpg", alt: "Iced and hot specialty drinks with custom Friday Coffee labels" },
  { src: "/images/gallery-8.jpg", alt: "Branded coffee cart at a Boll & Branch brand activation" },
];

export default function Gallery() {
  return (
    <section className="py-20 lg:py-28 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <Eyebrow>Our work</Eyebrow>
          <h2 className="mt-4 text-4xl lg:text-5xl">
            An Elegant Coffee Cart Catering Experience
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
