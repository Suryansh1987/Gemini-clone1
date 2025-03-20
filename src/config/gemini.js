import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyA3TcjqI8XEKoJRl0b7Us0RDINbg294Y9o";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

export async function run(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        const responseText = await result.response.text();
        console.log(responseText);
        return responseText;
    } catch (error) {
        console.error("Error fetching response:", error);
        return "Error: Unable to fetch response.";
    }
}

export default run;
