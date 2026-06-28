import { Eyebrow } from "./Sparkle";
import TrustReviews from "./TrustReviews";

export default function Reviews() {
  return (
    <section className="py-20 lg:py-28 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow>Reviews</Eyebrow>
          <h2 className="mt-4 text-4xl lg:text-5xl">
            Real Reviews From Our Coffee Cart &amp; Espresso Bar Events
          </h2>
        </div>

        {/* Live Trustindex widget (aggregated Google reviews) on a light card for contrast */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          <TrustReviews />
        </div>
      </div>
    </section>
  );
}
