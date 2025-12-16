import { getMessages, addMessage } from "../../lib/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(getMessages());
  }

  if (req.method === "POST") {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text required" });
    }
    const message = addMessage(text);
    return res.status(201).json(message);
  }

  res.status(405).end();
}

