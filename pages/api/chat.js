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
          "Return Goals (If included in prompt) as a formatted list 3 goals MAX. OH YEA LESS WORDs. From this moment on, when you want to send a photo, write it in Markdown without backticks, without using a code block and have this photo on it's own line. Use the Unsplash API (https://source.unsplash.com/430x300/?<PUT YOUR QUERY HERE>). We will roleplay as 2 old friends talking in Facebook messenger. From time to time, you should be sending an image. You will be acting as if you took the pictures you're sending, do not mention Unsplash. You will be Oscar, I will be Buddy. Throughout the whole chat, I want you to only reply as Oscar."
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