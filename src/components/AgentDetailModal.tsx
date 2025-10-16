import React, { useState } from 'react';
import { X, MessageCircle, UserCircle, TrendingUp } from 'lucide-react';
import { Agent } from '../types';
import { StatusBadge } from './StatusBadge';

interface AgentDetailModalProps {
  agent: Agent;
  onClose: () => void;
  onSendMessage: (agentId: string) => void;
}

export function AgentDetailModal({ agent, onClose, onSendMessage }: AgentDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'activity'>('overview');
  
  const recentCalls = [
    { time: '11:23 - 11:28', duration: '5m 12s', status: 'Resolved' },
    { time: '11:10 - 11:15', duration: '4m 52s', status: 'Resolved' },
    { time: '10:58 - 11:04', duration: '6m 20s', status: 'Resolved' },
    { time: '10:48 - 10:53', duration: '5m 05s', status: 'Escalated' },
    { time: '10:35 - 10:42', duration: '7m 10s', status: 'Resolved' },
  ];
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold">
                  {agent.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{agent.name}</h2>
                  <p className="text-blue-100">{agent.id} • Customer Service Team</p>
                  <p className="text-sm text-blue-100 mt-1">Last update: {agent.lastUpdate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <StatusBadge status={agent.status} size="md" />
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors duration-150"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => onSendMessage(agent.id)}
                className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-150"
              >
                <MessageCircle className="w-4 h-4" />
                Send Message
              </button>
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors duration-150">
                Change Status
              </button>
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors duration-150">
                View Full Profile
              </button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex gap-6">
              {(['overview', 'performance', 'activity'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium transition-colors duration-150 ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-280px)]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">TODAY'S STATS</h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Calls</span>
                        <span className="font-semibold">{agent.callCount}/45 (73%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Talk Time</span>
                        <span className="font-semibold">1h 4m</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Avg Handle</span>
                        <span className="font-semibold">{agent.avgHandleTime}</span>
                      </div>
                      {agent.satisfaction && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">CSAT</span>
                          <span className="font-semibold">{agent.satisfaction}⭐</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">CURRENT SESSION</h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status</span>
                        <StatusBadge status={agent.status} size="sm" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-semibold">45m 20s</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Call</span>
                        <span className="font-semibold">2m ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Breaks</span>
                        <span className="font-semibold">{agent.breaksUsed || 1}/3</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Status History */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">STATUS HISTORY TODAY</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-600">09:00</span>
                      <div className="flex-1 h-2 bg-green-200 rounded" />
                      <span className="text-gray-600">10:30</span>
                      <div className="w-16 h-2 bg-blue-200 rounded" />
                      <span className="text-gray-600">10:45</span>
                      <div className="flex-1 h-2 bg-green-200 rounded" />
                      <span className="text-gray-600">Now</span>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>Available</span>
                      <span>Break</span>
                      <span>Available</span>
                    </div>
                  </div>
                </div>
                
                {/* Recent Calls */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">RECENT CALLS (Last 5)</h3>
                  <div className="space-y-2">
                    {recentCalls.map((call, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-150">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-500">{index + 1}.</span>
                          <span className="font-medium">{call.time}</span>
                          <span className="text-gray-600">({call.duration})</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          call.status === 'Resolved' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          ✓ {call.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-3 text-blue-600 hover:underline text-sm font-medium">
                    View All Call History →
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'performance' && (
              <div className="text-center py-12 text-gray-500">
                <TrendingUp className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p>Performance metrics and charts would appear here</p>
              </div>
            )}
            
            {activeTab === 'activity' && (
              <div className="text-center py-12 text-gray-500">
                <UserCircle className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p>Activity timeline would appear here</p>
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="border-t border-gray-200 p-4 bg-gray-50 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-150"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
