import React from 'react';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Real-time data access • 99.9% uptime
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Data APIs for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {" "}Modern Applications
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive real-time data through our high-performance APIs. 
            Choose from flexible subscription plans to power your applications with reliable, 
            fast, and accurate data streams.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button className="inline-flex items-center text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">50M+</div>
            <div className="text-slate-300">API Calls Daily</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-slate-300">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">&lt;100ms</div>
            <div className="text-slate-300">Average Response</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;