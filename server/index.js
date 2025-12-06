import express from "express";
import dotenv from "dotenv";
dotenv.config();


console.log("Loaded key:", process.env.GEMINI_API_KEY);  

import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";
import { connectDB } from './db.js';
import userRoutes from './routes/userRoutes.js';

await connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/chat", chatRoutes);
app.use("/api/user", userRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
