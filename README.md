# Predictions

A subscription web app for football (soccer) match data, odds and AI predictions, sold as "premium data APIs for modern applications". Built with Bolt.

> Status: front-end prototype. Matches, odds, leagues, teams and predictions are hard-coded sample data, and checkout is simulated (no real Stripe/PayPal call yet).

## Pages

| Route | Access | Description |
|---|---|---|
| `/` | public | Landing page: hero, features, pricing, documentation, footer |
| `/login`, `/register` | public | Supabase email/password auth |
| `/subscription` | public | Plan picker: Basic $29, Premium $79, Professional $149 |
| `/dashboard` | signed in | Overview and quick actions |
| `/matches` | signed in | Matches |
| `/predictions` | signed in | AI predictions |
| `/odds` | signed in | Live odds |
| `/leagues` | signed in | Leagues and tournaments |
| `/teams` | signed in | Teams |

Protected routes use `ProtectedRoute` and `AuthContext`.

## Tech stack

Vite 5, React 18, TypeScript, Tailwind CSS 3, React Router 7, Recharts 3, lucide-react, Supabase (auth + Postgres).

## Database

Migration `supabase/migrations/20250925043441_aged_gate.sql` creates:

- enums `plan_type` (`basic`, `premium`, `pro`), `subscription_status` (`active`, `canceled`, `expired`), `payment_method` (`stripe`, `paypal`)
- table `subscriptions` with row-level security so users can only view, insert and update their own rows

## Getting started

```bash
npm install
```

Create `.env` (not committed):

```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

```bash
npm run dev
npm run build
npm run lint
```

Apply the migration to your Supabase project (`supabase db push` or paste the SQL into the SQL editor).
