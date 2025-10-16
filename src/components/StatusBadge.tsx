import React from 'react';
import { Status, statusConfig } from '../styles/tokens';

interface StatusBadgeProps {
  status: Status;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function StatusBadge({ status, showIcon = true, size = 'md' }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  const sizeClasses = {
    sm: 'px-2 py-1 gap-1.5',
    md: 'px-3 py-1.5 gap-2',
    lg: 'px-4 py-2 gap-2',
  };
  
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };
  
  return (
    <span
      className={`inline-flex items-center rounded-full ${sizeClasses[size]} ${textSizes[size]} transition-all duration-150`}
      style={{
        backgroundColor: config.bgColor,
        color: config.color,
      }}
    >
      {showIcon && <span className="text-xs">{config.icon}</span>}
      <span className="font-medium">{config.label}</span>
    </span>
  );
}
