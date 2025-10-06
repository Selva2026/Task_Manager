# Full-Stack Take-Home Assignment

A lightweight **Full-Stack Task Manager** web application built with **React + Redux** on the frontend and **Node.js + Express + MongoDB** on the backend.  
Supports **user authentication**, **task management**, and **JWT-based secure sessions**.

---

## Features

### Authentication
- User **registration** (username, email, password)
- User **login** with JWT authentication
- Only logged-in users can see their own tasks

### Task Management
- **Add tasks** (title + status)
- **View all tasks** of the logged-in user
- **Toggle task status** (Pending / Completed)
- **Delete tasks**

### Frontend
- Built with **React** and **Redux Toolkit**
- Minimal and professional UI
- Global state management via Redux
- Axios for API calls
- Error and success notifications

### Backend
- **Node.js + Express** API
- MongoDB database (via Mongoose) for users and tasks
- RESTful routes:
  - `POST /auth/register` – Register new users
  - `POST /auth/login` – Login users
  - `GET /tasks` – Fetch all user tasks
  - `POST /tasks` – Create new task
  - `PUT /tasks/:id` – Toggle task status
  - `DELETE /tasks/:id` – Delete task
- Passwords securely hashed with **bcrypt**
- JWT authentication middleware for protected routes

---

## Tech Stack

| Frontend | Backend | Database |
|----------|---------|---------|
| React    | Node.js | MongoDB |
| Redux    | Express | Mongoose |
| Axios    | JWT     |         |

---

## Folder Structure

task-manager/
├─ server.js ← Backend + serves frontend
├─ .env
├─ client/ ← React frontend
│ ├─ package.json
│ ├─ index.html
│ └─ src/
│ ├─ App.jsx
│ ├─ api.js
│ ├─ store.js
│ └─ slices/
│ └─ authSlice.js
└─ README.md

