import React from 'react';
import { Lightbulb } from 'lucide-react';

export function TipsWidget() {
  const tips = [
    { key: 'F2', action: 'Available' },
    { key: 'F3', action: 'Busy' },
    { key: 'F4', action: 'Break' },
    { key: 'Ctrl+M', action: 'Messages' },
  ];
  
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="w-5 h-5 text-yellow-600" />
        <h3 className="font-semibold text-yellow-900">TIP OF THE DAY</h3>
      </div>
      
      <p className="text-sm text-yellow-800 mb-3">
        Use keyboard shortcuts to work faster:
      </p>
      
      <ul className="space-y-1.5 mb-4">
        {tips.map((tip) => (
          <li key={tip.key} className="text-sm text-yellow-800 flex items-center gap-2">
            <kbd className="px-2 py-0.5 bg-yellow-100 border border-yellow-300 rounded text-xs font-mono">
              {tip.key}
            </kbd>
            <span>→ {tip.action}</span>
          </li>
        ))}
      </ul>
      
      <button className="text-sm text-yellow-700 hover:text-yellow-900 font-medium hover:underline">
        Learn More Shortcuts →
      </button>
    </div>
  );
}
