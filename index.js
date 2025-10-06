import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";
import authRoutes from "./Routes/auth.js";
import taskRoutes from "./Routes/tasks.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => res.send("Mini Task Manager API"));

app.listen(PORT, async () => {
  await connectDB(MONGO_URI);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
