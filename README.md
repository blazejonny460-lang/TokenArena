# TokenArena 🎮

A modern, responsive web application for a game-based virtual token trading platform.

## 🎯 Overview

TokenArena is an entertainment-focused gaming platform where users can:
- Buy virtual coins using real money (INR)
- Invest in fictional tokens
- Watch token values change dynamically based on in-game demand
- Compete on leaderboards
- Unlock achievements and rewards

⚠️ **IMPORTANT**: This is a virtual simulation game with a closed-loop economy. Tokens and coins have NO real-world monetary value, and users cannot withdraw money or access real trading APIs.

## ✨ Core Features

### 1. Authentication
- Email/password login
- Google OAuth integration
- User profiles with avatars
- Level and XP system

### 2. Wallet System
- Virtual coin balance
- Token holdings tracker
- Transaction history
- Investment tracking

### 3. Coin Packages (INR Purchase)
- ₹10 = 100 coins
- ₹49 = 600 coins
- ₹99 = 1500 coins
- ₹199 = 3500 coins
- Razorpay payment integration

### 4. Token Marketplace
- 6+ fictional tokens (AlphaX, NovaCore, Zentry, Fluxa, OrbitX, Nexify)
- Real-time price tracking (simulated)
- Trend graphs
- Risk meter (Low/Medium/High)
- Demand score visualization

### 5. Game Mechanics
- Buy/sell tokens to earn coins
- Dynamic price engine based on user activity
- Daily volatility events
- Trending tokens section
- "Hot token" badges

### 6. Rewards & Gamification
- Trade profit conversion to coins
- Daily login bonuses
- Streak bonuses
- Referral rewards
- Achievement system
- XP progression

### 7. Leaderboards
- Top coin holders
- Best traders (highest gains)
- Daily/Weekly/All-time rankings

### 8. Missions
- Daily missions with XP rewards
- Level progression
- Badge collection
- Achievements:
  - Early Investor
  - Token Master
  - Market King

## 🏗️ Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS with dark theme & neon accents
- **Backend**: Node.js with Supabase
- **Database**: PostgreSQL
- **Authentication**: Supabase Auth / Firebase
- **Payments**: Razorpay (coin purchase only)
- **Charts**: Chart.js + React Chart.js 2

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Landing)
│   ├── dashboard/
│   ├── marketplace/
│   ├── wallet/
│   ├── leaderboard/
│   ├── profile/
│   └── admin/
├── components/
│   ├── Auth/
│   ├── Dashboard/
│   ├── Marketplace/
│   ├── Common/
│   └── ...
├── lib/
│   ├── supabase.ts
│   ├── firebase.ts
│   ├── razorpay.ts
│   ├── tokenEngine.ts
│   └── hooks.ts
├── store/
│   └── useStore.ts (Zustand state management)
├── types/
│   └── index.ts
└── styles/
    └── globals.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Supabase account
- Razorpay account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/blazejonny460-lang/TokenArena.git
cd TokenArena
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your credentials:
   - Supabase URL and keys
   - Firebase config (if using)
   - Razorpay keys
   - App URL

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📋 Database Schema

### Users
```sql
- id (UUID, PK)
- username (VARCHAR)
- email (VARCHAR)
- password_hash (VARCHAR)
- coins_balance (INTEGER)
- level (INTEGER)
- xp (INTEGER)
- avatar_url (VARCHAR)
- created_at (TIMESTAMP)
```

### Tokens
```sql
- id (UUID, PK)
- name (VARCHAR)
- symbol (VARCHAR)
- price (DECIMAL)
- demand_score (INTEGER)
- volatility (DECIMAL)
- logo_url (VARCHAR)
- created_at (TIMESTAMP)
```

### UserTokens
```sql
- id (UUID, PK)
- user_id (UUID, FK)
- token_id (UUID, FK)
- quantity (DECIMAL)
- avg_buy_price (DECIMAL)
```

### Transactions
```sql
- id (UUID, PK)
- user_id (UUID, FK)
- type (VARCHAR: buy/sell/reward/purchase)
- amount (DECIMAL)
- reference_id (VARCHAR)
- created_at (TIMESTAMP)
```

### Leaderboards
```sql
- id (UUID, PK)
- user_id (UUID, FK)
- score (INTEGER)
- period (VARCHAR: daily/weekly/all-time)
- rank (INTEGER)
```

## ⚖️ Safety & Legal

This application includes mandatory disclaimers:
- "This is a virtual simulation game."
- "Coins and tokens have NO real-world monetary value."
- "No withdrawal or real-money trading is allowed."
- "For entertainment purposes only."

## 🔒 Security Rules

- ❌ NO cryptocurrency integration
- ❌ NO real wallet connections
- ❌ NO withdrawal mechanisms
- ❌ NO blockchain APIs
- ❌ NO real-world asset linkage
- ✅ Closed-loop virtual economy only

## 📱 Pages Overview

| Page | Description |
|------|-------------|
| Landing | Hero, coin packages, token showcase |
| Dashboard | Wallet, portfolio, quick stats |
| Marketplace | Token list with filters & search |
| Token Detail | Price chart, buy/sell interface |
| Wallet | Balance, holdings, history |
| Leaderboard | Rankings (daily/weekly/all-time) |
| Profile | User stats, level, achievements |
| Admin Panel | Token management, price control |

## 🎨 Design System

- **Theme**: Dark mode with neon accents
- **Primary Colors**: Neon Green (#00ff00), Neon Red (#ff0040)
- **Secondary Colors**: Neon Blue (#00d4ff), Neon Purple (#d000ff)
- **Responsive**: Mobile-first design

## 📈 Future Enhancements

- [ ] Friends system
- [ ] Private leagues
- [ ] Fictional token news feed
- [ ] AI-generated trend predictions
- [ ] Push notifications
- [ ] Mobile app (React Native)
- [ ] Social sharing integration

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📞 Support

For issues and feature requests, please create a GitHub issue.

---

**Remember**: TokenArena is a game for entertainment purposes only. No real money or assets are at stake.
