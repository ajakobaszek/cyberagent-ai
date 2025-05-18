<<<<<<< HEAD
import { useState } from "react";
import "./index.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const askAI = async () => {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await res.json();
    setResponse(data.choices[0].message.content);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">CyberAgent AI 🔐</h1>
      <textarea
        className="w-full max-w-lg p-2 rounded bg-gray-800 border border-gray-700"
        rows="4"
        placeholder="Zadaj pytanie np. Jakie mam ryzyka cyber?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={askAI}
        className="mt-4 px-6 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
      >
        Zadaj pytanie
      </button>
      {response && (
        <div className="mt-6 max-w-lg bg-gray-800 p-4 rounded">
          <p className="text-green-400 font-mono whitespace-pre-line">{response}</p>
        </div>
      )}
    </div>
  );
}
=======
import React from 'react'

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>🚀 CyberAgent AI</h1>
      <p>Witamy w Twoim centrum cyberbezpieczeństwa wspieranym przez AI.</p>
    </div>
  )
}

export default App
>>>>>>> 843caa2 (Deploy gotowego projektu AI)
