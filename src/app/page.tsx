'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { 
  Users, 
  MessageSquare, 
  Clock, 
  TrendingUp,
  Activity,
  CheckCircle,
  XCircle,
  Star
} from 'lucide-react';

export default function HomePage() {
  const stats = [
    { label: 'Active Visitors', value: '24', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { label: 'Active Chats', value: '8', icon: MessageSquare, color: 'text-green-600', bgColor: 'bg-green-50' },
    { label: 'Avg. Wait Time', value: '45s', icon: Clock, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { label: 'Satisfaction', value: '4.8', icon: Star, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
  ];

  const recentActivity = [
    { id: 1, type: 'chat', message: 'New chat started with visitor #1247', time: '2 min ago', status: 'new' },
    { id: 2, type: 'message', message: 'Sarah Johnson resolved chat #1234', time: '5 min ago', status: 'resolved' },
    { id: 3, type: 'visitor', message: '15 new visitors on pricing page', time: '10 min ago', status: 'info' },
    { id: 4, type: 'alert', message: 'Queue size above threshold', time: '15 min ago', status: 'warning' },
  ];

  const topAgents = [
    { name: 'John Smith', chats: 45, satisfaction: 4.9, avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Sarah Johnson', chats: 38, satisfaction: 4.8, avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Mike Wilson', chats: 32, satisfaction: 4.7, avatar: 'https://i.pravatar.cc/150?img=3' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600 mt-1">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className={`mt-0.5 ${
                      activity.status === 'new' ? 'text-green-600' :
                      activity.status === 'resolved' ? 'text-blue-600' :
                      activity.status === 'warning' ? 'text-orange-600' : 'text-slate-600'
                    }`}>
                      {activity.status === 'new' ? <Activity className="w-5 h-5" /> :
                       activity.status === 'resolved' ? <CheckCircle className="w-5 h-5" /> :
                       activity.status === 'warning' ? <XCircle className="w-5 h-5" /> :
                       <Users className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-900">{activity.message}</p>
                      <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Agents */}
          <Card>
            <CardHeader>
              <CardTitle>Top Agents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topAgents.map((agent, index) => (
                  <div key={agent.name} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <img src={agent.avatar} alt={agent.name} className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">{agent.name}</p>
                      <p className="text-xs text-slate-500">{agent.chats} chats</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-600">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{agent.satisfaction}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Active Visitors</h3>
                  <p className="text-sm text-slate-600">View and engage with 24 visitors</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Active Chats</h3>
                  <p className="text-sm text-slate-600">8 conversations in progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Analytics</h3>
                  <p className="text-sm text-slate-600">View performance reports</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}