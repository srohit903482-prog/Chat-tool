'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { Plus, Edit, Trash2, Zap, Tag, Users, Building2 } from 'lucide-react';

export default function ShortcutsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shortcuts = [
    {
      id: 'shortcut-1',
      keyword: '/welcome',
      message: 'Welcome to our chat! How can I assist you today?',
      tag: 'greeting',
      availableFor: {
        roles: ['Admin', 'Supervisor', 'Agent'],
        departments: ['Sales', 'Support', 'Billing'],
      },
    },
    {
      id: 'shortcut-2',
      keyword: '/hold',
      message: 'Please hold for a moment while I check that information for you.',
      tag: 'support',
      availableFor: {
        roles: ['Admin', 'Supervisor', 'Agent'],
        departments: ['Support'],
      },
    },
    {
      id: 'shortcut-3',
      keyword: '/thanks',
      message: 'Thank you for contacting us. Is there anything else I can help you with?',
      tag: 'closing',
      availableFor: {
        roles: ['Admin', 'Supervisor', 'Agent'],
        departments: ['Sales', 'Support', 'Billing'],
      },
    },
    {
      id: 'shortcut-4',
      keyword: '/pricing',
      message: 'Our pricing plans start at $29/month for the Basic plan. Would you like me to send you our pricing sheet?',
      tag: 'sales',
      availableFor: {
        roles: ['Admin', 'Supervisor'],
        departments: ['Sales'],
      },
    },
    {
      id: 'shortcut-5',
      keyword: '/escalate',
      message: 'I\'m escalating this to our senior team. A specialist will be with you shortly.',
      tag: 'support',
      availableFor: {
        roles: ['Admin', 'Supervisor'],
        departments: ['Support'],
      },
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

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Shortcuts</h1>
            <p className="text-slate-600 mt-1">Predefined messages for quick responses</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Shortcut
          </Button>
        </div>

        {/* Shortcuts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {shortcuts.map((shortcut) => (
            <Card key={shortcut.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-50 p-2 rounded-lg">
                      <Zap className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{shortcut.keyword}</h3>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                        {shortcut.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-slate-700 mb-4 p-3 bg-slate-50 rounded-lg">
                  {shortcut.message}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Users className="w-4 h-4" />
                    <span>Roles: {shortcut.availableFor.roles.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Building2 className="w-4 h-4" />
                    <span>Departments: {shortcut.availableFor.departments.join(', ')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add/Edit Shortcut Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Shortcut"
          size="lg"
        >
          <div className="space-y-4">
            <Input label="Keyword" placeholder="/welcome" />
            <Input
              label="Message"
              placeholder="Welcome to our chat! How can I assist you today?"
            />
            <Input label="Tag" placeholder="greeting" />

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Available Roles</label>
              <div className="space-y-2">
                {roleOptions.map((role) => (
                  <label key={role.value} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-300" defaultChecked />
                    <span className="text-sm text-slate-700">{role.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Available Departments</label>
              <div className="space-y-2">
                {departmentOptions.map((dept) => (
                  <label key={dept.value} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-300" defaultChecked />
                    <span className="text-sm text-slate-700">{dept.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button onClick={() => setIsModalOpen(false)} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1">Save Shortcut</Button>
            </div>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
}