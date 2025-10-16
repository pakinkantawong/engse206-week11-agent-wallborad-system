import React from 'react';
import { Coffee, Calendar, Clock } from 'lucide-react';
import { Schedule } from '../types';

interface UpcomingScheduleProps {
  schedule: Schedule[];
}

export function UpcomingSchedule({ schedule }: UpcomingScheduleProps) {
  const getIcon = (type: Schedule['type']) => {
    switch (type) {
      case 'break': return Coffee;
      case 'meeting': return Calendar;
      default: return Clock;
    }
  };
  
  const getColor = (type: Schedule['type']) => {
    switch (type) {
      case 'break': return 'text-blue-600';
      case 'meeting': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="text-sm font-semibold text-gray-700 mb-4">SCHEDULE</h3>
      
      <div className="space-y-4">
        {schedule.map((item, index) => {
          const Icon = getIcon(item.type);
          const color = getColor(item.type);
          
          return (
            <div key={item.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${color.replace('text', 'bg')}`} />
                {index < schedule.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 my-1" />
                )}
              </div>
              
              <div className="flex-1 pb-2">
                <div className="text-sm text-gray-500 mb-1">{item.time}</div>
                <div className="flex items-start gap-2">
                  <Icon className={`w-4 h-4 mt-0.5 ${color}`} />
                  <div>
                    <div className="font-medium text-gray-900">{item.title}</div>
                    {item.location && (
                      <div className="text-sm text-gray-500 mt-0.5">{item.location}</div>
                    )}
                    {item.duration && (
                      <div className="text-xs text-gray-400 mt-0.5">{item.duration}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
