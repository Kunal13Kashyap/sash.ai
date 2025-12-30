import planData from "@/utils/planData";

export default function PricingPage() {
  return (
    <div className="min-h-screen hero-bg noise text-white px-10 py-20">
      
      {/* HEADER */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Simple, transparent pricing
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Choose a plan that fits your interview preparation needs.
          Upgrade or cancel anytime.
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">
        {planData.map((plan, index) => (
          <div
            key={plan.title}
            className={`
              relative emerald-glass feature-hover
              rounded-3xl px-8 py-10 text-center
              transition-transform duration-300
              ${index === 1 ? "md:scale-105 md:-translate-y-3" : "md:scale-95"}
            `}
          >
            <h2 className="text-xl font-semibold mb-3">
              {plan.title}
            </h2>

            <p className="text-gray-300 text-sm mb-6">
              {plan.description}
            </p>

            <p className="text-4xl font-bold mb-6">
              {plan.price}
            </p>

            <ul className="text-sm text-gray-300 space-y-2 mb-8">
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>

            <button className="bg-emerald-400 text-black px-6 py-3 rounded-full font-medium hover:bg-emerald-300 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
