import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, TrendingUp, User, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, signOut, subscription } = useAuth()
  const location = useLocation()

  const navigation = [
    { name: 'Matches', href: '/matches' },
    { name: 'Predictions', href: '/predictions' },
    { name: 'Odds', href: '/odds' },
    { name: 'Leagues', href: '/leagues' },
    { name: 'Teams', href: '/teams' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-white">BetInsights</span>
          </Link>

          {user ? (
            <>
              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  to="/dashboard"
                  className={`transition-colors ${
                    isActive('/dashboard') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Dashboard
                </Link>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`transition-colors ${
                      isActive(item.href) ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                {subscription && (
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {subscription.plan_type.charAt(0).toUpperCase() + subscription.plan_type.slice(1)}
                  </span>
                )}
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-300 text-sm">{user.email}</span>
                </div>
                <button
                  onClick={signOut}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          )}

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              {user ? (
                <>
                  <Link to="/dashboard" className="text-slate-300 hover:text-white transition-colors">
                    Dashboard
                  </Link>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button
                    onClick={signOut}
                    className="text-red-400 hover:text-red-300 transition-colors text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-slate-300 hover:text-white transition-colors">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-center"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header