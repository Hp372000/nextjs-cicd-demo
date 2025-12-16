import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "messages.json");

function ensureFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
}

export function getMessages() {
  ensureFile();
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function addMessage(text) {
  ensureFile();
  const messages = getMessages();
  const newMessage = {
    id: Date.now(),
    text,
    createdAt: new Date().toISOString()
  };
  messages.push(newMessage);
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
  return newMessage;
}
