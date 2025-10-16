import React, { useState } from 'react';
import { Bell, Settings, Search, MessageSquarePlus } from 'lucide-react';
import { MetricsDashboard } from './MetricsDashboard';
import { AlertPanel } from './AlertPanel';
import { AgentCard } from './AgentCard';
import { AgentDetailModal } from './AgentDetailModal';
import { Agent, TeamMetrics, Alert } from '../types';
import { Status } from '../styles/tokens';
import { toast } from 'sonner@2.0.3';

export function SupervisorDashboard() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [filterStatus, setFilterStatus] = useState<Status | 'all'>('all');
  const [showOffline, setShowOffline] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const metrics: TeamMetrics = {
    totalAgents: 12,
    onlineAgents: 8,
    callsToday: 147,
    avgTime: '4m 32s',
    csat: 4.7,
    sla: 94,
    slaTarget: 95,
  };
  
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'warning',
      agentId: 'AG002',
      agentName: 'Emma Davis',
      message: 'Long call duration (12 mins)',
      details: 'Average: 6m 45s | This call: 12m 20s',
      timestamp: 'Just now',
    },
  ]);
  
  const agents: Agent[] = [
    {
      id: 'AG001',
      name: 'John Smith',
      status: 'available',
      callCount: 12,
      avgHandleTime: '5m 20s',
      lastUpdate: 'just now',
      satisfaction: 4.8,
    },
    {
      id: 'AG002',
      name: 'Emma Davis',
      status: 'busy',
      callCount: 15,
      avgHandleTime: '6m 45s',
      lastUpdate: 'just now',
      currentCallDuration: '12m 20s',
      satisfaction: 4.6,
    },
    {
      id: 'AG005',
      name: 'Lisa Wong',
      status: 'available',
      callCount: 8,
      avgHandleTime: '4m 10s',
      lastUpdate: '1m ago',
      satisfaction: 4.9,
    },
    {
      id: 'AG007',
      name: 'Mike Lee',
      status: 'break',
      callCount: 14,
      avgHandleTime: '5m 05s',
      lastUpdate: 'just now',
      breaksUsed: 2,
      breaksTotal: 3,
    },
    {
      id: 'AG003',
      name: 'Sarah Chen',
      status: 'available',
      callCount: 10,
      avgHandleTime: '4m 50s',
      lastUpdate: '2m ago',
      satisfaction: 4.7,
    },
    {
      id: 'AG004',
      name: 'Tom Brown',
      status: 'busy',
      callCount: 13,
      avgHandleTime: '5m 30s',
      lastUpdate: 'just now',
      currentCallDuration: '3m 15s',
    },
    {
      id: 'AG006',
      name: 'Amy Park',
      status: 'available',
      callCount: 9,
      avgHandleTime: '5m 15s',
      lastUpdate: 'just now',
      satisfaction: 4.8,
    },
    {
      id: 'AG008',
      name: 'Dan Kim',
      status: 'available',
      callCount: 11,
      avgHandleTime: '4m 45s',
      lastUpdate: '1m ago',
      satisfaction: 4.9,
    },
    {
      id: 'AG009',
      name: 'Rachel Green',
      status: 'offline',
      callCount: 0,
      avgHandleTime: '0m',
      lastUpdate: '2h ago',
    },
    {
      id: 'AG010',
      name: 'Ross Geller',
      status: 'offline',
      callCount: 0,
      avgHandleTime: '0m',
      lastUpdate: '3h ago',
    },
  ];
  
  const filteredAgents = agents.filter(agent => {
    const matchesStatus = filterStatus === 'all' || agent.status === filterStatus;
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVisibility = showOffline || agent.status !== 'offline';
    return matchesStatus && matchesSearch && matchesVisibility;
  });
  
  const onlineAgents = filteredAgents.filter(a => a.status !== 'offline');
  const offlineAgents = agents.filter(a => a.status === 'offline');
  
  const statusCounts = {
    available: agents.filter(a => a.status === 'available').length,
    busy: agents.filter(a => a.status === 'busy').length,
    break: agents.filter(a => a.status === 'break').length,
    offline: agents.filter(a => a.status === 'offline').length,
  };
  
  const handleMessage = (agentId: string) => {
    toast.success(`Opening message to agent ${agentId}`);
  };
  
  const handleDismissAlert = (alertId: string) => {
    setAlerts(prev => prev.filter(a => a.id !== alertId));
    toast.success('Alert dismissed');
  };
  
  const handleViewDetail = (agentId: string) => {
    const agent = agents.find(a => a.id === agentId);
    if (agent) {
      setSelectedAgent(agent);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              AW
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Agent Wallboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Team: Customer Service</option>
              <option>Team: Technical Support</option>
              <option>Team: Sales</option>
            </select>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-150">
              <MessageSquarePlus className="w-4 h-4" />
              Send Message
            </button>
            
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150">
              <Bell className="w-5 h-5" />
              {alerts.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {alerts.length}
                </span>
              )}
            </button>
            
            <button className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                SW
              </div>
              <span className="font-medium">Sarah</span>
            </button>
            
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Metrics Dashboard */}
      <MetricsDashboard metrics={metrics} />
      
      {/* Alerts */}
      <AlertPanel 
        alerts={alerts}
        onDismiss={handleDismissAlert}
        onMessage={handleMessage}
        onViewDetail={handleViewDetail}
      />
      
      {/* Filters & Search */}
      <div className="px-8 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-150 ${
                filterStatus === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({agents.length})
            </button>
            <button
              onClick={() => setFilterStatus('available')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-150 ${
                filterStatus === 'available'
                  ? 'bg-green-600 text-white'
                  : 'bg-green-50 text-green-700 hover:bg-green-100'
              }`}
            >
              <span className="text-xs">🟢</span>
              Available {statusCounts.available}
            </button>
            <button
              onClick={() => setFilterStatus('busy')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-150 ${
                filterStatus === 'busy'
                  ? 'bg-orange-600 text-white'
                  : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
              }`}
            >
              <span className="text-xs">🟠</span>
              Busy {statusCounts.busy}
            </button>
            <button
              onClick={() => setFilterStatus('break')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-150 ${
                filterStatus === 'break'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              <span className="text-xs">🔵</span>
              Break {statusCounts.break}
            </button>
            <button
              onClick={() => setFilterStatus('offline')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-150 ${
                filterStatus === 'offline'
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-xs">⚫</span>
              Offline {statusCounts.offline}
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
            
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort: Status</option>
              <option>Sort: Name</option>
              <option>Sort: Calls</option>
            </select>
            
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>View: Grid</option>
              <option>View: List</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Agent Cards Grid */}
      <div className="p-8">
        <div className="grid grid-cols-4 gap-6 mb-6">
          {onlineAgents.map(agent => (
            <AgentCard
              key={agent.id}
              agent={agent}
              onMessage={handleMessage}
              onClick={handleViewDetail}
            />
          ))}
        </div>
        
        {!showOffline && offlineAgents.length > 0 && (
          <div className="text-center">
            <button
              onClick={() => setShowOffline(true)}
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-150"
            >
              Show {offlineAgents.length} Offline Agent{offlineAgents.length !== 1 ? 's' : ''} ▾
            </button>
          </div>
        )}
        
        {showOffline && offlineAgents.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Offline Agents</h3>
              <button
                onClick={() => setShowOffline(false)}
                className="text-sm text-gray-600 hover:underline"
              >
                Hide ▴
              </button>
            </div>
            <div className="grid grid-cols-4 gap-6 opacity-60">
              {offlineAgents.map(agent => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  onMessage={handleMessage}
                  onClick={handleViewDetail}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Agent Detail Modal */}
      {selectedAgent && (
        <AgentDetailModal
          agent={selectedAgent}
          onClose={() => setSelectedAgent(null)}
          onSendMessage={handleMessage}
        />
      )}
    </div>
  );
}
