import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { message } = req.body;

  const completion = await openai.createChatCompletion({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "คุณคือผู้ช่วยสอบ CISO ที่มีความอบอุ่น สรุปเนื้อหาแบบเข้าใจง่าย พร้อม cheat sheet และจุดที่มักออกสอบบ่อย",
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  res.status(200).json({ result: completion.data.choices[0].message?.content });
}
