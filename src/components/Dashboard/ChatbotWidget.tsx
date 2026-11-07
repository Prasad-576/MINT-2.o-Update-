import { useState } from 'react';
import { Send, Bot, Sparkles, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../Common/Card';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi Alex! I'm MINT AI. How can I assist you with your tasks today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I'll look into that right away.", sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="origin-bottom-right"
          >
            <Card className="p-0 overflow-hidden flex flex-col h-[400px] w-[320px] shadow-2xl border border-blue-100 bg-gradient-to-b from-blue-50/50 to-white">
              {/* Header */}
              <div className="p-4 border-b border-gray-100 bg-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-primary flex items-center justify-center text-white shadow-md">
                    <Bot size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm flex items-center gap-1">
                      MINT AI <Sparkles size={14} className="text-blue-500" />
                    </h3>
                    <p className="text-[10px] text-green-600 font-medium">Online</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
        {messages.map((msg, i) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={i}
            className={`max-w-[85%] p-3 rounded-2xl text-xs ${
              msg.sender === 'user' 
                ? 'bg-teal-primary text-white self-end rounded-tr-sm' 
                : 'bg-white text-gray-700 shadow-sm self-start rounded-tl-sm border border-gray-100'
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

              {/* Input Area */}
              <div className="p-3 bg-white border-t border-gray-100">
                <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1.5 border border-gray-200 hover:border-blue-300 focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-100 transition-all duration-200">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask MINT AI..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-xs text-gray-700"
                  />
                  <button 
                    onClick={handleSend}
                    className="w-7 h-7 rounded-full bg-teal-primary text-white flex items-center justify-center hover:bg-teal-hover transition-colors shrink-0"
                  >
                    <Send size={12} className="-ml-0.5" />
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-teal-primary rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-600/30 hover:bg-teal-hover transition-colors z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatbotWidget;
