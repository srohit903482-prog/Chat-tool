'use client';

import { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { 
  Users,
  Clock,
  MessageCircle,
  TrendingUp,
  Activity,
  UserCheck,
  Star,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  RefreshCw
} from 'lucide-react';

export default function MonitorPage() {
  const [isLive, setIsLive] = useState(true);

  const kpis = [
    {
      label: 'Queue Size',
      value: 5,
      unit: 'visitors',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: -2,
      trendUp: false,
    },
    {
      label: 'Avg. Wait Time',
      value: 45,
      unit: 'seconds',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      trend: 5,
      trendUp: false,
    },
    {
      label: 'Missed Chats',
      value: 12,
      unit: 'today',
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      trend: 3,
      trendUp: true,
    },
    {
      label: 'Active Chats',
      value: 8,
      unit: 'now',
      icon: MessageCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: 2,
      trendUp: true,
    },
    {
      label: 'Avg. Chat Duration',
      value: 285,
      unit: 'seconds',
      icon: Activity,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trend: 15,
      trendUp: true,
    },
    {
      label: 'Avg. Response Time',
      value: 32,
      unit: 'seconds',
      icon: Clock,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      trend: 3,
      trendUp: false,
    },
    {
      label: 'Active Agents',
      value: 4,
      unit: 'online',
      icon: UserCheck,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      trend: 1,
      trendUp: true,
    },
    {
      label: 'Satisfaction Score',
      value: 4.7,
      unit: '/ 5.0',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      trend: 0.2,
      trendUp: true,
    },
  ];

  const activeAgents = [
    { name: 'John Smith', avatar: 'https://i.pravatar.cc/150?img=1', activeChats: 3, status: 'available', lastActive: 'Just now' },
    { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=5', activeChats: 2, status: 'busy', lastActive: '1 min ago' },
    { name: 'Mike Wilson', avatar: 'https://i.pravatar.cc/150?img=3', activeChats: 2, status: 'available', lastActive: '2 min ago' },
    { name: 'Emily Davis', avatar: 'https://i.pravatar.cc/150?img=9', activeChats: 1, status: 'away', lastActive: '5 min ago' },
  ];

  const recentActivity = [
    { id: 1, type: 'chat_started', message: 'New chat #1251 started', time: 'Just now', agent: 'System' },
    { id: 2, type: 'chat_assigned', message: 'Chat #1250 assigned to John Smith', time: '1 min ago', agent: 'Auto-router' },
    { id: 3, type: 'chat_ended', message: 'Chat #1249 completed by Sarah Johnson', time: '2 min ago', agent: 'Sarah Johnson' },
    { id: 4, type: 'agent_status', message: 'Mike Wilson is now available', time: '3 min ago', agent: 'Mike Wilson' },
    { id: 5, type: 'visitor_joined', message: 'Guest #1252 joined the queue', time: '4 min ago', agent: 'System' },
  ];

  // Simulate live updates
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      // In production, this would be a WebSocket connection
      console.log('Live update received');
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Monitor</h1>
            <p className="text-slate-600 mt-1">Real-time dashboard and live metrics</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
              <span className="text-sm text-slate-600">{isLive ? 'Live' : 'Paused'}</span>
            </div>
            <Button variant="outline" onClick={() => setIsLive(!isLive)}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isLive ? 'animate-spin' : ''}`} />
              {isLive ? 'Pause' : 'Resume'}
            </Button>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <Card key={kpi.label} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-600">{kpi.label}</p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <p className="text-3xl font-bold text-slate-900">{kpi.value}</p>
                      <p className="text-sm text-slate-500">{kpi.unit}</p>
                    </div>
                    <div className={`flex items-center gap-1 mt-2 text-sm ${
                      kpi.trendUp ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {kpi.trendUp ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )}
                      <span>{Math.abs(kpi.trend)}% from yesterday</span>
                    </div>
                  </div>
                  <div className={`${kpi.bgColor} p-3 rounded-lg`}>
                    <kpi.icon className={`w-8 h-8 ${kpi.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Agents */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Active Agents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeAgents.map((agent) => (
                  <div
                    key={agent.name}
                    className="flex items-center gap-4 p-4 rounded-lg border border-slate-200"
                  >
                    <img src={agent.avatar} alt={agent.name} className="w-12 h-12 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-slate-900">{agent.name}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          agent.status === 'available' ? 'bg-green-100 text-green-800' :
                          agent.status === 'busy' ? 'bg-orange-100 text-orange-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {agent.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-slate-600">
                        <span>{agent.activeChats} active chats</span>
                        <span>•</span>
                        <span>{agent.lastActive}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-slate-400" />
                      <span className="text-sm font-medium text-slate-900">{agent.activeChats}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity Feed */}
          <Card>
            <CardHeader>
              <CardTitle>Live Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-thin">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className={`mt-0.5 ${
                      activity.type === 'chat_started' ? 'text-green-600' :
                      activity.type === 'chat_assigned' ? 'text-blue-600' :
                      activity.type === 'chat_ended' ? 'text-purple-600' :
                      activity.type === 'agent_status' ? 'text-orange-600' :
                      'text-slate-600'
                    }`}>
                      {activity.type === 'chat_started' ? <MessageCircle className="w-5 h-5" /> :
                       activity.type === 'chat_assigned' ? <Users className="w-5 h-5" /> :
                       activity.type === 'chat_ended' ? <Activity className="w-5 h-5" /> :
                       activity.type === 'agent_status' ? <UserCheck className="w-5 h-5" /> :
                       <AlertCircle className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-900">{activity.message}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {activity.agent} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Queue Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Queue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold text-slate-900">5</p>
                    <p className="text-sm text-slate-600">Waiting in queue</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-orange-600" />
                  <div>
                    <p className="text-2xl font-bold text-slate-900">45s</p>
                    <p className="text-sm text-slate-600">Average wait time</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold text-slate-900">87%</p>
                    <p className="text-sm text-slate-600">SLA compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}