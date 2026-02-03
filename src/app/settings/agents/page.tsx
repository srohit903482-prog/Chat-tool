'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Modal } from '@/components/ui/Modal';
import { 
  Plus,
  Search,
  Edit,
  Trash2,
  ToggleLeft,
  ToggleRight,
  Mail,
  User,
  Shield,
  Building,
  MoreVertical
} from 'lucide-react';

export default function AgentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingAgent, setEditingAgent] = useState<any>(null);

  const agents = [
    {
      id: 'agent-1',
      displayName: 'John Smith',
      name: 'John Smith',
      email: 'john@company.com',
      chatLimit: 5,
      role: 'Admin',
      department: 'Sales',
      enabled: true,
      avatar: 'https://i.pravatar.cc/150?img=1',
      tagline: 'Senior Sales Representative',
    },
    {
      id: 'agent-2',
      displayName: 'Sarah Johnson',
      name: 'Sarah Johnson',
      email: 'sarah@company.com',
      chatLimit: 5,
      role: 'Supervisor',
      department: 'Support',
      enabled: true,
      avatar: 'https://i.pravatar.cc/150?img=5',
      tagline: 'Support Team Lead',
    },
    {
      id: 'agent-3',
      displayName: 'Mike Wilson',
      name: 'Mike Wilson',
      email: 'mike@company.com',
      chatLimit: 5,
      role: 'Agent',
      department: 'Support',
      enabled: true,
      avatar: 'https://i.pravatar.cc/150?img=3',
      tagline: 'Support Agent',
    },
    {
      id: 'agent-4',
      displayName: 'Emily Davis',
      name: 'Emily Davis',
      email: 'emily@company.com',
      chatLimit: 5,
      role: 'Agent',
      department: 'Billing',
      enabled: true,
      avatar: 'https://i.pravatar.cc/150?img=9',
      tagline: 'Billing Specialist',
    },
  ];

  const roleOptions = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Supervisor', label: 'Supervisor' },
    { value: 'Agent', label: 'Agent' },
  ];

  const departmentOptions = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Support', label: 'Support' },
    { value: 'Billing', label: 'Billing' },
  ];

  const filteredAgents = agents.filter(agent =>
    agent.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Agents</h1>
            <p className="text-slate-600 mt-1">Manage your support team members</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Agent
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search agents by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAgents.map((agent) => (
            <Card key={agent.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={agent.avatar} alt={agent.displayName} className="w-12 h-12 rounded-full" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{agent.displayName}</h3>
                      <p className="text-sm text-slate-600">{agent.tagline}</p>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-slate-100 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5 text-slate-400" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail className="w-4 h-4" />
                    <span>{agent.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Shield className="w-4 h-4" />
                    <span>{agent.role}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Building className="w-4 h-4" />
                    <span>{agent.department}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200">
                  <span className="text-sm text-slate-600">
                    Chat limit: {agent.chatLimit}
                  </span>
                  <button
                    onClick={() => {
                      // Toggle agent status
                    }}
                    className={`flex items-center gap-1 text-sm ${
                      agent.enabled ? 'text-green-600' : 'text-slate-400'
                    }`}
                  >
                    {agent.enabled ? (
                      <ToggleRight className="w-5 h-5" />
                    ) : (
                      <ToggleLeft className="w-5 h-5" />
                    )}
                    {agent.enabled ? 'Enabled' : 'Disabled'}
                  </button>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add/Edit Agent Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingAgent ? 'Edit Agent' : 'Add New Agent'}
          size="lg"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Display Name" placeholder="John Smith" />
              <Input label="Full Name" placeholder="John Smith" />
            </div>
            <Input label="Email" type="email" placeholder="john@company.com" />
            <Input label="Password" type="password" placeholder="••••••••" />
            <div className="grid grid-cols-2 gap-4">
              <Select label="Role" options={roleOptions} />
              <Select label="Department" options={departmentOptions} />
            </div>
            <Input label="Chat Limit" type="number" placeholder="5" />
            <Input label="Tagline" placeholder="Senior Sales Representative" />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="enabled" className="rounded border-slate-300" defaultChecked />
              <label htmlFor="enabled" className="text-sm text-slate-700">
                Enable this agent
              </label>
            </div>
            <div className="flex gap-3 pt-4">
              <Button onClick={() => setIsModalOpen(false)} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1">Save Agent</Button>
            </div>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
}