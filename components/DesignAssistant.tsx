import React, { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { getDesignAdvice } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

const DesignAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: 'Hello. I am Lunera, your personal design consultant. How may I assist in elevating your space today?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await getDesignAdvice(input);
    
    setMessages(prev => [...prev, { role: 'ai', content: responseText }]);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-[#F0F2F0]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-secondary uppercase tracking-widest text-xs font-bold">AI Consultant</span>
          <h2 className="text-3xl md:text-4xl font-serif text-primary mt-2">Ask Lunera</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Need advice on color palettes or furniture arrangement? Our AI consultant is trained in the principles of luxury design.
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-100">
          {/* Chat Area */}
          <div ref={scrollRef} className="h-96 overflow-y-auto p-6 space-y-6 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-lg text-sm leading-relaxed ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-4 rounded-lg rounded-tl-none shadow-sm flex items-center gap-2 ml-11">
                  <Sparkles size={16} className="text-secondary animate-pulse" />
                  <span className="text-xs text-gray-500">Consulting design archives...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Describe your room or ask for a style tip..."
              className="flex-1 border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <span>Send</span>
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignAssistant;
