const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Fill out our quick quote form with your event details — date, location, guest count, and any special requests. We'll get back to you within 24 hours.",
  },
  {
    number: "02",
    title: "Customize Your Experience",
    description:
      "Work with us to design your perfect coffee menu, choose branding options, and finalize every detail — from cart wrap to latte art.",
  },
  {
    number: "03",
    title: "We Handle the Rest",
    description:
      "Show up and enjoy. Our expert baristas handle setup, service, and breakdown — leaving your guests with nothing but great coffee memories.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f6f1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#1a4fd8] text-sm font-semibold tracking-widest uppercase mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#111827]">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-[#1a4fd8]/20" />

          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-[#1a4fd8] text-white flex items-center justify-center mx-auto mb-5 text-lg font-bold font-display z-10 relative shadow-md">
                {step.number}
              </div>
              <h3 className="text-xl font-display font-semibold text-[#111827] mb-3">
                {step.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/quote"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#1a4fd8] text-white font-semibold text-sm hover:bg-[#1340b8] transition-colors"
          >
            Start Your Quote
          </a>
        </div>
      </div>
    </section>
  );
}
