import React, { useState } from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { StatusDropdown } from './StatusDropdown';
import { PersonalStatsWidget } from './PersonalStatsWidget';
import { MessageCenter } from './MessageCenter';
import { QuickActions } from './QuickActions';
import { UpcomingSchedule } from './UpcomingSchedule';
import { TipsWidget } from './TipsWidget';
import { Status } from '../styles/tokens';
import { Message, Stats, Schedule } from '../types';
import { toast } from 'sonner@2.0.3';

export function AgentDashboard() {
  const [currentStatus, setCurrentStatus] = useState<Status>('available');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      from: 'Sarah (SP001)',
      fromId: 'SP001',
      type: 'broadcast',
      subject: 'Team Meeting',
      content: 'Team meeting in 15 minutes. Conference Room B.',
      timestamp: '20:11 • 1d ago',
      isRead: false,
      priority: 'high',
    },
    {
      id: '2',
      from: 'Sarah (SP001)',
      fromId: 'SP001',
      type: 'direct',
      subject: 'Product Update',
      content: 'Product update documentation has been shared. Please review.',
      timestamp: '19:48 • 1d ago',
      isRead: true,
    },
    {
      id: '3',
      from: 'HR Department',
      fromId: 'HR',
      type: 'broadcast',
      subject: 'Payroll Reminder',
      content: 'Payroll submission deadline is Friday 5 PM.',
      timestamp: 'Yesterday',
      isRead: true,
    },
    {
      id: '4',
      from: 'IT Support',
      fromId: 'IT',
      type: 'direct',
      subject: 'System Maintenance',
      content: 'System maintenance scheduled for this weekend.',
      timestamp: '2d ago',
      isRead: true,
    },
  ]);
  
  const stats: Stats = {
    callsToday: 12,
    callsTarget: 45,
    avgHandleTime: '5m 32s',
    avgHandleTimeDiff: '-18s',
    satisfaction: 4.8,
    satisfactionDiff: 0.2,
  };
  
  const schedule: Schedule[] = [
    {
      id: '1',
      time: '10:30',
      title: 'Break',
      type: 'break',
      duration: '15 mins',
    },
    {
      id: '2',
      time: '11:00',
      title: 'Team Meeting',
      type: 'meeting',
      location: 'Conf. Room B',
      duration: '30 mins',
    },
    {
      id: '3',
      time: '15:00',
      title: 'Break',
      type: 'break',
      duration: '15 mins',
    },
  ];
  
  const handleStatusChange = (newStatus: Status) => {
    setCurrentStatus(newStatus);
    toast.success(`Status changed to ${newStatus}`, {
      duration: 2000,
    });
  };
  
  const handleMarkAsRead = (messageId: string) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, isRead: true } : msg
      )
    );
    toast.success('Message marked as read');
  };
  
  const handleSendMessage = (to: string, message: string) => {
    toast.success(`Message sent to ${to}`);
  };
  
  const unreadCount = messages.filter(m => !m.isRead).length;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              AW
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Agent Wallboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <StatusDropdown 
              currentStatus={currentStatus} 
              onStatusChange={handleStatusChange} 
            />
            
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150">
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
            
            <button className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                NS
              </div>
              <span className="font-medium">Nok</span>
            </button>
            
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex gap-8 p-8">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          <PersonalStatsWidget stats={stats} />
          <QuickActions />
          <UpcomingSchedule schedule={schedule} />
          <TipsWidget />
        </div>
        
        {/* Right Column - Messages */}
        <div className="w-[400px]">
          <MessageCenter 
            messages={messages}
            onMarkAsRead={handleMarkAsRead}
            onSendMessage={handleSendMessage}
          />
        </div>
      </div>
      
      {/* Floating Status Indicator */}
      <div className="fixed bottom-6 right-6 bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-medium text-gray-900">Available</span>
        </div>
        <span className="text-xs text-gray-500">F2-F4 for status</span>
      </div>
    </div>
  );
}
