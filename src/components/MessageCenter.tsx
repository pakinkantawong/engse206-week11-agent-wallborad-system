import React, { useImperativeHandle, useRef, useState } from 'react';
import { Message } from '../types';
import { ChevronDown, Send } from 'lucide-react';

interface MessageCenterProps {
  messages: Message[];
  onMarkAsRead: (messageId: string) => void;
  onSendMessage: (to: string, message: string) => void;
}

export type MessageCenterHandle = {
  focusComposer: () => void;
};

export const MessageCenter = React.forwardRef<MessageCenterHandle, MessageCenterProps>(
({ messages, onMarkAsRead, onSendMessage }, ref) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'unread' | 'urgent'>('all');
  const [showAll, setShowAll] = useState(false);
  const [composeMessage, setComposeMessage] = useState('');
  const [composeTo, setComposeTo] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const composeTextareaRef = useRef<HTMLTextAreaElement>(null);
  
  const unreadCount = messages.filter(m => !m.isRead).length;
  
  const filteredMessages = messages.filter(msg => {
    if (activeFilter === 'unread') return !msg.isRead;
    if (activeFilter === 'urgent') return msg.type === 'urgent';
    return true;
  });
  
  const displayedMessages = showAll ? filteredMessages : filteredMessages.slice(0, 3);
  const hiddenCount = filteredMessages.length - displayedMessages.length;
  
  const getMessageIcon = (type: Message['type']) => {
    switch (type) {
      case 'urgent': return '🔴';
      case 'broadcast': return '📢';
      case 'direct': return '💬';
    }
  };
  
  const handleSend = () => {
    if (composeMessage.trim() && composeTo) {
      onSendMessage(composeTo, composeMessage);
      setComposeMessage('');
      setComposeTo('');
    }
  };
  
  useImperativeHandle(ref, () => ({
    focusComposer: () => {
      containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      requestAnimationFrame(() => composeTextareaRef.current?.focus());
    },
  }));

  return (
    <div
      ref={containerRef}
      className="bg-white rounded-xl border border-gray-200 shadow-sm h-full flex flex-col"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900">Messages ({messages.length})</h3>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
        
        {/* Filter Pills */}
        <div className="flex gap-2">
          {(['all', 'unread', 'urgent'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-150 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {displayedMessages.map((message) => (
          <div
            key={message.id}
            className={`p-4 rounded-lg border-l-4 transition-all duration-150 ${
              !message.isRead
                ? 'bg-red-50 border-red-500'
                : 'bg-white border-gray-200'
            } hover:shadow-md cursor-pointer`}
            onClick={() => !message.isRead && onMarkAsRead(message.id)}
          >
            {!message.isRead && (
              <div className="text-xs font-semibold text-red-600 mb-1">UNREAD</div>
            )}
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="font-medium text-gray-900">From: {message.from}</div>
                <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <span>{getMessageIcon(message.type)}</span>
                  <span>{message.type === 'broadcast' ? 'Broadcast' : 'Direct'}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2">{message.content}</p>
            <div className="text-xs text-gray-500">{message.timestamp}</div>
            {!message.isRead && (
              <div className="mt-2 flex gap-2">
                <button 
                  className="text-xs text-blue-600 hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMarkAsRead(message.id);
                  }}
                >
                  Mark as Read
                </button>
                <button className="text-xs text-gray-600 hover:underline">Reply</button>
              </div>
            )}
          </div>
        ))}
        
        {hiddenCount > 0 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
          >
            {showAll ? 'Show Less' : `Show All (${hiddenCount} more)`} ▾
          </button>
        )}
      </div>
      
      {/* Quick Compose */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Compose</h4>
        <select 
          value={composeTo}
          onChange={(e) => setComposeTo(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select recipient</option>
          <option value="SP001">Supervisor (Sarah)</option>
          <option value="TEAM">Team</option>
        </select>
        
        <textarea
          ref={composeTextareaRef}
          value={composeMessage}
          onChange={(e) => setComposeMessage(e.target.value)}
          placeholder="Type message..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={2}
        />
        
        <div className="mb-2">
          <p className="text-xs text-gray-600 mb-1">Templates:</p>
          <div className="flex flex-wrap gap-1">
            {['Need help', 'Taking break', 'Technical issue'].map((template) => (
              <button
                key={template}
                onClick={() => setComposeMessage(template)}
                className="text-xs px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors duration-150"
              >
                {template}
              </button>
            ))}
          </div>
        </div>
        
        <button 
          onClick={handleSend}
          disabled={!composeMessage.trim() || !composeTo}
          className="w-full bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-150 flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          Send
        </button>
      </div>
    </div>
  );
});

MessageCenter.displayName = 'MessageCenter';
