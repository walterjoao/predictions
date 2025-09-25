import React, { useState } from 'react'
import { Trophy, Users, Calendar, TrendingUp, Filter, Search } from 'lucide-react'

function LeaguesPage() {
  const [selectedSport, setSelectedSport] = useState('football')
  const [searchTerm, setSearchTerm] = useState('')

  const leagues = [
    {
      id: 1,
      name: 'Premier League',
      country: 'England',
      sport: 'football',
      logo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      teams: 20,
      matches: 380,
      season: '2024/25',
      status: 'active',
      topScorer: 'Erling Haaland (23 goals)',
      leader: 'Manchester City',
      avgGoals: 2.8,
      predictions: 127
    },
    {
      id: 2,
      name: 'La Liga',
      country: 'Spain',
      sport: 'football',
      logo: '🇪🇸',
      teams: 20,
      matches: 380,
      season: '2024/25',
      status: 'active',
      topScorer: 'Robert Lewandowski (19 goals)',
      leader: 'Real Madrid',
      avgGoals: 2.6,
      predictions: 98
    },
    {
      id: 3,
      name: 'Bundesliga',
      country: 'Germany',
      sport: 'football',
      logo: '🇩🇪',
      teams: 18,
      matches: 306,
      season: '2024/25',
      status: 'active',
      topScorer: 'Harry Kane (21 goals)',
      leader: 'Bayern Munich',
      avgGoals: 3.1,
      predictions: 89
    },
    {
      id: 4,
      name: 'Serie A',
      country: 'Italy',
      sport: 'football',
      logo: '🇮🇹',
      teams: 20,
      matches: 380,
      season: '2024/25',
      status: 'active',
      topScorer: 'Victor Osimhen (18 goals)',
      leader: 'Inter Milan',
      avgGoals: 2.4,
      predictions: 76
    },
    {
      id: 5,
      name: 'NBA',
      country: 'USA',
      sport: 'basketball',
      logo: '🇺🇸',
      teams: 30,
      matches: 1230,
      season: '2024/25',
      status: 'active',
      topScorer: 'Luka Dončić (32.1 PPG)',
      leader: 'Boston Celtics',
      avgGoals: 112.5,
      predictions: 156
    },
    {
      id: 6,
      name: 'NFL',
      country: 'USA',
      sport: 'american-football',
      logo: '🇺🇸',
      teams: 32,
      matches: 272,
      season: '2024',
      status: 'playoffs',
      topScorer: 'Josh Allen (29 TDs)',
      leader: 'Kansas City Chiefs',
      avgGoals: 22.8,
      predictions: 67
    }
  ]

  const sports = [
    { id: 'football', label: 'Football', icon: '⚽' },
    { id: 'basketball', label: 'Basketball', icon: '🏀' },
    { id: 'american-football', label: 'American Football', icon: '🏈' },
    { id: 'tennis', label: 'Tennis', icon: '🎾' },
    { id: 'hockey', label: 'Hockey', icon: '🏒' }
  ]

  const filteredLeagues = leagues.filter(league => {
    const matchesSport = selectedSport === 'all' || league.sport === selectedSport
    const matchesSearch = league.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         league.country.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSport && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400'
      case 'playoffs': return 'bg-blue-500/20 text-blue-400'
      case 'finished': return 'bg-gray-500/20 text-gray-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Leagues & Tournaments</h1>
          <p className="text-slate-400">
            Comprehensive coverage of major leagues worldwide with detailed statistics and predictions.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-slate-400" />
            <select
              value={selectedSport}
              onChange={(e) => setSelectedSport(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Sports</option>
              {sports.map((sport) => (
                <option key={sport.id} value={sport.id}>
                  {sport.icon} {sport.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2 flex-1 max-w-md">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search leagues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Leagues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeagues.map((league) => (
            <div key={league.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
              {/* League Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{league.logo}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{league.name}</h3>
                    <p className="text-slate-400 text-sm">{league.country}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(league.status)}`}>
                  {league.status.toUpperCase()}
                </span>
              </div>

              {/* League Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span className="text-lg font-bold text-white">{league.teams}</span>
                  </div>
                  <p className="text-slate-400 text-xs">Teams</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Calendar className="h-4 w-4 text-green-400" />
                    <span className="text-lg font-bold text-white">{league.matches}</span>
                  </div>
                  <p className="text-slate-400 text-xs">Matches</p>
                </div>
              </div>

              {/* Current Leader */}
              <div className="mb-4 p-3 bg-slate-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Current Leader</span>
                  <Trophy className="h-4 w-4 text-yellow-500" />
                </div>
                <p className="text-white font-semibold">{league.leader}</p>
              </div>

              {/* Top Scorer */}
              <div className="mb-4 p-3 bg-slate-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Top Scorer</span>
                  <TrendingUp className="h-4 w-4 text-purple-400" />
                </div>
                <p className="text-white font-semibold">{league.topScorer}</p>
              </div>

              {/* Additional Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                <div>
                  <p className="text-lg font-bold text-blue-400">{league.avgGoals}</p>
                  <p className="text-slate-400 text-xs">
                    {league.sport === 'football' ? 'Goals/Game' : 
                     league.sport === 'basketball' ? 'Points/Game' : 'Points/Game'}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold text-green-400">{league.predictions}</p>
                  <p className="text-slate-400 text-xs">Predictions</p>
                </div>
              </div>

              {/* Season Info */}
              <div className="text-center text-slate-400 text-sm mb-4">
                Season: {league.season}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  View Matches
                </button>
                <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Standings
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredLeagues.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg">No leagues found</p>
              <p className="text-sm">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LeaguesPage