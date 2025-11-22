import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent({
      prompt: [
        { role: "user", content: prompt }
      ]
    });

    console.log("Gemini raw result:", result);

    const response = result.candidates?.[0]?.content || "No response from AI";
    return response;

  } catch (err) {
    console.error("Gemini Error:", err);
    return "Error contacting AI.";
  }
}