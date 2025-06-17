import React, { useState, useRef } from 'react';
import { Bot, Send, Mic, Image as ImageIcon, X } from 'lucide-react';
import axios from 'axios';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sendMessage = async () => {
    if (!input && !image) return;

    const newMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);

    const formData = new FormData();
    formData.append('prompt', input);
    if (image) formData.append('image', image);

    try {
      const res = await axios.post('http://localhost:5000/chat', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMessages((prev) => [...prev, { from: 'bot', text: res.data.response }]);
    } catch (err) {
      setMessages((prev) => [...prev, { from: 'bot', text: "❌ Sorry, I couldn't respond." }]);
    }

    setInput('');
    setImage(null);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 z-50"
      >
        {isOpen ? <X /> : <Bot />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 max-h-[80vh] bg-white border rounded-lg shadow-xl flex flex-col z-50">
          <div className="p-4 font-semibold border-b bg-orange-100">Ask Our AI Assistant</div>
          <div className="p-4 overflow-y-auto flex-1 space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md ${
                  msg.from === 'user' ? 'bg-orange-50 text-right' : 'bg-gray-100 text-left'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center p-2 border-t gap-2">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 border rounded px-2 py-1"
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={(e) => e.target.files && setImage(e.target.files[0])}
            />
            <button onClick={() => fileInputRef.current?.click()}>
              <ImageIcon className="w-5 h-5" />
            </button>
            <button onClick={sendMessage}>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
