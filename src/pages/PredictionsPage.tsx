import React, { useState } from 'react'
import { Target, TrendingUp, Brain, Star, Filter, Calendar } from 'lucide-react'

function PredictionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedConfidence, setSelectedConfidence] = useState('all')

  const predictions = [
    {
      id: 1,
      match: 'Manchester City vs Arsenal',
      league: 'Premier League',
      time: '15:00',
      prediction: 'Manchester City Win',
      odds: '1.85',
      confidence: 89,
      category: 'match-result',
      reasoning: 'Man City has won 8 of their last 10 home games against Arsenal. Strong attacking form with 2.8 goals per game average.',
      keyStats: ['Home advantage', 'Recent form', 'Head-to-head record'],
      aiScore: 94
    },
    {
      id: 2,
      match: 'Barcelona vs Real Madrid',
      league: 'La Liga',
      time: '20:00',
      prediction: 'Over 2.5 Goals',
      odds: '1.72',
      confidence: 85,
      category: 'goals',
      reasoning: 'Both teams average over 2.5 goals in El Clasico matches. High-scoring recent encounters.',
      keyStats: ['Goals per game', 'Historical data', 'Attacking strength'],
      aiScore: 91
    },
    {
      id: 3,
      match: 'Liverpool vs Chelsea',
      league: 'Premier League',
      time: '17:30',
      prediction: 'Both Teams to Score',
      odds: '1.65',
      confidence: 82,
      category: 'btts',
      reasoning: 'Both teams have scored in 7 of their last 8 meetings. Strong attacking units on both sides.',
      keyStats: ['BTTS frequency', 'Defensive records', 'Recent meetings'],
      aiScore: 88
    },
    {
      id: 4,
      match: 'Bayern Munich vs Dortmund',
      league: 'Bundesliga',
      time: '18:30',
      prediction: 'Bayern Munich -1.5 Handicap',
      odds: '2.10',
      confidence: 76,
      category: 'handicap',
      reasoning: 'Bayern has superior squad depth and home advantage. Dortmund struggling with injuries.',
      keyStats: ['Squad strength', 'Injury list', 'Home record'],
      aiScore: 85
    }
  ]

  const categories = [
    { id: 'all', label: 'All Predictions' },
    { id: 'match-result', label: 'Match Result' },
    { id: 'goals', label: 'Goals' },
    { id: 'btts', label: 'Both Teams Score' },
    { id: 'handicap', label: 'Handicap' }
  ]

  const confidenceLevels = [
    { id: 'all', label: 'All Confidence' },
    { id: 'high', label: '80%+ (High)' },
    { id: 'medium', label: '60-79% (Medium)' },
    { id: 'low', label: '40-59% (Low)' }
  ]

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-400 bg-green-500/20'
    if (confidence >= 60) return 'text-yellow-400 bg-yellow-500/20'
    return 'text-red-400 bg-red-500/20'
  }

  const getAiScoreColor = (score: number) => {
    if (score >= 90) return 'text-purple-400'
    if (score >= 80) return 'text-blue-400'
    return 'text-slate-400'
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">AI Predictions</h1>
          <p className="text-slate-400">
            Advanced machine learning predictions with detailed analysis and reasoning.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Target className="h-6 w-6 text-blue-500" />
              <span className="text-2xl font-bold text-white">127</span>
            </div>
            <p className="text-slate-400 text-sm">Predictions Today</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <span className="text-2xl font-bold text-white">87%</span>
            </div>
            <p className="text-slate-400 text-sm">Success Rate</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Brain className="h-6 w-6 text-purple-500" />
              <span className="text-2xl font-bold text-white">94</span>
            </div>
            <p className="text-slate-400 text-sm">AI Confidence</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Star className="h-6 w-6 text-yellow-500" />
              <span className="text-2xl font-bold text-white">23</span>
            </div>
            <p className="text-slate-400 text-sm">Premium Tips</p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-slate-400" />
            <select
              value={selectedConfidence}
              onChange={(e) => setSelectedConfidence(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
            >
              {confidenceLevels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Predictions List */}
        <div className="space-y-6">
          {predictions.map((prediction) => (
            <div key={prediction.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <span className="text-slate-400 text-sm">{prediction.time}</span>
                  </div>
                  <span className="text-slate-400 text-sm">{prediction.league}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getConfidenceColor(prediction.confidence)}`}>
                    {prediction.confidence}% Confidence
                  </div>
                  <div className="flex items-center space-x-1">
                    <Brain className={`h-4 w-4 ${getAiScoreColor(prediction.aiScore)}`} />
                    <span className={`text-sm font-medium ${getAiScoreColor(prediction.aiScore)}`}>
                      AI: {prediction.aiScore}
                    </span>
                  </div>
                </div>
              </div>

              {/* Match and Prediction */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{prediction.match}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg px-4 py-2">
                      <span className="text-blue-400 font-semibold">{prediction.prediction}</span>
                    </div>
                    <div className="text-slate-300">
                      <span className="text-sm">Odds: </span>
                      <span className="font-bold text-green-400">@{prediction.odds}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Reasoning */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-300 mb-2 flex items-center">
                  <Brain className="h-4 w-4 mr-2 text-purple-400" />
                  AI Analysis
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">{prediction.reasoning}</p>
              </div>

              {/* Key Stats */}
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Factors</h4>
                <div className="flex flex-wrap gap-2">
                  {prediction.keyStats.map((stat, index) => (
                    <span
                      key={index}
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Load More Predictions
          </button>
        </div>
      </div>
    </div>
  )
}

export default PredictionsPage