import React, { useState } from 'react'
import { TrendingUp, TrendingDown, BarChart3, RefreshCw, Filter } from 'lucide-react'

function OddsPage() {
  const [selectedMarket, setSelectedMarket] = useState('1x2')
  const [refreshing, setRefreshing] = useState(false)

  const oddsData = [
    {
      id: 1,
      match: 'Manchester City vs Arsenal',
      league: 'Premier League',
      time: '15:00',
      markets: {
        '1x2': {
          home: { current: 1.85, previous: 1.90, trend: 'down' },
          draw: { current: 3.40, previous: 3.35, trend: 'up' },
          away: { current: 4.20, previous: 4.10, trend: 'up' }
        },
        'ou25': {
          over: { current: 1.72, previous: 1.75, trend: 'down' },
          under: { current: 2.15, previous: 2.10, trend: 'up' }
        },
        'btts': {
          yes: { current: 1.65, previous: 1.68, trend: 'down' },
          no: { current: 2.25, previous: 2.20, trend: 'up' }
        }
      },
      bookmakers: [
        { name: 'Bet365', home: 1.85, draw: 3.40, away: 4.20 },
        { name: 'William Hill', home: 1.83, draw: 3.45, away: 4.25 },
        { name: 'Betfair', home: 1.87, draw: 3.38, away: 4.15 },
        { name: 'Pinnacle', home: 1.89, draw: 3.42, away: 4.18 }
      ]
    },
    {
      id: 2,
      match: 'Barcelona vs Real Madrid',
      league: 'La Liga',
      time: '20:00',
      markets: {
        '1x2': {
          home: { current: 2.10, previous: 2.05, trend: 'up' },
          draw: { current: 3.20, previous: 3.25, trend: 'down' },
          away: { current: 3.50, previous: 3.60, trend: 'down' }
        },
        'ou25': {
          over: { current: 1.68, previous: 1.70, trend: 'down' },
          under: { current: 2.20, previous: 2.18, trend: 'up' }
        },
        'btts': {
          yes: { current: 1.58, previous: 1.60, trend: 'down' },
          no: { current: 2.35, previous: 2.30, trend: 'up' }
        }
      },
      bookmakers: [
        { name: 'Bet365', home: 2.10, draw: 3.20, away: 3.50 },
        { name: 'William Hill', home: 2.08, draw: 3.25, away: 3.55 },
        { name: 'Betfair', home: 2.12, draw: 3.18, away: 3.48 },
        { name: 'Pinnacle', home: 2.15, draw: 3.22, away: 3.52 }
      ]
    }
  ]

  const markets = [
    { id: '1x2', label: '1X2 (Match Result)' },
    { id: 'ou25', label: 'Over/Under 2.5 Goals' },
    { id: 'btts', label: 'Both Teams to Score' }
  ]

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? (
      <TrendingUp className="h-3 w-3 text-green-400" />
    ) : (
      <TrendingDown className="h-3 w-3 text-red-400" />
    )
  }

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-400' : 'text-red-400'
  }

  const getBestOdds = (bookmakers: any[], market: 'home' | 'draw' | 'away') => {
    return Math.max(...bookmakers.map(b => b[market]))
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Live Odds</h1>
              <p className="text-slate-400">
                Real-time odds comparison from 50+ bookmakers with trend analysis.
              </p>
            </div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Market Filter */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-4 w-4 text-slate-400" />
            <span className="text-slate-300 text-sm">Market:</span>
          </div>
          <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg max-w-fit">
            {markets.map((market) => (
              <button
                key={market.id}
                onClick={() => setSelectedMarket(market.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedMarket === market.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {market.label}
              </button>
            ))}
          </div>
        </div>

        {/* Odds Cards */}
        <div className="space-y-6">
          {oddsData.map((match) => (
            <div key={match.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              {/* Match Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{match.match}</h3>
                  <div className="flex items-center space-x-4 text-slate-400 text-sm">
                    <span>{match.league}</span>
                    <span>{match.time}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm">Live odds</span>
                </div>
              </div>

              {/* Current Market Odds */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">
                  {markets.find(m => m.id === selectedMarket)?.label}
                </h4>
                
                {selectedMarket === '1x2' && (
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-slate-400 text-sm mb-2">Home Win</div>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl font-bold text-white">
                            {match.markets['1x2'].home.current}
                          </span>
                          {getTrendIcon(match.markets['1x2'].home.trend)}
                        </div>
                        <div className={`text-xs ${getTrendColor(match.markets['1x2'].home.trend)}`}>
                          {match.markets['1x2'].home.previous}
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-slate-400 text-sm mb-2">Draw</div>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl font-bold text-white">
                            {match.markets['1x2'].draw.current}
                          </span>
                          {getTrendIcon(match.markets['1x2'].draw.trend)}
                        </div>
                        <div className={`text-xs ${getTrendColor(match.markets['1x2'].draw.trend)}`}>
                          {match.markets['1x2'].draw.previous}
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-slate-400 text-sm mb-2">Away Win</div>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl font-bold text-white">
                            {match.markets['1x2'].away.current}
                          </span>
                          {getTrendIcon(match.markets['1x2'].away.trend)}
                        </div>
                        <div className={`text-xs ${getTrendColor(match.markets['1x2'].away.trend)}`}>
                          {match.markets['1x2'].away.previous}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedMarket === 'ou25' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-slate-400 text-sm mb-2">Over 2.5</div>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl font-bold text-white">
                            {match.markets.ou25.over.current}
                          </span>
                          {getTrendIcon(match.markets.ou25.over.trend)}
                        </div>
                        <div className={`text-xs ${getTrendColor(match.markets.ou25.over.trend)}`}>
                          {match.markets.ou25.over.previous}
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-slate-400 text-sm mb-2">Under 2.5</div>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl font-bold text-white">
                            {match.markets.ou25.under.current}
                          </span>
                          {getTrendIcon(match.markets.ou25.under.trend)}
                        </div>
                        <div className={`text-xs ${getTrendColor(match.markets.ou25.under.trend)}`}>
                          {match.markets.ou25.under.previous}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedMarket === 'btts' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-slate-400 text-sm mb-2">Yes</div>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl font-bold text-white">
                            {match.markets.btts.yes.current}
                          </span>
                          {getTrendIcon(match.markets.btts.yes.trend)}
                        </div>
                        <div className={`text-xs ${getTrendColor(match.markets.btts.yes.trend)}`}>
                          {match.markets.btts.yes.previous}
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-slate-400 text-sm mb-2">No</div>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl font-bold text-white">
                            {match.markets.btts.no.current}
                          </span>
                          {getTrendIcon(match.markets.btts.no.trend)}
                        </div>
                        <div className={`text-xs ${getTrendColor(match.markets.btts.no.trend)}`}>
                          {match.markets.btts.no.previous}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bookmaker Comparison */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Bookmaker Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left text-slate-400 text-sm font-medium py-2">Bookmaker</th>
                        <th className="text-center text-slate-400 text-sm font-medium py-2">Home</th>
                        <th className="text-center text-slate-400 text-sm font-medium py-2">Draw</th>
                        <th className="text-center text-slate-400 text-sm font-medium py-2">Away</th>
                      </tr>
                    </thead>
                    <tbody>
                      {match.bookmakers.map((bookmaker, index) => (
                        <tr key={index} className="border-b border-slate-700/50">
                          <td className="py-3 text-white font-medium">{bookmaker.name}</td>
                          <td className="py-3 text-center">
                            <span className={`font-bold ${
                              bookmaker.home === getBestOdds(match.bookmakers, 'home') 
                                ? 'text-green-400' 
                                : 'text-white'
                            }`}>
                              {bookmaker.home}
                            </span>
                          </td>
                          <td className="py-3 text-center">
                            <span className={`font-bold ${
                              bookmaker.draw === getBestOdds(match.bookmakers, 'draw') 
                                ? 'text-green-400' 
                                : 'text-white'
                            }`}>
                              {bookmaker.draw}
                            </span>
                          </td>
                          <td className="py-3 text-center">
                            <span className={`font-bold ${
                              bookmaker.away === getBestOdds(match.bookmakers, 'away') 
                                ? 'text-green-400' 
                                : 'text-white'
                            }`}>
                              {bookmaker.away}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OddsPage