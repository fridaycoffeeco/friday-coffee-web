const clients = [
  "JP Morgan Chase",
  "Champs Sports",
  "Boll & Branch",
  "Guidestone Financial",
  "Kirkland & Ellis",
];

const stats = [
  { value: "75+", label: "Events Served" },
  { value: "5★", label: "Avg. Rating" },
  { value: "9", label: "DFW Cities" },
  { value: "10+", label: "Years Expertise" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-display font-semibold text-[#1a4fd8] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#6b7280]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="text-center">
          <p className="text-xs text-[#6b7280] uppercase tracking-widest font-semibold mb-6">
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm font-semibold text-gray-400 hover:text-[#1a4fd8] transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
