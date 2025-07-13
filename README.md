# 🎟️ Tixly - Event Booking & Ticketing Backend

Tixly is a modern, scalable event booking and ticketing platform built for developers and event organizers. It provides a powerful API for managing events, selling tickets (fiat + crypto), supporting affiliate systems, hybrid events, and advanced attendee experiences.

This is the **backend API** of the Tixly platform — built with **Node.js**, **Express**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**.

---

## 🚀 Features

- 🔐 Authentication system (Organizer & Attendee roles)
- 🏟️ Event & Venue management
- 🪙 Multi-wallet payment (Fiat, Crypto, Bitcoin)
- 📩 Affiliate ticketing & invite system
- 📦 Modular, scalable API architecture (OOP + FP)
- 📱 REST API built with performance and clarity in mind
- 🌍 Hosted on Supabase (PostgreSQL) + [Deployment Provider]

---

## 🛠️ Tech Stack

| Tech         | Description                                |
|--------------|--------------------------------------------|
| **Node.js**  | Runtime environment                        |
| **TypeScript** | Type-safe backend code                   |
| **Express**  | Fast backend framework                     |
| **Prisma ORM** | Database schema & queries                |
| **PostgreSQL (Supabase)** | Cloud database               |
| **ES Modules** | Modern JS module system                  |
| **Zod / Joi** | (Coming Soon) Input validation            |
| **JWT / OAuth** | Auth & secure token management          |

---


---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Devkol-11/Tixly-Backend.git
cd Tixly-Backend
npm install
DATABASE_URL=your_postgres_connection_url
JWT_SECRET=your_jwt_secret
npx prisma migrate dev
npm run dev

📦 API Routes (Examples)
Route	Method	Description
/api/auth/register	POST	Register user
/api/auth/login	POST	Login user
/api/events	GET	List events
/api/events/:id	GET	Get single event
/api/bookings	POST	Book ticket

Full API documentation coming soon...

npm run test

-- Contributing--
1.Fork the project
2.Create your feature branch (git checkout -b feature/awesome-feature)
3.Commit your changes
4.Push to the branch (git push origin feature/awesome-feature)
5.Open a Pull Request

📄 License
MIT License © 2025 Devkol-11



