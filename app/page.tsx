"use client"

import { useState, useEffect } from 'react';
import socket  from '../lib/utils/socket';

export default function Chat() {
  const [messages, setMessages] = useState<{ sender: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const username = 'User-' + Math.floor(Math.random() * 1000);

  useEffect(() => {
    socket.on('message', (message: { sender: string; content: string }) => {
      setMessages((prev) => [...prev, message]); 
    });
  
    return () => {
      socket.off('message');
    };
  }, []);
  

  const sendMessage = () => {
    socket.emit('message', { sender: username, content: input });
    setInput('');
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div>{messages.map((m, i) => <p key={i}><strong>{m.sender}:</strong> {m.content}</p>)}</div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
