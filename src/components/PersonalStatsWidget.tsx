import React from 'react';
import { Phone, Clock, Star, TrendingUp, TrendingDown } from 'lucide-react';
import { Stats } from '../types';

interface PersonalStatsWidgetProps {
  stats: Stats;
}

export function PersonalStatsWidget({ stats }: PersonalStatsWidgetProps) {
  const progress = (stats.callsToday / stats.callsTarget) * 100;
  const remaining = stats.callsTarget - stats.callsToday;
  
  const isTimeImproved = stats.avgHandleTimeDiff.startsWith('-');
  const isSatImproved = stats.satisfactionDiff > 0;
  
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
      <h3 className="font-semibold mb-4">Today's Progress</h3>
      
      {/* Calls Progress */}
      <div className="mb-6">
        <div className="flex items-baseline justify-between mb-2">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="text-2xl font-bold">{stats.callsToday}/{stats.callsTarget}</span>
          </div>
          <span className="text-sm opacity-90">{Math.round(progress)}%</span>
        </div>
        
        <div className="w-full bg-white/20 rounded-full h-2 mb-1">
          <div 
            className="bg-white rounded-full h-2 transition-all duration-500"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        
        <p className="text-sm opacity-90">
          Target: {remaining} more call{remaining !== 1 ? 's' : ''}
        </p>
      </div>
      
      {/* Avg Handle Time */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Avg Handle Time</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">{stats.avgHandleTime}</span>
            <span className={`text-xs flex items-center gap-0.5 ${isTimeImproved ? 'text-green-200' : 'text-red-200'}`}>
              {isTimeImproved ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
              {stats.avgHandleTimeDiff}
            </span>
          </div>
        </div>
      </div>
      
      {/* Customer Satisfaction */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm">Customer Satisfaction</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">{stats.satisfaction}⭐</span>
            <span className={`text-xs flex items-center gap-0.5 ${isSatImproved ? 'text-green-200' : 'text-red-200'}`}>
              {isSatImproved ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {isSatImproved ? '+' : ''}{stats.satisfactionDiff}
            </span>
          </div>
        </div>
      </div>
      
      <button className="w-full bg-white/20 hover:bg-white/30 text-white rounded-lg py-2 text-sm font-medium transition-colors duration-150">
        View Details →
      </button>
    </div>
  );
}
