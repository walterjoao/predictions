import React, { useState } from 'react'
import { Shield, TrendingUp, Users, MapPin, Calendar, Search, Filter } from 'lucide-react'

function TeamsPage() {
  const [selectedLeague, setSelectedLeague] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const teams = [
    {
      id: 1,
      name: 'Manchester City',
      league: 'Premier League',
      country: 'England',
      logo: '🔵',
      position: 1,
      points: 65,
      played: 25,
      won: 20,
      drawn: 5,
      lost: 0,
      goalsFor: 68,
      goalsAgainst: 22,
      form: ['W', 'W', 'W', 'D', 'W'],
      stadium: 'Etihad Stadium',
      capacity: 55017,
      founded: 1880,
      manager: 'Pep Guardiola',
      value: '€1.2B',
      recentResults: [
        { opponent: 'Arsenal', result: 'W', score: '3-1' },
        { opponent: 'Chelsea', result: 'D', score: '1-1' },
        { opponent: 'Liverpool', result: 'W', score: '2-0' }
      ]
    },
    {
      id: 2,
      name: 'Arsenal',
      league: 'Premier League',
      country: 'England',
      logo: '🔴',
      position: 2,
      points: 58,
      played: 25,
      won: 18,
      drawn: 4,
      lost: 3,
      goalsFor: 61,
      goalsAgainst: 28,
      form: ['L', 'W', 'W', 'W', 'D'],
      stadium: 'Emirates Stadium',
      capacity: 60704,
      founded: 1886,
      manager: 'Mikel Arteta',
      value: '€950M',
      recentResults: [
        { opponent: 'Man City', result: 'L', score: '1-3' },
        { opponent: 'Tottenham', result: 'W', score: '2-1' },
        { opponent: 'Brighton', result: 'W', score: '3-0' }
      ]
    },
    {
      id: 3,
      name: 'Real Madrid',
      league: 'La Liga',
      country: 'Spain',
      logo: '⚪',
      position: 1,
      points: 62,
      played: 24,
      won: 19,
      drawn: 5,
      lost: 0,
      goalsFor: 58,
      goalsAgainst: 18,
      form: ['W', 'W', 'D', 'W', 'W'],
      stadium: 'Santiago Bernabéu',
      capacity: 81044,
      founded: 1902,
      manager: 'Carlo Ancelotti',
      value: '€1.4B',
      recentResults: [
        { opponent: 'Barcelona', result: 'W', score: '2-1' },
        { opponent: 'Atletico', result: 'D', score: '1-1' },
        { opponent: 'Sevilla', result: 'W', score: '3-0' }
      ]
    },
    {
      id: 4,
      name: 'Bayern Munich',
      league: 'Bundesliga',
      country: 'Germany',
      logo: '🔴',
      position: 1,
      points: 59,
      played: 23,
      won: 18,
      drawn: 5,
      lost: 0,
      goalsFor: 71,
      goalsAgainst: 25,
      form: ['W', 'W', 'W', 'D', 'W'],
      stadium: 'Allianz Arena',
      capacity: 75024,
      founded: 1900,
      manager: 'Thomas Tuchel',
      value: '€1.1B',
      recentResults: [
        { opponent: 'Dortmund', result: 'W', score: '4-0' },
        { opponent: 'Leipzig', result: 'W', score: '2-1' },
        { opponent: 'Leverkusen', result: 'D', score: '2-2' }
      ]
    }
  ]

  const leagues = [
    { id: 'all', label: 'All Leagues' },
    { id: 'Premier League', label: 'Premier League' },
    { id: 'La Liga', label: 'La Liga' },
    { id: 'Bundesliga', label: 'Bundesliga' },
    { id: 'Serie A', label: 'Serie A' }
  ]

  const filteredTeams = teams.filter(team => {
    const matchesLeague = selectedLeague === 'all' || team.league === selectedLeague
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         team.league.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesLeague && matchesSearch
  })

  const getFormColor = (result: string) => {
    switch (result) {
      case 'W': return 'bg-green-500 text-white'
      case 'D': return 'bg-yellow-500 text-white'
      case 'L': return 'bg-red-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const getResultColor = (result: string) => {
    switch (result) {
      case 'W': return 'text-green-400'
      case 'D': return 'text-yellow-400'
      case 'L': return 'text-red-400'
      default: return 'text-slate-400'
    }
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Teams</h1>
          <p className="text-slate-400">
            Detailed team profiles, statistics, and performance analysis across all major leagues.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-slate-400" />
            <select
              value={selectedLeague}
              onChange={(e) => setSelectedLeague(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
            >
              {leagues.map((league) => (
                <option key={league.id} value={league.id}>
                  {league.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2 flex-1 max-w-md">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search teams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTeams.map((team) => (
            <div key={team.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
              {/* Team Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-2xl">
                    {team.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{team.name}</h3>
                    <p className="text-slate-400">{team.league}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <MapPin className="h-3 w-3 text-slate-500" />
                      <span className="text-slate-500 text-sm">{team.country}</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">#{team.position}</div>
                  <div className="text-slate-400 text-sm">Position</div>
                </div>
              </div>

              {/* League Stats */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{team.points}</div>
                  <div className="text-slate-400 text-xs">Points</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">{team.won}</div>
                  <div className="text-slate-400 text-xs">Won</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">{team.drawn}</div>
                  <div className="text-slate-400 text-xs">Drawn</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-red-400">{team.lost}</div>
                  <div className="text-slate-400 text-xs">Lost</div>
                </div>
              </div>

              {/* Goals */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-700 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-green-400">{team.goalsFor}</div>
                  <div className="text-slate-400 text-sm">Goals For</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-red-400">{team.goalsAgainst}</div>
                  <div className="text-slate-400 text-sm">Goals Against</div>
                </div>
              </div>

              {/* Form */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Recent Form</span>
                  <TrendingUp className="h-4 w-4 text-blue-400" />
                </div>
                <div className="flex space-x-1">
                  {team.form.map((result, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${getFormColor(result)}`}
                    >
                      {result}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stadium Info */}
              <div className="mb-6 p-3 bg-slate-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">Stadium</span>
                  <Shield className="h-4 w-4 text-purple-400" />
                </div>
                <div className="text-white font-semibold">{team.stadium}</div>
                <div className="text-slate-400 text-sm">Capacity: {team.capacity.toLocaleString()}</div>
              </div>

              {/* Team Info */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <span className="text-slate-400">Founded:</span>
                  <span className="text-white ml-2">{team.founded}</span>
                </div>
                <div>
                  <span className="text-slate-400">Value:</span>
                  <span className="text-white ml-2">{team.value}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-400">Manager:</span>
                  <span className="text-white ml-2">{team.manager}</span>
                </div>
              </div>

              {/* Recent Results */}
              <div>
                <h4 className="text-slate-400 text-sm mb-2">Recent Results</h4>
                <div className="space-y-2">
                  {team.recentResults.map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-slate-700 rounded">
                      <span className="text-white text-sm">vs {match.opponent}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-300 text-sm">{match.score}</span>
                        <span className={`text-xs font-bold ${getResultColor(match.result)}`}>
                          {match.result}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg">No teams found</p>
              <p className="text-sm">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamsPage