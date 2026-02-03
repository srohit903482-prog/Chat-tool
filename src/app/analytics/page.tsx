'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { 
  Download,
  TrendingUp,
  TrendingDown,
  MessageCircle,
  Clock,
  Star,
  Users,
  CheckCircle,
  XCircle,
  BarChart3
} from 'lucide-react';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d');
  const [reportType, setReportType] = useState('chat');

  const chatStats = {
    totalChats: 342,
    completedChats: 298,
    missedChats: 44,
    averageDuration: 285,
    satisfactionScore: 4.7,
    avgResponseTime: 32,
  };

  const agentPerformance = [
    { name: 'John Smith', avatar: 'https://i.pravatar.cc/150?img=1', chats: 45, responseTime: 28, availability: 95, satisfaction: 4.9 },
    { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=5', chats: 38, responseTime: 25, availability: 92, satisfaction: 4.8 },
    { name: 'Mike Wilson', avatar: 'https://i.pravatar.cc/150?img=3', chats: 32, responseTime: 35, availability: 88, satisfaction: 4.7 },
    { name: 'Emily Davis', avatar: 'https://i.pravatar.cc/150?img=9', chats: 28, responseTime: 30, availability: 90, satisfaction: 4.6 },
  ];

  const dailyStats = [
    { date: 'Mon', chats: 45, completed: 42, missed: 3 },
    { date: 'Tue', chats: 52, completed: 48, missed: 4 },
    { date: 'Wed', chats: 48, completed: 44, missed: 4 },
    { date: 'Thu', chats: 55, completed: 50, missed: 5 },
    { date: 'Fri', chats: 62, completed: 58, missed: 4 },
    { date: 'Sat', chats: 38, completed: 32, missed: 6 },
    { date: 'Sun', chats: 42, completed: 38, missed: 4 },
  ];

  const timeRangeOptions = [
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' },
    { value: '1y', label: 'Last Year' },
  ];

  const reportTypeOptions = [
    { value: 'chat', label: 'Chat Reports' },
    { value: 'agent', label: 'Agent Reports' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
            <p className="text-slate-600 mt-1">Track performance and gain insights</p>
          </div>
          <div className="flex gap-2">
            <Select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              options={reportTypeOptions}
              className="w-48"
            />
            <Select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              options={timeRangeOptions}
              className="w-40"
            />
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Chat Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Chats</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{chatStats.totalChats}</p>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12% from last period
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Completion Rate</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">
                    {Math.round((chatStats.completedChats / chatStats.totalChats) * 100)}%
                  </p>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +5% improvement
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Avg. Duration</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">
                    {Math.floor(chatStats.averageDuration / 60)}m {chatStats.averageDuration % 60}s
                  </p>
                  <p className="text-xs text-red-600 mt-1 flex items-center">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    -8% faster
                  </p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Satisfaction</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{chatStats.satisfactionScore}</p>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    +0.2 points
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart Section */}
        <Card>
          <CardHeader>
            <CardTitle>Chat Volume Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-around gap-4 px-4">
              {dailyStats.map((stat, index) => {
                const maxChats = Math.max(...dailyStats.map(s => s.chats));
                const height = (stat.chats / maxChats) * 200;
                return (
                  <div key={stat.date} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-slate-100 rounded-t-lg relative" style={{ height: `${height}px` }}>
                      <div className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-lg" style={{ height: `${(stat.completed / stat.chats) * 100}%` }} />
                      <div className="absolute bottom-0 left-0 right-0 bg-red-400 rounded-b-lg" style={{ height: `${(stat.missed / stat.chats) * 100}%` }} />
                    </div>
                    <span className="text-xs text-slate-600 font-medium">{stat.date}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded" />
                <span className="text-sm text-slate-600">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded" />
                <span className="text-sm text-slate-600">Missed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Agent Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Agent Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Agent</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Chats Handled</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Avg. Response Time</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Availability</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Satisfaction</th>
                  </tr>
                </thead>
                <tbody>
                  {agentPerformance.map((agent) => (
                    <tr key={agent.name} className="border-b border-slate-100">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img src={agent.avatar} alt={agent.name} className="w-10 h-10 rounded-full" />
                          <span className="font-medium text-slate-900">{agent.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-900">{agent.chats}</td>
                      <td className="py-3 px-4 text-slate-900">{agent.responseTime}s</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${agent.availability}%` }}
                            />
                          </div>
                          <span className="text-sm text-slate-600">{agent.availability}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1 text-yellow-600">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-medium">{agent.satisfaction}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Chat Status Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Completed</span>
                    <span className="text-sm font-medium text-slate-900">{chatStats.completedChats}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full"
                      style={{ width: `${(chatStats.completedChats / chatStats.totalChats) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Missed</span>
                    <span className="text-sm font-medium text-slate-900">{chatStats.missedChats}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-red-500 h-3 rounded-full"
                      style={{ width: `${(chatStats.missedChats / chatStats.totalChats) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Time Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-600">Average Response Time</span>
                  <span className="font-semibold text-slate-900">{chatStats.avgResponseTime}s</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-600">Target Response Time</span>
                  <span className="font-semibold text-slate-900">30s</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-green-700 font-medium">Performance Rating</span>
                  <span className="font-semibold text-green-700">Good</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}