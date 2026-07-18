const { GoogleGenAI } = require("@google/genai");
const buildPrompt = require("../utils/prompt");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const triageTicket = async (message) => {
  try {
    const prompt = buildPrompt(message);

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: prompt,
    });

    const text = response.text;

    // Remove markdown if Gemini wraps JSON in ```json
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return {
      success: true,
      data: JSON.parse(cleaned),
    };
  } catch (error) {
    console.error("Gemini Error:", error.message);

    return {
      success: false,
      data: {
        priority: "Medium",
        category: "Other",
        suggestedReply:
          "Thank you for contacting us. Our support team will review your request shortly.",
      },
    };
  }
};

module.exports = {
  triageTicket,
};