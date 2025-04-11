import React, { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setResponse(data.result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>ผู้ช่วยสอบ CISO 🤖</h1>
      <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
      <br />
      <button onClick={handleSend}>ส่งข้อความ</button>
      <pre>{response}</pre>
    </div>
  );
}
