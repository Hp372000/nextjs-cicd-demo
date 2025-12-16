import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "data.db");
const db = new Database(dbPath);

// Initialize table once
db.prepare(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

export default function handler(req, res) {
  if (req.method === "GET") {
    const messages = db
      .prepare("SELECT * FROM messages ORDER BY id DESC")
      .all();
    return res.status(200).json(messages);
  }

  if (req.method === "POST") {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Message required" });
    }

    db.prepare("INSERT INTO messages (text) VALUES (?)").run(text);
    return res.status(201).json({ success: true });
  }

  res.status(405).end();
}

