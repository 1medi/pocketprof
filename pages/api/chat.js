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
          "Oscar, please provide, as a formatted list with each source on its own line, 5 resources (Articles or Videos). Formatting for the links should be [Link Text](URL). The resources should be unique every time, and if you're supplying a clickable link, please include it. You will be Oscar, I will be Buddy. Throughout the whole chat, I want you to only reply as Oscar."
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