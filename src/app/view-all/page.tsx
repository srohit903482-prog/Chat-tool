'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Search, Filter, Users, MessageCircle, Clock, TrendingUp } from 'lucide-react';

export default function ViewAllPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const allItems = [
    { type: 'visitor', id: 'visitor-1', name: 'Guest #1247', detail: 'Online - 3 chats', status: 'online' },
    { type: 'visitor', id: 'visitor-2', name: 'Guest #1248', detail: 'Online - 1 chat', status: 'online' },
    { type: 'chat', id: 'chat-1', name: 'Chat with Alice Johnson', detail: 'Completed - 4.8 rating', status: 'completed' },
    { type: 'chat', id: 'chat-2', name: 'Chat with Bob Wilson', detail: 'Active - 2 mins', status: 'active' },
    { type: 'agent', id: 'agent-1', name: 'John Smith', detail: 'Online - 3 active chats', status: 'online' },
    { type: 'agent', id: 'agent-2', name: 'Sarah Johnson', detail: 'Busy - 2 active chats', status: 'busy' },
    { type: 'agent', id: 'agent-3', name: 'Mike Wilson', detail: 'Online - 2 active chats', status: 'online' },
    { type: 'agent', id: 'agent-4', name: 'Emily Davis', detail: 'Away - 1 active chat', status: 'away' },
    { type: 'trigger', id: 'trigger-1', name: 'Welcome New Visitors', detail: 'Enabled - 1 condition', status: 'enabled' },
    { type: 'trigger', id: 'trigger-2', name: 'Pricing Page Engagement', detail: 'Enabled - 2 conditions', status: 'enabled' },
    { type: 'shortcut', id: 'shortcut-1', name: '/welcome', detail: 'Welcome message', status: 'active' },
    { type: 'shortcut', id: 'shortcut-2', name: '/thanks', detail: 'Closing message', status: 'active' },
  ];

  const typeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'visitor', label: 'Visitors' },
    { value: 'chat', label: 'Chats' },
    { value: 'agent', label: 'Agents' },
    { value: 'trigger', label: 'Triggers' },
    { value: 'shortcut', label: 'Shortcuts' },
  ];

  const filteredItems = allItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.detail.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || item.type === filterType;
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'visitor':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'chat':
        return <MessageCircle className="w-5 h-5 text-green-600" />;
      case 'agent':
        return <Users className="w-5 h-5 text-purple-600" />;
      case 'trigger':
        return <TrendingUp className="w-5 h-5 text-orange-600" />;
      case 'shortcut':
        return <Clock className="w-5 h-5 text-teal-600" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'visitor':
        return 'bg-blue-50 border-blue-200';
      case 'chat':
        return 'bg-green-50 border-green-200';
      case 'agent':
        return 'bg-purple-50 border-purple-200';
      case 'trigger':
        return 'bg-orange-50 border-orange-200';
      case 'shortcut':
        return 'bg-teal-50 border-teal-200';
      default:
        return 'bg-slate-50 border-slate-200';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">View All</h1>
          <p className="text-slate-600 mt-1">Comprehensive view of all entities</p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search across all entities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                options={typeOptions}
                className="w-full md:w-48"
              />
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-3">
              {filteredItems.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600">No results found</p>
                </div>
              ) : (
                filteredItems.map((item) => (
                  <div
                    key={`${item.type}-${item.id}`}
                    className={`flex items-center gap-4 p-4 rounded-lg border ${getTypeColor(
                      item.type
                    )} hover:shadow-md transition-shadow cursor-pointer`}
                  >
                    <div className="flex-shrink-0">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-slate-900">{item.name}</h3>
                        <span className="text-xs font-medium text-slate-500 uppercase">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Pagination */}
            {filteredItems.length > 0 && (
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  Showing {filteredItems.length} results
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" disabled>
                    Previous
                  </Button>
                  <Button size="sm" variant="outline" disabled>
                    Next
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}