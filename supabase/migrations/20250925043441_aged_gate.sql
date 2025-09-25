/*
  # Create subscriptions table

  1. New Tables
    - `subscriptions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `plan_type` (enum: basic, premium, pro)
      - `status` (enum: active, canceled, expired)
      - `current_period_start` (timestamptz)
      - `current_period_end` (timestamptz)
      - `payment_method` (enum: stripe, paypal)
      - `payment_id` (text, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `subscriptions` table
    - Add policies for users to manage their own subscriptions
*/

-- Create enum types
CREATE TYPE plan_type AS ENUM ('basic', 'premium', 'pro');
CREATE TYPE subscription_status AS ENUM ('active', 'canceled', 'expired');
CREATE TYPE payment_method AS ENUM ('stripe', 'paypal');

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  plan_type plan_type NOT NULL DEFAULT 'basic',
  status subscription_status NOT NULL DEFAULT 'active',
  current_period_start timestamptz NOT NULL,
  current_period_end timestamptz NOT NULL,
  payment_method payment_method NOT NULL,
  payment_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own subscriptions"
  ON subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscriptions"
  ON subscriptions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscriptions"
  ON subscriptions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create index for faster queries
CREATE INDEX subscriptions_user_id_idx ON subscriptions(user_id);
CREATE INDEX subscriptions_status_idx ON subscriptions(status);