'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { MessageSquare, Search, Globe, Clock, Eye, UserPlus } from 'lucide-react';

export default function HomeVisitorsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const visitors = [
    {
      id: 'visitor-1',
      name: 'Guest #1247',
      online: true,
      numChats: 3,
      numVisits: 5,
      currentPage: '/products/plans',
      country: 'United States',
      timeOnPage: 180,
    },
    {
      id: 'visitor-2',
      name: 'Guest #1248',
      online: true,
      numChats: 1,
      numVisits: 2,
      currentPage: '/pricing',
      country: 'United Kingdom',
      timeOnPage: 95,
    },
    {
      id: 'visitor-3',
      name: 'Guest #1249',
      online: true,
      numChats: 0,
      numVisits: 1,
      currentPage: '/contact',
      country: 'Canada',
      timeOnPage: 45,
    },
    {
      id: 'visitor-4',
      name: 'John Doe',
      online: false,
      numChats: 8,
      numVisits: 12,
      currentPage: '/dashboard',
      country: 'Germany',
      timeOnPage: 0,
    },
  ];

  const onlineVisitors = visitors.filter(v => v.online).length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Visitors Overview</h1>
            <p className="text-slate-600 mt-1">Real-time visitor monitoring dashboard</p>
          </div>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            View All Visitors
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-50 p-2 rounded-lg">
                  <Eye className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Online Now</p>
                  <p className="text-xl font-bold text-slate-900">{onlineVisitors}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <UserPlus className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Total Today</p>
                  <p className="text-xl font-bold text-slate-900">247</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-50 p-2 rounded-lg">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Countries</p>
                  <p className="text-xl font-bold text-slate-900">18</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-50 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Avg Time</p>
                  <p className="text-xl font-bold text-slate-900">3m 45s</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search visitors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="space-y-3">
              {visitors.map((visitor) => (
                <div
                  key={visitor.id}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${
                      visitor.online ? 'bg-green-500' : 'bg-gray-400'
                    }`} />
                    <div>
                      <p className="font-medium text-slate-900">{visitor.name}</p>
                      <p className="text-sm text-slate-600">{visitor.currentPage}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-slate-600">{visitor.country}</p>
                      <p className="text-xs text-slate-500">{visitor.numChats} chats</p>
                    </div>
                    {visitor.online && (
                      <Button size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Chat
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}