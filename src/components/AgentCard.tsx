import React from 'react';
import { MessageCircle, MoreVertical, Flame, Clock as ClockIcon } from 'lucide-react';
import { Agent } from '../types';
import { StatusBadge } from './StatusBadge';
import { statusConfig } from '../styles/tokens';

interface AgentCardProps {
  agent: Agent;
  onMessage: (agentId: string) => void;
  onClick: (agentId: string) => void;
}

export function AgentCard({ agent, onMessage, onClick }: AgentCardProps) {
  const needsAttention = agent.currentCallDuration && parseInt(agent.currentCallDuration) > 10;
  const breakEnding = agent.status === 'break' && agent.breaksUsed && agent.breaksUsed < (agent.breaksTotal || 3);
  
  return (
    <div
      onClick={() => onClick(agent.id)}
      className="relative bg-white rounded-xl border border-gray-200 p-4 transition-all duration-200 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      style={{
        borderLeft: `4px solid ${statusConfig[agent.status].color}`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
            {agent.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{agent.name}</h3>
            <p className="text-xs text-gray-500">{agent.id}</p>
          </div>
        </div>
        
        {needsAttention && (
          <Flame className="w-5 h-5 text-red-500" title="Long call duration" />
        )}
        {breakEnding && (
          <ClockIcon className="w-5 h-5 text-orange-500" title="Break ending soon" />
        )}
      </div>
      
      {/* Status */}
      <div className="mb-3">
        <StatusBadge status={agent.status} size="sm" />
      </div>
      
      {/* Stats */}
      <div className="space-y-1.5 mb-4 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>{agent.callCount} calls today</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>{agent.avgHandleTime} average</span>
        </div>
        {agent.currentCallDuration && (
          <div className="flex justify-between text-orange-600 font-medium">
            <span>Call: {agent.currentCallDuration}</span>
          </div>
        )}
        {agent.satisfaction && (
          <div className="flex justify-between text-gray-600">
            <span>{agent.satisfaction}⭐ CSAT</span>
          </div>
        )}
        <div className="flex justify-between text-gray-400 text-xs">
          <span>Updated {agent.lastUpdate}</span>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMessage(agent.id);
          }}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-150"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Message</span>
        </button>
        <button
          onClick={(e) => e.stopPropagation()}
          className="px-3 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-150"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
