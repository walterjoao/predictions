import React from 'react'
import { TrendingUp, Target, BarChart3, Calendar, Trophy, AlertCircle } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

function DashboardPage() {
  const { user, subscription } = useAuth()

  const stats = [
    { label: 'Predictions This Month', value: '127', change: '+23%', color: 'text-blue-400' },
    { label: 'Success Rate', value: '87%', change: '+5%', color: 'text-green-400' },
    { label: 'Profit This Month', value: '+$2,340', change: '+18%', color: 'text-purple-400' },
    { label: 'Active Bets', value: '12', change: '+3', color: 'text-yellow-400' }
  ]

  const recentPredictions = [
    { match: 'Man City vs Arsenal', prediction: 'Over 2.5 Goals', confidence: 89, status: 'won', odds: '1.85' },
    { match: 'Barcelona vs Real Madrid', prediction: 'Barcelona Win', confidence: 76, status: 'pending', odds: '2.10' },
    { match: 'Liverpool vs Chelsea', prediction: 'Both Teams Score', confidence: 82, status: 'won', odds: '1.72' },
    { match: 'PSG vs Bayern Munich', prediction: 'Under 3.5 Goals', confidence: 71, status: 'lost', odds: '1.95' }
  ]

  const upcomingMatches = [
    { time: '15:00', teams: 'Manchester United vs Tottenham', league: 'Premier League', prediction: 'Man Utd Win' },
    { time: '17:30', teams: 'Inter Milan vs AC Milan', league: 'Serie A', prediction: 'Over 2.5 Goals' },
    { time: '20:00', teams: 'Borussia Dortmund vs RB Leipzig', league: 'Bundesliga', prediction: 'Both Teams Score' }
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user?.user_metadata?.full_name || 'User'}!
          </h1>
          <p className="text-slate-400">
            Here's your betting performance overview for today.
          </p>
          {subscription && (
            <div className="mt-4 inline-flex items-center bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
              <Trophy className="h-4 w-4 mr-2" />
              {subscription.plan_type.charAt(0).toUpperCase() + subscription.plan_type.slice(1)} Plan Active
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-slate-400 text-sm font-medium">{stat.label}</h3>
                <TrendingUp className={`h-4 w-4 ${stat.color}`} />
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className={`text-sm ${stat.color}`}>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Predictions */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <Target className="h-5 w-5 mr-2 text-blue-500" />
                Recent Predictions
              </h3>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentPredictions.map((prediction, index) => (
                <div key={index} className="p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">{prediction.match}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      prediction.status === 'won' ? 'bg-green-500/20 text-green-400' :
                      prediction.status === 'lost' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {prediction.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">{prediction.prediction}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400">Confidence: {prediction.confidence}%</span>
                      <span className="text-blue-400">@{prediction.odds}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Matches */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-green-500" />
                Today's Matches
              </h3>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View Schedule
              </button>
            </div>
            <div className="space-y-4">
              {upcomingMatches.map((match, index) => (
                <div key={index} className="p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-400 font-mono text-sm">{match.time}</span>
                      <span className="text-white font-medium">{match.teams}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">{match.league}</span>
                    <span className="text-green-400 font-medium">Tip: {match.prediction}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6">
            <BarChart3 className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">View Analytics</h3>
            <p className="text-slate-300 text-sm mb-4">
              Deep dive into your betting performance with detailed analytics and insights.
            </p>
            <button className="text-blue-400 hover:text-blue-300 font-medium text-sm">
              Open Analytics →
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6">
            <Target className="h-8 w-8 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">New Predictions</h3>
            <p className="text-slate-300 text-sm mb-4">
              Check out the latest AI-powered predictions for today's matches.
            </p>
            <button className="text-green-400 hover:text-green-300 font-medium text-sm">
              View Predictions →
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-6">
            <AlertCircle className="h-8 w-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Live Alerts</h3>
            <p className="text-slate-300 text-sm mb-4">
              Set up custom alerts for odds changes, match updates, and more.
            </p>
            <button className="text-purple-400 hover:text-purple-300 font-medium text-sm">
              Manage Alerts →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage