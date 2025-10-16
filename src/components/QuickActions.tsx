import React from 'react';
import { BookOpen, Phone, BarChart3, HelpCircle } from 'lucide-react';

export function QuickActions() {
  const actions = [
    { icon: BookOpen, label: 'Knowledge Base', color: 'bg-blue-50 hover:bg-blue-100 text-blue-700' },
    { icon: Phone, label: 'Call History', color: 'bg-green-50 hover:bg-green-100 text-green-700' },
    { icon: BarChart3, label: 'My Reports', color: 'bg-purple-50 hover:bg-purple-100 text-purple-700' },
    { icon: HelpCircle, label: 'Request Help', color: 'bg-orange-50 hover:bg-orange-100 text-orange-700' },
  ];
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="grid grid-cols-2 gap-3">
        {actions.map(({ icon: Icon, label, color }) => (
          <button
            key={label}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-150 ${color}`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
