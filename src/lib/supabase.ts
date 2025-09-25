import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          plan_type: 'basic' | 'premium' | 'pro'
          status: 'active' | 'canceled' | 'expired'
          current_period_start: string
          current_period_end: string
          payment_method: 'stripe' | 'paypal'
          payment_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          plan_type: 'basic' | 'premium' | 'pro'
          status?: 'active' | 'canceled' | 'expired'
          current_period_start: string
          current_period_end: string
          payment_method: 'stripe' | 'paypal'
          payment_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          plan_type?: 'basic' | 'premium' | 'pro'
          status?: 'active' | 'canceled' | 'expired'
          current_period_start?: string
          current_period_end?: string
          payment_method?: 'stripe' | 'paypal'
          payment_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}