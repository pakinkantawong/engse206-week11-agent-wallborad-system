import React from 'react';
import { Users, CheckCircle, Phone, Clock, Star } from 'lucide-react';
import { TeamMetrics } from '../types';

interface MetricsDashboardProps {
  metrics: TeamMetrics;
}

export function MetricsDashboard({ metrics }: MetricsDashboardProps) {
  const metricsData = [
    {
      icon: Users,
      value: metrics.totalAgents,
      label: 'Total Agents',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
    },
    {
      icon: CheckCircle,
      value: metrics.onlineAgents,
      label: 'Online Now',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Phone,
      value: metrics.callsToday,
      label: 'Calls Today',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Clock,
      value: metrics.avgTime,
      label: 'Avg Time Today',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Star,
      value: `${metrics.csat}⭐`,
      label: 'CSAT Today',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ];
  
  const slaProgress = (metrics.sla / metrics.slaTarget) * 100;
  const slaStatus = metrics.sla >= metrics.slaTarget ? 'text-green-600' : 'text-orange-600';
  
  return (
    <div className="bg-white border-b border-gray-200 p-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {metricsData.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className={`${metric.bgColor} rounded-xl p-4 border border-gray-200 hover:border-blue-500 transition-all duration-150`}
            >
              <Icon className={`w-8 h-8 ${metric.color} mb-2`} />
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          );
        })}
      </div>
      
      {/* SLA Bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Real-time SLA</span>
          <span className={`text-sm font-semibold ${slaStatus}`}>
            {metrics.sla}% (Target: {metrics.slaTarget}%)
            {metrics.sla < metrics.slaTarget && ' ⚠️'}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              metrics.sla >= metrics.slaTarget 
                ? 'bg-gradient-to-r from-green-500 to-green-600' 
                : 'bg-gradient-to-r from-orange-500 to-orange-600'
            }`}
            style={{ width: `${Math.min(slaProgress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
