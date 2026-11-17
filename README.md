# 🍽️ GlobalBites – AI-Powered Food & Recipe Discovery Platform

<p align="center">
  <b>Discover. Cook. Eat Smart.</b>
  <br/>
  Your intelligent companion for personalized recipes, budget-friendly meals, and smarter food choices.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-2026-blue?logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Backend-green?logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/TailwindCSS-Styling-38B2AC?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/AI-Powered-purple" />
  <img src="https://img.shields.io/badge/Status-In%20Development-orange" />
</p>

---

## 🌍 About GlobalBites

**GlobalBites** is an AI-powered food and recipe discovery platform designed to make cooking easier, smarter, and more personalized.

It combines intelligent recipe discovery, budget-conscious meal planning, nutritional awareness, and AI-assisted cooking experiences in one platform.

Whether you are looking for recipes based on your available ingredients, planning meals within a specific budget, or exploring different cuisines, GlobalBites helps simplify your food journey.

The platform features a modern, interactive interface with personalized experiences and an editorial-inspired visual design.

## 🌐 Live Deployment

| Service | URL |
| :--- | :--- |
| **Frontend** (Vercel) | [global-bites-weld.vercel.app](global-bites-weld.vercel.app) |
| **Backend API** (Render) | [https://apexdistro-portal-1.onrender.com](https://globalbites-backend-67qw.onrender.com) |

> ⚠️ The backend is hosted on Render's free tier — it may take **30–60 seconds** to wake up on the first request.


## ✨ Key Features

### 🏠 1. Smart Recipe Discovery
- Explore recipes from different cuisines.
- Search and discover food ideas.
- Browse trending recipes.
- Filter recipes based on preferences.
- View detailed ingredients and cooking instructions.

### 🤖 2. AI Chef – Intelligent Recipe Generation
- Explore different AI Chef personas.
- Enter your desired dish or food preferences.
- Generate structured recipe ideas.
- Get ingredient lists and step-by-step cooking instructions.
- Discover signature dishes and cooking suggestions.

### 💰 3. Budget-Based Meal Planning
- Set your preferred food budget.
- Choose meal types and meal frequency.
- Select dietary preferences.
- Explore budget-friendly meal recommendations.
- View ingredient-wise cost breakdowns.

### 🥗 4. Knowledge Hub
An interactive food knowledge section covering:

- **Mood & Food:** Explore food based on your mood.
- **Food Science:** Discover interesting facts about food.
- **Food Combinations:** Learn about food combinations and alternatives.
- **Health Insights:** Explore nutritional information and BMI calculations.

### 👤 5. User Profile & Personalization
- Personalized user profile.
- Account management.
- Saved and favourite recipes.
- Recipe activity statistics.
- User preferences and settings.

### 🔐 6. Authentication System
- User registration and login interfaces.
- OTP verification interface.
- Form validation.
- User account management.

### 🎨 7. Modern UI/UX Experience
- Responsive interface.
- Smooth animations using Framer Motion.
- Interactive recipe cards.
- Cuisine-based gradient designs.
- Modern typography and visual elements.
- Mobile-friendly navigation.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- Tailwind CSS
- Framer Motion
- Phosphor Icons
- React Fast Marquee
- Fluent Emoji

### Backend
- Node.js
- Express.js
- RESTful APIs

### Database
- MongoDB

### AI Integration
- Google Gemini API (planned integration for AI-powered recipe generation)

### Development Tools
- Git & GitHub
- Visual Studio Code
- npm
- Postman
- MongoDB Compass
- Vite

---

## 📂 Project Structure

```text
GlobalBites/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ui/
│   │   │
│   │   ├── page/
│   │   │   ├── landing/
│   │   │   ├── signup/
│   │   │   ├── login/
│   │   │   ├── verfiyOtp/
│   │   │   ├── home/
│   │   │   ├── selectedRecipe/
│   │   │   ├── profile/
│   │   │   ├── favourite/
│   │   │   ├── my-recipe/
│   │   │   ├── features/
│   │   │   └── knowledge/
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
├── .gitignore
└── README.md
```

*Note: The backend directory above represents a conceptual organization; adjust it to match your actual backend files.*

---

## ⚙️ Installation & Setup

Follow these steps to run GlobalBites locally.

### 1. Clone the Repository

```bash
git clone https://github.com/AyushRanjan27/GlobalBites.git
```

```bash
cd GlobalBites
```

### 2. Prerequisites

Make sure you have installed:

- Node.js (16 or later)
- npm
- MongoDB account or local MongoDB instance
- Git

### 3. Setup Backend

Open a terminal:

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=8080
CORS_ORIGIN=http://localhost:5173
RATE_LIMIT_MAX=300
```

Start the backend server:

```bash
npm run dev
```

Backend server:

```text
http://localhost:8080
```

Health check:

```text
http://localhost:8080/health
```

### 4. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Start the frontend:

```bash
npm run dev
```

Frontend application:

```text
http://localhost:5173
```

### Notes

- Without `MONGODB_URI`, the backend starts without database-backed routes; API routes return `503`.
- Build the frontend for production with `cd frontend && npm run build`.

---

## 🎨 Design Philosophy

GlobalBites follows an **Organic Modern Editorial** design approach.

The visual experience focuses on warm colors, clean layouts, interactive components, and smooth transitions.

### Design System

| Element | Technology |
|---|---|
| Heading Typography | Lora |
| Body Typography | Outfit |
| Numerical Typography | Space Mono |
| Icons | Phosphor Icons |
| Animations | Framer Motion |
| UI Styling | Tailwind CSS |
| Background | Warm Parchment |
| Decorative Elements | Fluent Emoji PNGs |

The interface uses a warm and natural color palette with cuisine-inspired gradients to create an engaging food discovery experience.

---

## 🚀 Development Roadmap

- [x] Modern landing page and navigation.
- [x] Responsive UI design system.
- [x] Login and signup interfaces.
- [x] OTP verification interface.
- [x] Recipe discovery interface.
- [x] Recipe detail page.
- [x] AI Chef interface.
- [x] Budget meal planning interface.
- [x] Food Knowledge Hub.
- [x] User profile interface.
- [ ] Complete frontend-backend API integration.
- [ ] Complete JWT authentication integration.
- [ ] Gemini API integration for AI recipe generation.
- [ ] Complete database-backed recipe management.
- [ ] Comprehensive testing and optimization.
- [ ] Production deployment.

---

## 🔒 Environment Variables & Security

Never upload your `.env` files or API keys to GitHub.

Keep sensitive credentials private and configure environment variables separately when deploying the frontend and backend.

The repository includes `.gitignore` rules to exclude environment files, dependencies, build folders, and unnecessary development files.

---

## 👨‍💻 Developer

**Ayush Ranjan**

B.Tech – Computer Science & Engineering

Interested in Full Stack Development, Artificial Intelligence, and Data Analytics.

- GitHub: [@AyushRanjan27](https://github.com/AyushRanjan27)

---

## ⭐ Support

If you find GlobalBites interesting, consider giving this repository a ⭐ on GitHub.

Your support motivates further development and improvements!

---

<p align="center">
  <b>GlobalBites – Making Every Meal Smarter, Healthier & More Delicious! 🍽️</b>
</p>
