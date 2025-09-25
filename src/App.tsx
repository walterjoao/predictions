import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import MatchesPage from './pages/MatchesPage'
import PredictionsPage from './pages/PredictionsPage'
import OddsPage from './pages/OddsPage'
import LeaguesPage from './pages/LeaguesPage'
import TeamsPage from './pages/TeamsPage'
import SubscriptionPage from './pages/SubscriptionPage'
import ProtectedRoute from './components/ProtectedRoute'

const paypalOptions = {
  "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID || "test",
  currency: "USD",
  intent: "subscription"
}

function App() {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 text-white">
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/subscription" element={<SubscriptionPage />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                } />
                <Route path="/matches" element={
                  <ProtectedRoute>
                    <MatchesPage />
                  </ProtectedRoute>
                } />
                <Route path="/predictions" element={
                  <ProtectedRoute>
                    <PredictionsPage />
                  </ProtectedRoute>
                } />
                <Route path="/odds" element={
                  <ProtectedRoute>
                    <OddsPage />
                  </ProtectedRoute>
                } />
                <Route path="/leagues" element={
                  <ProtectedRoute>
                    <LeaguesPage />
                  </ProtectedRoute>
                } />
                <Route path="/teams" element={
                  <ProtectedRoute>
                    <TeamsPage />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </PayPalScriptProvider>
  )
}

export default App