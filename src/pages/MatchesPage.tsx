import React, { useState } from 'react'
import { Calendar, Clock, MapPin, Users, TrendingUp, Filter } from 'lucide-react'

function MatchesPage() {
  const [selectedTab, setSelectedTab] = useState('today')
  const [selectedSport, setSelectedSport] = useState('all')

  const matches = [
    {
      id: 1,
      time: '15:00',
      homeTeam: 'Manchester City',
      awayTeam: 'Arsenal',
      league: 'Premier League',
      venue: 'Etihad Stadium',
      status: 'upcoming',
      homeOdds: '1.85',
      drawOdds: '3.40',
      awayOdds: '4.20',
      prediction: 'Man City Win',
      confidence: 78
    },
    {
      id: 2,
      time: '17:30',
      homeTeam: 'Barcelona',
      awayTeam: 'Real Madrid',
      league: 'La Liga',
      venue: 'Camp Nou',
      status: 'live',
      score: '1-0',
      minute: '67\'',
      homeOdds: '2.10',
      drawOdds: '3.20',
      awayOdds: '3.50',
      prediction: 'Over 2.5 Goals',
      confidence: 85
    },
    {
      id: 3,
      time: '20:00',
      homeTeam: 'Bayern Munich',
      awayTeam: 'Borussia Dortmund',
      league: 'Bundesliga',
      venue: 'Allianz Arena',
      status: 'upcoming',
      homeOdds: '1.65',
      drawOdds: '3.80',
      awayOdds: '5.20',
      prediction: 'Both Teams Score',
      confidence: 82
    },
    {
      id: 4,
      time: '14:30',
      homeTeam: 'Liverpool',
      awayTeam: 'Chelsea',
      league: 'Premier League',
      venue: 'Anfield',
      status: 'finished',
      score: '2-1',
      homeOdds: '1.95',
      drawOdds: '3.30',
      awayOdds: '3.80',
      prediction: 'Liverpool Win',
      confidence: 71,
      result: 'won'
    }
  ]

  const sports = ['all', 'football', 'basketball', 'tennis', 'american-football']
  const tabs = [
    { id: 'today', label: 'Today' },
    { id: 'tomorrow', label: 'Tomorrow' },
    { id: 'week', label: 'This Week' },
    { id: 'finished', label: 'Finished' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-red-500/20 text-red-400'
      case 'upcoming': return 'bg-blue-500/20 text-blue-400'
      case 'finished': return 'bg-gray-500/20 text-gray-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getResultColor = (result?: string) => {
    switch (result) {
      case 'won': return 'text-green-400'
      case 'lost': return 'text-red-400'
      default: return 'text-slate-300'
    }
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Matches</h1>
          <p className="text-slate-400">
            Live scores, upcoming fixtures, and match predictions across all sports.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-slate-400" />
              <select
                value={selectedSport}
                onChange={(e) => setSelectedSport(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Sports</option>
                <option value="football">Football</option>
                <option value="basketball">Basketball</option>
                <option value="tennis">Tennis</option>
                <option value="american-football">American Football</option>
              </select>
            </div>
          </div>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {matches.map((match) => (
            <div key={match.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
              {/* Match Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(match.status)}`}>
                    {match.status === 'live' ? `LIVE ${match.minute}` : match.status.toUpperCase()}
                  </span>
                  <span className="text-slate-400 text-sm">{match.league}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{match.time}</span>
                </div>
              </div>

              {/* Teams and Score */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {match.homeTeam.charAt(0)}
                      </span>
                    </div>
                    <span className="text-white font-medium">{match.homeTeam}</span>
                  </div>
                  {match.score && (
                    <span className="text-2xl font-bold text-white">
                      {match.score.split('-')[0]}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {match.awayTeam.charAt(0)}
                      </span>
                    </div>
                    <span className="text-white font-medium">{match.awayTeam}</span>
                  </div>
                  {match.score && (
                    <span className="text-2xl font-bold text-white">
                      {match.score.split('-')[1]}
                    </span>
                  )}
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-center space-x-2 text-slate-400 text-sm mb-4">
                <MapPin className="h-4 w-4" />
                <span>{match.venue}</span>
              </div>

              {/* Odds */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-slate-700 rounded-lg p-3 text-center">
                  <div className="text-xs text-slate-400 mb-1">Home</div>
                  <div className="text-white font-bold">{match.homeOdds}</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-3 text-center">
                  <div className="text-xs text-slate-400 mb-1">Draw</div>
                  <div className="text-white font-bold">{match.drawOdds}</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-3 text-center">
                  <div className="text-xs text-slate-400 mb-1">Away</div>
                  <div className="text-white font-bold">{match.awayOdds}</div>
                </div>
              </div>

              {/* Prediction */}
              <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-blue-400" />
                  <span className={`font-medium ${getResultColor(match.result)}`}>
                    {match.prediction}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400 text-sm">
                    {match.confidence}% confidence
                  </span>
                  {match.result && (
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      match.result === 'won' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {match.result.toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Load More Matches
          </button>
        </div>
      </div>
    </div>
  )
}

export default MatchesPage