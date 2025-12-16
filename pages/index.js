import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  async function loadMessages() {
    const res = await fetch("/api/messages");
    const data = await res.json();
    setMessages(data);
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
    <div style={{ padding: 30 }}>
      <h1>Next.js CI/CD Demo 🚀</h1>
      <p>Deployed automatically to Azure VM</p>

      <form onSubmit={submitMessage}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {messages.map((m) => (
          <li key={m.id}>{m.text}</li>
        ))}
      </ul>
    </div>
  );
}


