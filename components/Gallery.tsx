const placeholders = [
  { label: "Wedding setup — full cart" },
  { label: "Barista pulling espresso shot" },
  { label: "Custom branded cups" },
  { label: "Latte art pour" },
  { label: "Corporate event — guests ordering" },
  { label: "Brand activation — cart wrap" },
];

export default function Gallery() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#1a4fd8] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#111827]">
            Coffee Worth Remembering
          </h2>
          <p className="mt-4 text-[#6b7280] max-w-xl mx-auto">
            From intimate weddings to large-scale brand activations — every event gets the Friday Coffee Co. touch.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-gray-100 overflow-hidden flex items-center justify-center text-gray-400 text-xs text-center p-4 ${
                idx === 0 ? "aspect-[4/5] md:row-span-2" : "aspect-square"
              }`}
            >
              {/* Replace with real event photography */}
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
