'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { BarChart3, MessageCircle, Users, Clock, TrendingUp, Star } from 'lucide-react';

export default function HomeAnalyticsPage() {
  const quickStats = [
    { label: 'Total Chats', value: '342', icon: MessageCircle, change: '+12%', positive: true },
    { label: 'Avg Response Time', value: '32s', icon: Clock, change: '-5%', positive: true },
    { label: 'Satisfaction Score', value: '4.7', icon: Star, change: '+0.3', positive: true },
    { label: 'Active Agents', value: '4', icon: Users, change: '+1', positive: true },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Analytics Overview</h1>
          <p className="text-slate-600 mt-1">Quick view of your chat performance metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {quickStats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                    <p className={`text-xs mt-1 ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from last week
                    </p>
                  </div>
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Chat Volume Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-end justify-between gap-2 px-4">
                {[45, 52, 48, 55, 62, 38, 42].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-primary-500 rounded-t transition-all hover:bg-primary-600"
                      style={{ height: `${(value / 62) * 100}%` }}
                    />
                    <span className="text-xs text-slate-500 mt-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agent Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'John Smith', chats: 45, rating: 4.9 },
                  { name: 'Sarah Johnson', chats: 38, rating: 4.8 },
                  { name: 'Mike Wilson', chats: 32, rating: 4.7 },
                ].map((agent) => (
                  <div key={agent.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://i.pravatar.cc/150?img=${agent.name.includes('John') ? 1 : agent.name.includes('Sarah') ? 5 : 3}`}
                        alt={agent.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-slate-900">{agent.name}</p>
                        <p className="text-sm text-slate-600">{agent.chats} chats</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium text-slate-900">{agent.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Detailed Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-slate-200 rounded-lg hover:border-primary-500 cursor-pointer transition-colors">
                <h4 className="font-semibold text-slate-900 mb-2">Chat Reports</h4>
                <p className="text-sm text-slate-600">View detailed chat analytics and trends</p>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg hover:border-primary-500 cursor-pointer transition-colors">
                <h4 className="font-semibold text-slate-900 mb-2">Agent Reports</h4>
                <p className="text-sm text-slate-600">Track individual agent performance</p>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg hover:border-primary-500 cursor-pointer transition-colors">
                <h4 className="font-semibold text-slate-900 mb-2">Export Data</h4>
                <p className="text-sm text-slate-600">Download reports as CSV or PDF</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}