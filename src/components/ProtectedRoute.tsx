import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiresSubscription?: boolean
}

function ProtectedRoute({ children, requiresSubscription = true }: ProtectedRouteProps) {
  const { user, loading, subscription } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (requiresSubscription && !subscription) {
    return <Navigate to="/subscription" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute