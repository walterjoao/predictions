import React from 'react';
import { Database, Zap, Shield, BarChart3, Globe, Clock } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: "Sports Data API",
      description: "Live scores, odds, statistics, and historical data for 100+ sports worldwide",
      endpoints: "120+ endpoints"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      title: "Financial Markets",
      description: "Real-time stock prices, crypto data, forex rates, and market indicators",
      endpoints: "85+ endpoints"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Geographic Data",
      description: "Weather, location services, timezone data, and geographic information",
      endpoints: "60+ endpoints"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Real-time Updates",
      description: "WebSocket connections for instant data updates and live streaming",
      endpoints: "WebSocket support"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Enterprise Security",
      description: "API key authentication, rate limiting, and encrypted data transmission",
      endpoints: "Security first"
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-500" />,
      title: "Historical Data",
      description: "Access years of historical data with advanced filtering and analytics",
      endpoints: "Unlimited history"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Comprehensive API Suite
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Access multiple data sources through a single, unified API platform. 
            Choose the data you need with flexible subscription options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                {feature.icon}
                <span className="text-sm text-slate-400 font-mono">
                  {feature.endpoints}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;