import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import LocationsGrid from "@/components/LocationsGrid";
import FaqTeaser from "@/components/FaqTeaser";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <LocationsGrid />
      <FaqTeaser />
    </>
  );
}
