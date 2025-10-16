import React from 'react';
import { AlertTriangle, X, MessageCircle, Info } from 'lucide-react';
import { Alert } from '../types';

interface AlertPanelProps {
  alerts: Alert[];
  onDismiss: (alertId: string) => void;
  onMessage: (agentId: string) => void;
  onViewDetail: (agentId: string) => void;
}

export function AlertPanel({ alerts, onDismiss, onMessage, onViewDetail }: AlertPanelProps) {
  if (alerts.length === 0) return null;
  
  return (
    <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-4 mx-8 mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-orange-600" />
          <h3 className="font-semibold text-orange-900">
            Active Alerts ({alerts.length})
          </h3>
        </div>
        <button
          onClick={() => alerts.forEach(a => onDismiss(a.id))}
          className="text-orange-600 hover:text-orange-800 text-sm font-medium"
        >
          Dismiss All
        </button>
      </div>
      
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="bg-white rounded-lg p-4 border border-orange-200">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {alert.type === 'critical' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                  {alert.type === 'warning' && <AlertTriangle className="w-4 h-4 text-orange-500" />}
                  {alert.type === 'info' && <Info className="w-4 h-4 text-blue-500" />}
                  <span className="font-semibold text-gray-900">{alert.agentName} ({alert.agentId})</span>
                </div>
                <p className="text-sm text-gray-700 mb-1">{alert.message}</p>
                {alert.details && (
                  <p className="text-xs text-gray-500">{alert.details}</p>
                )}
              </div>
              <button
                onClick={() => onDismiss(alert.id)}
                className="text-gray-400 hover:text-gray-600 ml-4"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => onMessage(alert.agentId)}
                className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-150"
              >
                <MessageCircle className="w-4 h-4" />
                Send Message
              </button>
              <button
                onClick={() => onViewDetail(alert.agentId)}
                className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors duration-150"
              >
                View Detail
              </button>
              <button
                onClick={() => onDismiss(alert.id)}
                className="px-3 py-1.5 text-gray-600 text-sm rounded-lg hover:bg-gray-100 transition-colors duration-150"
              >
                Dismiss
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
