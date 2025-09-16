import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AIAdvisorPage() {
  const { state, dispatch } = useApp();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "What career is best for me?",
    "Which college should I choose?",
    "What are the top engineering branches?",
    "How to prepare for medical entrance exams?",
    "What are the best scholarships available?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state.chatMessages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    dispatch({ type: 'ADD_CHAT_MESSAGE', payload: { text: message, sender: 'user' } });
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      dispatch({ type: 'ADD_CHAT_MESSAGE', payload: { text: aiResponse, sender: 'ai' } });
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('career')) {
      return "Based on your interests and skills, I'd recommend exploring careers in technology, healthcare, or business. To give you more personalized advice, could you tell me about your favorite subjects and what activities you enjoy?";
    } else if (message.includes('college')) {
      return "Choosing the right college depends on several factors like your preferred course, budget, location, and career goals. I can help you find colleges that match your criteria. What field are you interested in studying?";
    } else if (message.includes('engineering')) {
      return "Popular engineering branches include Computer Science, Electronics, Mechanical, Civil, and Chemical Engineering. Computer Science and Electronics are currently in high demand with excellent job prospects. What aspects of engineering interest you most?";
    } else if (message.includes('medical')) {
      return "For medical entrance exams like NEET, focus on Biology, Chemistry, and Physics. Create a study schedule, practice previous years' questions, and take mock tests regularly. Consider joining coaching if needed. How long do you have to prepare?";
    } else if (message.includes('scholarship')) {
      return "There are various scholarships available based on merit, need, and specific categories. Some popular ones include National Scholarship Portal schemes, private foundation scholarships, and college-specific aid. What type of scholarship are you looking for?";
    } else {
      return "That's an interesting question! I'm here to help you with career guidance, college selection, and educational planning. Feel free to ask me about courses, colleges, career paths, or any other educational queries. How can I assist you better?";
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-600 rounded-full p-3 mr-4">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">AI Career Advisor</h1>
          </div>
          <p className="text-gray-600">
            Get personalized guidance about careers, colleges, and your educational journey
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-lg shadow-md h-[600px] flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {state.chatMessages.length === 0 && (
              <div className="text-center py-12">
                <Bot className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">
                  Welcome to AI Career Advisor!
                </h3>
                <p className="text-gray-500 mb-6">
                  Ask me anything about careers, colleges, courses, or educational planning.
                </p>
                
                {/* Quick Questions */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 mb-3">Try asking:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {state.chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-gray-600" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
                placeholder="Ask me anything about careers, colleges, or education..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage(input)}
                disabled={!input.trim() || isTyping}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            
            {/* Quick Questions for active chat */}
            {state.chatMessages.length > 0 && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.slice(0, 3).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Need more personalized guidance?
          </p>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Talk to a Human Counselor
          </button>
        </div>
      </div>
    </div>
  );
}