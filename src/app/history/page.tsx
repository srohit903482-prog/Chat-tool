'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { 
  Search, 
  Filter,
  Download,
  Calendar,
  Clock,
  User,
  Star,
  MessageCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { formatRelativeTime, formatDuration } from '@/lib/utils/date';

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const chats = [
    {
      id: 'chat-1',
      visitor: { name: 'Alice Johnson', email: 'alice@example.com' },
      agent: { name: 'John Smith', avatar: 'https://i.pravatar.cc/150?img=1' },
      status: 'completed',
      satisfaction: 5,
      duration: 450,
      startTime: new Date(Date.now() - 3600000),
      department: 'Sales',
      tags: ['sales', 'product'],
      lastMessage: 'Thank you for your help, I\'ll proceed with the premium plan.',
    },
    {
      id: 'chat-2',
      visitor: { name: 'Bob Wilson', email: 'bob@example.com' },
      agent: { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=5' },
      status: 'completed',
      satisfaction: 4,
      duration: 280,
      startTime: new Date(Date.now() - 7200000),
      department: 'Support',
      tags: ['technical', 'troubleshooting'],
      lastMessage: 'Great, that resolved my issue. Thanks for the quick response!',
    },
    {
      id: 'chat-3',
      visitor: { name: 'Guest #1247', email: 'guest@example.com' },
      agent: { name: 'Mike Wilson', avatar: 'https://i.pravatar.cc/150?img=3' },
      status: 'missed',
      satisfaction: null,
      duration: 120,
      startTime: new Date(Date.now() - 10800000),
      department: 'Support',
      tags: ['missed'],
      lastMessage: 'Visitor left before agent could respond.',
    },
    {
      id: 'chat-4',
      visitor: { name: 'Carol Davis', email: 'carol@example.com' },
      agent: { name: 'Emily Davis', avatar: 'https://i.pravatar.cc/150?img=9' },
      status: 'completed',
      satisfaction: 5,
      duration: 520,
      startTime: new Date(Date.now() - 14400000),
      department: 'Billing',
      tags: ['billing', 'refund'],
      lastMessage: 'Perfect, I received my refund confirmation. Thank you!',
    },
    {
      id: 'chat-5',
      visitor: { name: 'David Brown', email: 'david@example.com' },
      agent: { name: 'John Smith', avatar: 'https://i.pravatar.cc/150?img=1' },
      status: 'completed',
      satisfaction: 3,
      duration: 680,
      startTime: new Date(Date.now() - 18000000),
      department: 'Sales',
      tags: ['sales', 'enterprise'],
      lastMessage: 'I need more time to consider the enterprise plan.',
    },
  ];

  const filteredChats = chats.filter(chat => {
    const matchesSearch = 
      chat.visitor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.visitor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || chat.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'completed', label: 'Completed' },
    { value: 'missed', label: 'Missed' },
    { value: 'active', label: 'Active' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Chat History</h1>
            <p className="text-slate-600 mt-1">View and manage all past conversations</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search by visitor name, email, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                options={statusOptions}
                className="w-full md:w-48"
              />
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Chat List */}
        <div className="space-y-4">
          {filteredChats.map((chat) => (
            <Card key={chat.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Agent Avatar */}
                  <img
                    src={chat.agent.avatar}
                    alt={chat.agent.name}
                    className="w-12 h-12 rounded-full"
                  />

                  {/* Main Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">
                            {chat.visitor.name}
                          </h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            chat.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : chat.status === 'missed'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {chat.status === 'completed' ? (
                              <>
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Completed
                              </>
                            ) : chat.status === 'missed' ? (
                              <>
                                <XCircle className="w-3 h-3 mr-1" />
                                Missed
                              </>
                            ) : (
                              <>
                                <MessageCircle className="w-3 h-3 mr-1" />
                                Active
                              </>
                            )}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">{chat.visitor.email}</p>
                      </div>

                      {/* Meta Info */}
                      <div className="text-right space-y-1">
                        <div className="flex items-center gap-1 text-sm text-slate-600 justify-end">
                          <User className="w-4 h-4" />
                          {chat.agent.name}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-600 justify-end">
                          <Calendar className="w-4 h-4" />
                          {formatRelativeTime(chat.startTime)}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-600 justify-end">
                          <Clock className="w-4 h-4" />
                          {formatDuration(chat.duration)}
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {chat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-700">
                        {chat.department}
                      </span>
                    </div>

                    {/* Last Message */}
                    <div className="mt-3 p-3 bg-slate-50 rounded-lg">
                      <p className="text-sm text-slate-700">{chat.lastMessage}</p>
                    </div>

                    {/* Satisfaction Rating */}
                    {chat.satisfaction && (
                      <div className="flex items-center gap-2 mt-3">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-slate-900">
                          {chat.satisfaction}.0
                        </span>
                        <span className="text-sm text-slate-600">/ 5.0</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}