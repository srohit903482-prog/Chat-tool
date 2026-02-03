'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus, MessageCircle, Clock, CheckCircle, UserPlus } from 'lucide-react';

export default function TeamPage() {
  const teamMembers = [
    {
      id: 'agent-1',
      name: 'John Smith',
      role: 'Admin',
      department: 'Sales',
      avatar: 'https://i.pravatar.cc/150?img=1',
      status: 'online',
      activeChats: 3,
      satisfaction: 4.9,
    },
    {
      id: 'agent-2',
      name: 'Sarah Johnson',
      role: 'Supervisor',
      department: 'Support',
      avatar: 'https://i.pravatar.cc/150?img=5',
      status: 'busy',
      activeChats: 2,
      satisfaction: 4.8,
    },
    {
      id: 'agent-3',
      name: 'Mike Wilson',
      role: 'Agent',
      department: 'Support',
      avatar: 'https://i.pravatar.cc/150?img=3',
      status: 'online',
      activeChats: 2,
      satisfaction: 4.7,
    },
    {
      id: 'agent-4',
      name: 'Emily Davis',
      role: 'Agent',
      department: 'Billing',
      avatar: 'https://i.pravatar.cc/150?img=9',
      status: 'away',
      activeChats: 1,
      satisfaction: 4.6,
    },
  ];

  const teamStats = [
    { label: 'Total Members', value: '4', icon: UserPlus },
    { label: 'Online Now', value: '3', icon: CheckCircle },
    { label: 'Active Chats', value: '8', icon: MessageCircle },
    { label: 'Avg Response', value: '32s', icon: Clock },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Team</h1>
            <p className="text-slate-600 mt-1">Manage your support team</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Member
          </Button>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {teamStats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-50 p-2 rounded-lg">
                    <stat.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                    <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-20 h-20 rounded-full"
                    />
                    <div
                      className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                        member.status === 'online'
                          ? 'bg-green-500'
                          : member.status === 'busy'
                          ? 'bg-orange-500'
                          : 'bg-gray-400'
                      }`}
                    />
                  </div>

                  <h3 className="font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-slate-600">{member.role}</p>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 mt-1">
                    {member.department}
                  </span>

                  <div className="w-full mt-4 pt-4 border-t border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Active Chats</span>
                      <span className="font-medium text-slate-900">{member.activeChats}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Satisfaction</span>
                      <div className="flex items-center gap-1 text-yellow-600">
                        <CheckCircle className="w-3 h-3 fill-current" />
                        <span className="font-medium">{member.satisfaction}</span>
                      </div>
                    </div>
                  </div>

                  <Button size="sm" variant="outline" className="w-full mt-4">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}