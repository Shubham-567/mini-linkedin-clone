# Mini LinkedIn Clone

A minimal LinkedIn-inspired social platform built with MERN stack. Users can register, login, create posts, and view profiles.

---

## 🔗 Links

- **GitHub:** [https://github.com/Shubham-567/mini-linkedin-clone](https://github.com/Shubham-567/mini-linkedin-clone)
- **Live Demo:** [https://mini-linkedin-clone.vercel.app](https://mini-linkedin.vercel-clone.app)

---

## 🛠 Stack Used

- **Frontend:** React, Tailwind CSS, Zustand, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT
- **Authentication:** JWT-based auth with protected routes
- **State Management:** Zustand

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Shubham-567/mini-linkedin-clone.git
cd mini-linkedin-clone
```

### 2. Setup Backend

```bash
cd backend
npm install
# Add .env with:
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_secret_key
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🔐 Demo Credentials (optional)

- **Email:** `johnwick@gmail.com`
- **Password:** `JohnWick`

> You can register your own account as well.

---

## 🌟 Features

- User authentication (login/register)
- Create and view posts
- View user profiles
- Protected routes (Create Post/Profile)
- Zustand for global state
