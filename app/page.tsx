import Hero from "@/components/Hero";
import PerfectForEvent from "@/components/PerfectForEvent";
import CartExperience from "@/components/CartExperience";
import WhatsIncluded from "@/components/WhatsIncluded";
import Gallery from "@/components/Gallery";
import TrustedBy from "@/components/TrustedBy";
import Reviews from "@/components/Reviews";
import Heart from "@/components/Heart";
import QuoteSection from "@/components/QuoteSection";
import DallasBlurb from "@/components/DallasBlurb";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />
      <Hero />
      <PerfectForEvent />
      <CartExperience />
      <WhatsIncluded />
      <Gallery />
      <TrustedBy />
      <Reviews />
      <Heart />
      <QuoteSection />
      <DallasBlurb />
    </>
  );
}
