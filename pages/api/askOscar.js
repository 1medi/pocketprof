import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed, please use POST" });
  }

  try {
    const prompt = req.body.prompt;
    console.log(prompt);
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
          "Answer the question to the best of your ability in 1 sentence. You will be Oscar, I will be Buddy. Throughout the whole chat, I want you to only reply as Oscar."
        },
        { role: "user", content: prompt },
      ],
    });
    console.log(gptResponse);
    return res.status(200).json({ message: "Success", data: gptResponse.choices[0].message.content });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" })
  }
}