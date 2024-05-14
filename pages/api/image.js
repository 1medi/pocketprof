import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY // This is also the default, can be omitted
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed, please use POST" });
  }

  try {
    const prompt = req.body.prompt;
    console.log(prompt);
    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: prompt,
      n: 1,
      size: "256x256",
    });
    const imageUrl = response.data[0].url;
    return res.status(200).json({ message: "Success", imageUrl });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" })
  }
}