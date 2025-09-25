import React, { useState } from 'react';
import { 
  BarChart3, 
  Key, 
  Settings, 
  LogOut, 
  Zap, 
  TrendingUp, 
  Activity,
  Copy,
  CheckCircle
} from 'lucide-react';

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

function Dashboard({ user, onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [copied, setCopied] = useState(false);

  const copyApiKey = () => {
    navigator.clipboard.writeText(user.apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: 'API Calls Today', value: '24,847', change: '+12%', color: 'text-blue-400' },
    { label: 'Success Rate', value: '99.9%', change: '+0.1%', color: 'text-green-400' },
    { label: 'Avg Response Time', value: '89ms', change: '-5ms', color: 'text-purple-400' },
    { label: 'Monthly Usage', value: '68%', change: '+8%', color: 'text-yellow-400' }
  ];

  const recentCalls = [
    { endpoint: '/sports/live', status: 200, time: '45ms', timestamp: '2 mins ago' },
    { endpoint: '/markets/stocks', status: 200, time: '67ms', timestamp: '5 mins ago' },
    { endpoint: '/weather/current', status: 200, time: '23ms', timestamp: '8 mins ago' },
    { endpoint: '/sports/historical', status: 200, time: '156ms', timestamp: '12 mins ago' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Zap className="h-8 w-8 text-blue-500" />
            <div>
              <h1 className="text-xl font-bold">DataStream API</h1>
              <p className="text-slate-400 text-sm">Welcome back, {user.name}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-800 min-h-screen p-6">
          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-5 w-5" /> },
              { id: 'api-keys', label: 'API Keys', icon: <Key className="h-5 w-5" /> },
              { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-blue-400 font-semibold mb-1">{user.plan} Plan</p>
              <p className="text-xs text-slate-400">68,000 / 100,000 calls</p>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'overview' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Dashboard Overview</h2>
                <p className="text-slate-400">Monitor your API usage and performance</p>
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

              {/* Recent API Calls */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Recent API Calls</h3>
                  <Activity className="h-5 w-5 text-green-500" />
                </div>
                <div className="space-y-4">
                  {recentCalls.map((call, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-mono">
                          {call.status}
                        </span>
                        <span className="text-white font-mono">{call.endpoint}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-slate-400 text-sm">
                        <span>{call.time}</span>
                        <span>{call.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'api-keys' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">API Keys</h2>
                <p className="text-slate-400">Manage your API authentication keys</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Production Key</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex-1 bg-slate-700 border border-slate-600 rounded-lg p-4 font-mono text-slate-300">
                    {user.apiKey}
                  </div>
                  <button
                    onClick={copyApiKey}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-slate-400 text-sm mt-2">
                  Keep your API key secure. Don't share it publicly or embed it in client-side code.
                </p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                <h4 className="text-yellow-400 font-semibold mb-2">Security Best Practices</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Store API keys as environment variables</li>
                  <li>• Use server-side requests only</li>
                  <li>• Regenerate keys if compromised</li>
                  <li>• Monitor usage for unusual activity</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Account Settings</h2>
                <p className="text-slate-400">Manage your account and subscription</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                      <input
                        type="text"
                        value={user.name}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={user.email}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white"
                      />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Update Profile
                    </button>
                  </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Subscription</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Current Plan</span>
                      <span className="text-white font-semibold">{user.plan}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Billing Cycle</span>
                      <span className="text-white">Monthly</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Next Billing</span>
                      <span className="text-white">Feb 15, 2025</span>
                    </div>
                    <div className="pt-4 space-y-2">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                        Upgrade Plan
                      </button>
                      <button className="w-full text-red-400 hover:text-red-300 py-2 transition-colors">
                        Cancel Subscription
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;