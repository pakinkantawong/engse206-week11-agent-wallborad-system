import React, { useState } from 'react';
import { Status, statusConfig } from '../styles/tokens';
import { ChevronDown, Check } from 'lucide-react';

interface StatusDropdownProps {
  currentStatus: Status;
  onStatusChange: (status: Status) => void;
}

export function StatusDropdown({ currentStatus, onStatusChange }: StatusDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const config = statusConfig[currentStatus];
  
  const statuses: Status[] = ['available', 'busy', 'break', 'offline'];
  
  const handleStatusClick = (status: Status) => {
    onStatusChange(status);
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-150 hover:opacity-90"
        style={{
          backgroundColor: config.bgColor,
          color: config.color,
          border: `1px solid ${config.color}`,
        }}
      >
        <span className="text-xs">{config.icon}</span>
        <span className="font-medium">{config.label}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
            {statuses.map((status) => {
              const statusConf = statusConfig[status];
              return (
                <button
                  key={status}
                  onClick={() => handleStatusClick(status)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors duration-150"
                >
                  <span className="text-xs">{statusConf.icon}</span>
                  <span className="flex-1 text-left font-medium text-gray-700">
                    {statusConf.label}
                  </span>
                  {status === currentStatus && (
                    <Check className="w-4 h-4 text-blue-600" />
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
