// routes/chat.js
import express from "express";
import multer from "multer";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// ✅ Use API version v1
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY, {
  apiVersion: "v1",
});

router.post("/", upload.single("image"), async (req, res) => {
  const { prompt } = req.body;
  console.log("📝 Prompt received:", prompt);

  try {
    let imagePart = null;

    // 🖼️ If image is uploaded, convert to base64
    if (req.file) {
      const fileData = fs.readFileSync(req.file.path);
      imagePart = {
        inlineData: {
          data: fileData.toString("base64"),
          mimeType: req.file.mimetype,
        },
      };
    }

    // 🧠 Use unified multimodal model
    const model = genAI.getGenerativeModel({
  model: imagePart ? 'gemini-pro-vision' : 'gemini-1.5-flash-latest', // 🔄 Changed fallback from gemini-1.5-pro-latest
});


    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: imagePart
            ? [{ text: prompt }, imagePart]
            : [{ text: prompt }],
        },
      ],
    });

    const response = await result.response.text();
    res.json({ response });

    // 🧹 Delete uploaded file if present
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error("❌ Failed to delete file:", err.message);
      });
    }

  } catch (err) {
    console.error("❌ Gemini API Error:", err);
    res.status(500).json({ error: "AI response failed." });
  }
});

export default router;