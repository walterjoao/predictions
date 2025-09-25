import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (plan: string) => void;
}

function Pricing({ onSelectPlan }: PricingProps) {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small projects and testing",
      features: [
        "10,000 API calls/month",
        "Basic sports data",
        "Standard support",
        "Email notifications",
        "API documentation access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      description: "Ideal for growing applications",
      features: [
        "100,000 API calls/month",
        "All sports data + Financial markets",
        "Priority support",
        "WebSocket access",
        "Advanced analytics",
        "Custom rate limits"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      description: "For high-volume applications",
      features: [
        "1,000,000 API calls/month",
        "All data sources",
        "24/7 dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "White-label options",
        "Historical data access"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Flexible subscription options to match your needs. All plans include 
            a 14-day free trial with full access to our APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-800 border rounded-xl p-8 hover:scale-105 transition-all ${
                plan.popular 
                  ? 'border-blue-500 ring-2 ring-blue-500/20' 
                  : 'border-slate-700 hover:border-blue-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-2">/month</span>
                </div>
                <p className="text-slate-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                Start Free Trial
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            Need a custom plan? We offer enterprise solutions with unlimited calls and custom integrations.
          </p>
          <button className="text-blue-400 hover:text-blue-300 font-semibold">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;