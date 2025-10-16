import { Status } from '../styles/tokens';

export interface Agent {
  id: string;
  name: string;
  status: Status;
  callCount: number;
  avgHandleTime: string;
  lastUpdate: string;
  satisfaction?: number;
  currentCallDuration?: string;
  breaksUsed?: number;
  breaksTotal?: number;
}

export interface Message {
  id: string;
  from: string;
  fromId: string;
  type: 'direct' | 'broadcast' | 'urgent';
  subject: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  priority?: 'high' | 'normal' | 'low';
}

export interface Schedule {
  id: string;
  time: string;
  title: string;
  type: 'break' | 'meeting' | 'task';
  location?: string;
  duration?: string;
}

export interface Stats {
  callsToday: number;
  callsTarget: number;
  avgHandleTime: string;
  avgHandleTimeDiff: string;
  satisfaction: number;
  satisfactionDiff: number;
}

export interface TeamMetrics {
  totalAgents: number;
  onlineAgents: number;
  callsToday: number;
  avgTime: string;
  csat: number;
  sla: number;
  slaTarget: number;
}

export interface Alert {
  id: string;
  type: 'warning' | 'info' | 'critical';
  agentId: string;
  agentName: string;
  message: string;
  details?: string;
  timestamp: string;
}
