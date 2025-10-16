import React, { useState } from 'react';
import { AgentDashboard } from './components/AgentDashboard';
import { SupervisorDashboard } from './components/SupervisorDashboard';
import { Users, UserCircle } from 'lucide-react';
import { Toaster } from './components/ui/sonner';

type ViewMode = 'agent' | 'supervisor';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('agent');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="bottom-right" />
      
      {/* View Mode Switcher */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full shadow-lg border border-gray-200 p-1 flex gap-1">
        <button
          onClick={() => setViewMode('agent')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
            viewMode === 'agent'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <UserCircle className="w-4 h-4" />
          <span className="font-medium">Agent View</span>
        </button>
        <button
          onClick={() => setViewMode('supervisor')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
            viewMode === 'supervisor'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span className="font-medium">Supervisor View</span>
        </button>
      </div>
      
      {/* Main Content */}
      <div className="pt-4">
        {viewMode === 'agent' ? <AgentDashboard /> : <SupervisorDashboard />}
      </div>
    </div>
  );
}
