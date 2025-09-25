import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Target, BarChart3, Shield, Zap, Users } from 'lucide-react'

function HomePage() {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning algorithms analyze thousands of data points to provide accurate match predictions"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      title: "Real-Time Odds",
      description: "Live odds from 50+ bookmakers with instant updates and historical tracking"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: "Advanced Analytics",
      description: "Deep statistical analysis including xG, team form, head-to-head records, and player stats"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Proven Track Record",
      description: "85%+ accuracy rate on our premium predictions with transparent performance tracking"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Live Updates",
      description: "Real-time match updates, live scores, and instant notifications for your favorite teams"
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      title: "Expert Community",
      description: "Join thousands of successful bettors sharing insights and strategies"
    }
  ]

  const sports = [
    "Football (Soccer)", "Basketball", "Tennis", "American Football", 
    "Baseball", "Hockey", "MMA/UFC", "Golf", "Esports", "Cricket"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            85%+ Prediction Accuracy • 50+ Sports Covered
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Sports
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {" "}Betting Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get access to AI-powered predictions, real-time odds, advanced analytics, and expert insights 
            across 50+ sports. Make smarter betting decisions with our proven data-driven approach.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/register"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/subscription"
              className="inline-flex items-center text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-slate-600 hover:border-slate-500"
            >
              View Pricing
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-300">Sports & Leagues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-slate-300">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
              <div className="text-slate-300">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Everything You Need to Win
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and data you need to make profitable betting decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:scale-105"
              >
                <div className="mb-4">
                  {feature.icon}
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

      {/* Sports Coverage */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Sports Coverage
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            We cover all major sports and leagues worldwide with detailed statistics, predictions, and odds analysis.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {sports.map((sport, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-center hover:border-blue-500/50 transition-colors"
              >
                <span className="text-slate-300 font-medium">{sport}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Winning?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of successful bettors who trust our predictions and analytics.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
          <p className="text-slate-400 mt-4">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}

export default HomePage