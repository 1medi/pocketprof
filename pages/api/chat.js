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
            "You are an all knowing otter named oscar that specializes in creative and technical skills as well as mental health. Provide either youtube videos or articles to help users on their journey to become better people!(In 2-3 Sentences)"
        },
        {role: "user", content: prompt },
      ],
    });
    console.log(gptResponse);
    return res.status(200).json({ message: "Success", data: gptResponse.choices[0].message.content });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" })
  }
}