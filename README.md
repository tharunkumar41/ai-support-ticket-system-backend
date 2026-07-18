# AI Support Ticket System - Backend

## Overview

This backend provides REST APIs for an AI-powered support ticket system. It authenticates administrators, stores support tickets in MongoDB, and integrates with Google Gemini AI to generate suggested replies.

## Features

- REST API
- JWT Authentication
- Admin Login
- Ticket Creation
- AI Generated Replies
- MongoDB Storage
- Search
- Filter
- Pagination
- Protected Admin Routes

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Google Gemini API

## Why These Technologies?

- Express provides lightweight REST API development.
- MongoDB stores flexible ticket data efficiently.
- JWT secures protected routes.
- Gemini AI automatically generates suggested replies for support tickets.

## Project Structure

## Project Structure

```text
.
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── adminController.js
│   └── ticketController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Admin.js
│   └── Ticket.js
├── routes/
│   ├── authRoutes.js
│   ├── adminRoutes.js
│   └── ticketRoutes.js
├── services/
│   └── aiService.js
├── utils/
│   └── prompt.js
├── scripts/
│   └── createAdmin.js
├── server.js
├── package.json
└── .env.example
```

## Installation

```bash
git clone https://github.com/tharunkumar41/ai-support-ticket-system-backend

cd server

npm install

npm run dev
```

Server runs at:

```
http://localhost:5000
```

## Environment Variables

Create a `.env` file.

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

## API Endpoints

### Public

```
POST /api/tickets
POST /api/auth/login
```

### Protected

```
GET /api/admin/tickets
```

## Trade-off

To complete the assignment within the available time, I implemented a single admin role and basic authentication instead of a full role-based authorization system.

## Future Improvements

- Multiple Admin Roles
- Ticket Status Updates
- Email Notifications
- File Attachments
- Dashboard Analytics
- Docker Deployment
- Unit & Integration Tests


# Screenshots

## MongoDB - Admin Collection

<img width="1806" height="628" alt="mongodb-admin-collection" src="https://github.com/user-attachments/assets/eabae921-18eb-4843-8fc8-e4c89bcb7fec" />


## MongoDB - Tickets Collection

<img width="1813" height="649" alt="mongodb-tickets-collection" src="https://github.com/user-attachments/assets/c64dfc20-4140-4818-97d5-3d5e2a6291ca" />
