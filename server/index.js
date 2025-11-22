import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);   

app.listen(5000, () => console.log("Server running on port 5000"));
console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY);