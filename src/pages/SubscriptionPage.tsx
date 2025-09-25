import React, { useState } from 'react'
import { Check, Star, CreditCard } from 'lucide-react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { user, refreshSubscription } = useAuth()
  const navigate = useNavigate()

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 29,
      description: 'Perfect for casual bettors',
      features: [
        'Access to 10+ sports',
        'Basic predictions',
        'Live scores',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 79,
      description: 'Most popular for serious bettors',
      features: [
        'Access to 50+ sports',
        'AI-powered predictions',
        'Real-time odds comparison',
        'Advanced analytics',
        'Priority support',
        'Custom alerts',
        'Historical data access'
      ],
      popular: true
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 149,
      description: 'For professional bettors',
      features: [
        'All Premium features',
        'Expert betting tips',
        'VIP community access',
        'Personal betting advisor',
        '24/7 phone support',
        'API access',
        'White-label options',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const createSubscription = async (planId: string, paymentMethod: 'stripe' | 'paypal', paymentId?: string) => {
    if (!user) return

    const plan = plans.find(p => p.id === planId)
    if (!plan) return

    const currentDate = new Date()
    const endDate = new Date(currentDate)
    endDate.setMonth(endDate.getMonth() + 1)

    const { error } = await supabase
      .from('subscriptions')
      .insert({
        user_id: user.id,
        plan_type: planId as 'basic' | 'premium' | 'pro',
        status: 'active',
        current_period_start: currentDate.toISOString(),
        current_period_end: endDate.toISOString(),
        payment_method: paymentMethod,
        payment_id: paymentId
      })

    if (!error) {
      await refreshSubscription()
      navigate('/dashboard')
    }
  }

  const handleStripePayment = async (planId: string) => {
    setLoading(true)
    // Simulate Stripe payment
    setTimeout(() => {
      createSubscription(planId, 'stripe', 'stripe_' + Math.random().toString(36).substr(2, 9))
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Select the perfect subscription plan for your betting needs. All plans include a 7-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-slate-800 border rounded-xl p-8 transition-all ${
                plan.popular 
                  ? 'border-blue-500 ring-2 ring-blue-500/20 scale-105' 
                  : 'border-slate-700 hover:border-blue-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-slate-400 ml-2">/month</span>
                </div>
                <p className="text-slate-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <button
                  onClick={() => handleStripePayment(plan.id)}
                  disabled={loading}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  {loading ? 'Processing...' : 'Pay with Card'}
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-slate-800 text-slate-400">or</span>
                  </div>
                </div>

                <PayPalButtons
                  style={{ layout: "horizontal", color: "blue", shape: "rect", label: "subscribe" }}
                  createSubscription={(data, actions) => {
                    return actions.subscription.create({
                      plan_id: `PAYPAL_PLAN_${plan.id.toUpperCase()}`,
                    })
                  }}
                  onApprove={async (data, actions) => {
                    if (data.subscriptionID) {
                      await createSubscription(plan.id, 'paypal', data.subscriptionID)
                    }
                  }}
                  onError={(err) => {
                    console.error('PayPal error:', err)
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            All plans include a 7-day free trial. Cancel anytime with no questions asked.
          </p>
          <p className="text-slate-500 text-sm">
            Secure payments powered by Stripe and PayPal. Your data is protected with enterprise-grade security.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPage