
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { craftsData } from '@/data/craftsData';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'नमस्ते! Welcome to Hasthakala Bharat! I\'m your AI assistant. Ask me about Indian handicrafts, states famous for specific crafts, or anything about our heritage crafts!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Craft-specific responses
    if (message.includes('pottery') || message.includes('clay')) {
      return `🏺 Pottery is one of India's oldest crafts! It's famous in ${craftsData.pottery.states.slice(0, 3).join(', ')}. The art dates back to the Indus Valley Civilization. Would you like to know about the materials used or the process?`;
    }
    
    if (message.includes('woodcraft') || message.includes('wood')) {
      return `🪵 Woodcraft is beautiful! Kashmir's walnut wood work and Karnataka's sandalwood carvings are world-famous. It's practiced in ${craftsData.woodcraft.states.slice(0, 3).join(', ')} and many other states. Want to learn about the carving process?`;
    }
    
    if (message.includes('metal') || message.includes('brass')) {
      return `⚱️ Metal craft has a rich history in India! Bidriware from Karnataka and brass work from Rajasthan are stunning. This craft is popular in ${craftsData.metalcraft.states.slice(0, 3).join(', ')}. Shall I tell you about the techniques used?`;
    }
    
    if (message.includes('bamboo')) {
      return `🎋 Bamboo craft is eco-friendly and beautiful! Northeast India, especially ${craftsData.bamboo.states.slice(0, 3).join(', ')} are famous for this sustainable craft. It's been practiced for over 4000 years!`;
    }
    
    if (message.includes('paper')) {
      return `📜 Paper craft includes Kashmir's papier-mâché and handmade paper from various states. It's practiced in ${craftsData.paper.states.slice(0, 3).join(', ')}. The craft combines utility with artistic expression!`;
    }

    // State-specific responses
    if (message.includes('rajasthan')) {
      return `🌟 Rajasthan is famous for pottery (especially blue pottery of Jaipur), woodcraft, metalwork, and paper craft! The state has a rich tradition of handicrafts supported by royal patronage.`;
    }
    
    if (message.includes('kashmir')) {
      return `❄️ Kashmir is renowned for its exquisite walnut woodwork and beautiful papier-mâché items. The intricate carving and painting techniques have been passed down through generations!`;
    }

    if (message.includes('gujarat')) {
      return `🎨 Gujarat is famous for its vibrant pottery, woodcraft, and textile arts. The state's craftsmen are known for their colorful and intricate designs that reflect the cultural richness of the region.`;
    }

    // General craft questions
    if (message.includes('which state') || message.includes('where')) {
      return `🗺️ Different states specialize in different crafts:\n• Pottery: Rajasthan, Gujarat, West Bengal\n• Woodcraft: Kashmir, Karnataka, Rajasthan\n• Metal: Rajasthan, UP, Karnataka\n• Bamboo: Assam, West Bengal, Tripura\n• Paper: Kashmir, Rajasthan, Karnataka\n\nWhich craft interests you most?`;
    }

    if (message.includes('history') || message.includes('ancient')) {
      return `📜 Indian handicrafts have a glorious history spanning thousands of years! Pottery dates back to Indus Valley Civilization (3300 BCE), while woodcraft and metalwork have been part of temple architecture for over 2000 years. Each craft tells the story of our rich cultural heritage!`;
    }

    if (message.includes('learn') || message.includes('workshop')) {
      return `🎓 Many craft centers offer workshops! You can learn pottery in Khurja (UP), woodwork in Kashmir, metalcraft in Rajasthan, and bamboo craft in Northeast India. Many artisans also offer online tutorials now!`;
    }

    if (message.includes('buy') || message.includes('purchase')) {
      return `🛒 You can buy authentic Indian handicrafts from:\n• Government emporiums\n• Local craft markets\n• Artisan cooperatives\n• Online platforms supporting artisans\n\nAlways look for authentic certification to support genuine artisans!`;
    }

    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('namaste')) {
      return `🙏 Namaste! Welcome to the world of Indian handicrafts! I can help you discover our rich craft traditions. Ask me about specific crafts, states, or anything about our cultural heritage!`;
    }

    if (message.includes('help')) {
      return `🤝 I can help you with:\n• Information about 5 craft categories\n• States famous for specific crafts\n• History and cultural significance\n• Materials and processes\n• Where to learn or buy crafts\n\nWhat would you like to know?`;
    }

    // Default response
    return `🤔 That's an interesting question! I specialize in Indian handicrafts like pottery, woodcraft, metalwork, bamboo, and paper crafts. You can ask me about:\n• Which states are famous for specific crafts\n• History and cultural significance\n• Materials and making processes\n• Where to learn these crafts\n\nWhat would you like to explore?`;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-saffron-500 hover:bg-saffron-600 shadow-2xl animate-pulse-glow z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-96 shadow-2xl border-saffron-200 z-50 animate-slide-in-right">
          <CardHeader className="bg-gradient-to-r from-saffron-500 to-emerald-500 text-white p-4 rounded-t-lg">
            <CardTitle className="flex items-center text-lg">
              <Bot className="h-5 w-5 mr-2" />
              हस्तकला AI Assistant
            </CardTitle>
            <p className="text-xs opacity-90 font-devanagari">Ask me about Indian handicrafts!</p>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-saffron-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-saffron-500" />}
                      {message.sender === 'user' && <User className="h-4 w-4 mt-0.5" />}
                      <p className="text-sm font-devanagari whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-saffron-500" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-saffron-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-saffron-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-saffron-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about crafts, states, or heritage..."
                  className="flex-1 border-saffron-200 focus:border-saffron-500"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-saffron-500 hover:bg-saffron-600"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
