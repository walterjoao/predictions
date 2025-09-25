import React from 'react';
import { Code, FileText, Smartphone } from 'lucide-react';

function Documentation() {
  const codeExample = `// Get live sports data
const response = await fetch('https://api.datastream.com/v1/sports/live', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data.matches);`;

  const endpoints = [
    { method: "GET", path: "/sports/live", description: "Get live sports data" },
    { method: "GET", path: "/markets/stocks", description: "Real-time stock prices" },
    { method: "GET", path: "/weather/current", description: "Current weather data" },
    { method: "POST", path: "/webhooks/subscribe", description: "Subscribe to webhooks" }
  ];

  return (
    <section id="docs" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Developer-First Documentation
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get started quickly with our comprehensive API documentation, 
            code examples, and SDKs for popular programming languages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Code className="h-6 w-6 mr-2 text-blue-500" />
              Quick Start Example
            </h3>
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-300">
                <code>{codeExample}</code>
              </pre>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Available SDKs</h4>
              <div className="grid grid-cols-2 gap-4">
                {['JavaScript', 'Python', 'PHP', 'Ruby'].map((sdk) => (
                  <div key={sdk} className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-center">
                    <span className="text-slate-300 font-medium">{sdk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-green-500" />
              Popular Endpoints
            </h3>
            
            <div className="space-y-4 mb-8">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 text-xs font-mono rounded ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <span className="text-slate-300 font-mono">{endpoint.path}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">{endpoint.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Smartphone className="h-6 w-6 text-blue-400 mr-2" />
                <h4 className="text-xl font-semibold text-white">Mobile SDKs</h4>
              </div>
              <p className="text-slate-300 mb-4">
                Native SDKs for iOS and Android applications coming soon. 
                Join the beta program to get early access.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
                Join Beta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Documentation;