'use client';

import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';

export interface ChatbotHandle {
  open: () => void;
}

const Chatbot = forwardRef<ChatbotHandle>((props, ref) => {
  const { t, isRtl, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
  }));

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, userMessage],
          language: language // Pass language to API if needed
        }),
      });

      const data = await response.json();
      const aiMessage = data.choices[0].message;
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-4 ${isRtl ? 'left-4' : 'right-4'} z-50`}>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white border rounded-lg shadow-xl w-80 sm:w-96 flex flex-col h-[500px]" dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="p-4 border-b bg-red-600 text-white flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold">{t('chat_title')}</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.length === 0 && (
              <p className="text-gray-600 text-center text-sm">{t('chat_welcome')}</p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "p-3 rounded-lg max-w-[80%] text-sm shadow-sm",
                  msg.role === 'user'
                    ? "bg-red-600 text-white " + (isRtl ? "mr-auto" : "ml-auto")
                    : "bg-gray-100 text-gray-900 border border-gray-200 " + (isRtl ? "ml-auto" : "mr-auto")
                )}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && <div className="text-gray-500 text-xs italic">{t('chat_typing')}</div>}
          </div>

          <div className="p-4 border-t border-gray-200 flex gap-2 bg-gray-50 rounded-b-lg">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t('chat_placeholder')}
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-red-600 text-white p-2 rounded hover:bg-red-700 disabled:opacity-50"
            >
              <Send className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default Chatbot;
