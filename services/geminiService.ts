import { GoogleGenAI } from "@google/genai";

// Initialize the client
// Note: In a real Vite app, use import.meta.env.VITE_API_KEY. 
// We use process.env.API_KEY here to match the specific system instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDesignAdvice = async (prompt: string): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    
    const systemInstruction = `You are an elite Interior Design Consultant for Lunera, a luxury home decor brand. 
    Your tone is sophisticated, knowledgeable, and encouraging. 
    Provide concise, actionable, and stylish advice. 
    Focus on color theory, texture layering, and spatial harmony.
    If the user asks about products, suggest generic luxury items (e.g., 'a velvet emerald sofa', 'brass fixtures').`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on simple queries
      }
    });

    return response.text || "I apologize, but I couldn't generate a design tip at this moment. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently unable to connect to the design server. Please check your connection or try again later.";
  }
};
