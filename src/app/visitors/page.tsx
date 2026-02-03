'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { 
  MessageSquare, 
  Search, 
  Filter,
  Globe,
  MapPin,
  Clock,
  MessageCircle,
  Eye
} from 'lucide-react';
import { formatRelativeTime } from '@/lib/utils/date';

export default function VisitorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVisitor, setSelectedVisitor] = useState<string | null>(null);

  const visitors = [
    {
      id: 'visitor-1',
      name: 'Guest #1247',
      online: true,
      numChats: 3,
      numVisits: 5,
      referrer: 'https://google.com',
      currentPage: '/products/plans',
      country: 'United States',
      city: 'New York',
      ipAddress: '192.168.1.100',
      timeOnPage: 180,
      device: 'Desktop',
      browser: 'Chrome',
    },
    {
      id: 'visitor-2',
      name: 'Guest #1248',
      online: true,
      numChats: 1,
      numVisits: 2,
      referrer: 'https://linkedin.com',
      currentPage: '/pricing',
      country: 'United Kingdom',
      city: 'London',
      ipAddress: '192.168.1.101',
      timeOnPage: 95,
      device: 'Desktop',
      browser: 'Safari',
    },
    {
      id: 'visitor-3',
      name: 'Guest #1249',
      online: false,
      numChats: 0,
      numVisits: 1,
      referrer: 'https://twitter.com',
      currentPage: '/contact',
      country: 'Canada',
      city: 'Toronto',
      ipAddress: '192.168.1.102',
      timeOnPage: 45,
      device: 'Mobile',
      browser: 'Safari',
    },
    {
      id: 'visitor-4',
      name: 'John Doe',
      online: true,
      numChats: 8,
      numVisits: 12,
      referrer: 'Direct',
      currentPage: '/dashboard',
      country: 'Germany',
      city: 'Berlin',
      ipAddress: '192.168.1.103',
      timeOnPage: 420,
      device: 'Desktop',
      browser: 'Firefox',
    },
    {
      id: 'visitor-5',
      name: 'Guest #1250',
      online: true,
      numChats: 2,
      numVisits: 3,
      referrer: 'https://facebook.com',
      currentPage: '/blog/getting-started',
      country: 'France',
      city: 'Paris',
      ipAddress: '192.168.1.104',
      timeOnPage: 120,
      device: 'Tablet',
      browser: 'Chrome',
    },
  ];

  const filteredVisitors = visitors.filter(visitor =>
    visitor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    visitor.currentPage.toLowerCase().includes(searchQuery.toLowerCase()) ||
    visitor.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onlineVisitors = visitors.filter(v => v.online).length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Visitors</h1>
            <p className="text-slate-600 mt-1">Monitor and engage with website visitors in real-time</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
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
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Total Today</p>
                  <p className="text-xl font-bold text-slate-900">{visitors.length}</p>
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
                  <p className="text-xl font-bold text-slate-900">4</p>
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
                  <p className="text-sm text-slate-600">Avg. Time</p>
                  <p className="text-xl font-bold text-slate-900">3m 24s</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search visitors by name, page, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Visitors Table */}
        <Card>
          <CardHeader>
            <CardTitle>Active Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Visitor</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Chats</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Visits</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Current Page</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Location</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Time on Page</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVisitors.map((visitor) => (
                    <tr
                      key={visitor.id}
                      className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${visitor.online ? 'bg-green-500' : 'bg-gray-400'}`} />
                          <div>
                            <p className="font-medium text-slate-900">{visitor.name}</p>
                            <p className="text-xs text-slate-500">{visitor.ipAddress}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          visitor.online 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {visitor.online ? 'Online' : 'Offline'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-900">{visitor.numChats}</td>
                      <td className="py-3 px-4 text-slate-900">{visitor.numVisits}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-900 text-sm">{visitor.currentPage}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <MapPin className="w-4 h-4" />
                          {visitor.city}, {visitor.country}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-900">
                        {Math.floor(visitor.timeOnPage / 60)}m {visitor.timeOnPage % 60}s
                      </td>
                      <td className="py-3 px-4">
                        <Button 
                          size="sm" 
                          variant={visitor.online ? 'primary' : 'secondary'}
                          disabled={!visitor.online}
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Chat
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}