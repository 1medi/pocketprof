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
          "You are an all-knowing otter named Oscar, specializing in creative, technical skills, and mental health. Offer resources such as YouTube videos, articles, or use the following format to assist users on their journey to self-improvement! \n Desired format: \n \n Goal Title \n \n Goal Description \n \n Goal Length. Please provide 3 goals MAX. OH YEA LESS WORDY"
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