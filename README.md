# Mini Task Manager

A lightweight **Full-Stack Task Manager** web application built with **React + Redux** on the frontend and **Node.js + Express + MongoDB** on the backend.  
Supports **user authentication**, **task management**, and **JWT-based secure sessions**.  

---

## Features

### Authentication
- User **registration** with username, email, and password.
- User **login** with JWT-based session.
- Only logged-in users can view their own tasks.

### Task Management
- **Add tasks** (title + status).
- **View all tasks** of the logged-in user.
- **Toggle task status** (Pending / Completed).
- **Delete tasks**.

### Frontend
- Built with **React** and **Redux Toolkit**.
- Professional and minimal UI for smooth user experience.
- Global state management via Redux.
- Error and success notifications.

### Backend
- **Node.js + Express** API.
- MongoDB database to store users and tasks.
- RESTful routes:
  - `POST /auth/register` – Register new users
  - `POST /auth/login` – Login users
  - `GET /tasks` – Fetch all user tasks
  - `POST /tasks` – Create new task
  - `PUT /tasks/:id` – Toggle task status
  - `DELETE /tasks/:id` – Delete task
- Passwords securely hashed with **bcrypt**.
- JWT authentication middleware to protect routes.

---

## Tech Stack

| Frontend | Backend | Database |
|----------|---------|---------|
| React    | Node.js | MongoDB |
| Redux    | Express | Mongoose |
| Axios    | JWT     |         |

---

