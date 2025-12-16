import { useEffect, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  async function loadMessages() {
    const res = await fetch("/api/messages");
    setMessages(await res.json());
  }

  async function submitMessage(e) {
    e.preventDefault();
    await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    setText("");
    loadMessages();
  }

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Next.js CI/CD Demo 🚀</h1>
      <p>Artifact-based deployment to Azure VM</p>

      <form onSubmit={submitMessage}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>

      <ul>
        {messages.map(m => (
          <li key={m.id}>
            {m.text} <small>({m.createdAt})</small>
          </li>
        ))}
      </ul>
    </div>
  );
}



