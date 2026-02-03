'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { Plus, Edit, Trash2, Shield, Users, ToggleLeft, ToggleRight, Check } from 'lucide-react';

export default function RolesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roles = [
    {
      id: 'role-1',
      name: 'Admin',
      description: 'Full access to all features and settings',
      enabled: true,
      agentCount: 1,
      permissions: ['All permissions'],
    },
    {
      id: 'role-2',
      name: 'Supervisor',
      description: 'Can manage agents and view advanced analytics',
      enabled: true,
      agentCount: 1,
      permissions: ['Analytics', 'Settings (view)', 'Agents (manage)', 'Reports', 'Triggers (manage)'],
    },
    {
      id: 'role-3',
      name: 'Agent',
      description: 'Can handle chats and view basic analytics',
      enabled: true,
      agentCount: 2,
      permissions: ['Analytics (view)', 'Settings (view)', 'Agents (view)', 'Reports (view)', 'Triggers (view)'],
    },
  ];

  const allPermissions = [
    { category: 'Analytics', permissions: ['View analytics', 'Export analytics'] },
    { category: 'Settings', permissions: ['View settings', 'Manage settings'] },
    { category: 'Agents', permissions: ['View agents', 'Manage agents'] },
    { category: 'Reports', permissions: ['View reports', 'Export reports'] },
    { category: 'Triggers', permissions: ['View triggers', 'Manage triggers'] },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Roles & Permissions</h1>
            <p className="text-slate-600 mt-1">Configure role-based access control</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Role
          </Button>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {roles.map((role) => (
            <Card key={role.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{role.name}</h3>
                      <p className="text-sm text-slate-600">{role.description}</p>
                    </div>
                  </div>
                  <button
                    className={`flex items-center gap-1 text-sm ${
                      role.enabled ? 'text-green-600' : 'text-slate-400'
                    }`}
                  >
                    {role.enabled ? (
                      <ToggleRight className="w-5 h-5" />
                    ) : (
                      <ToggleLeft className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                  <Users className="w-4 h-4" />
                  <span>{role.agentCount} agents</span>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-xs font-medium text-slate-500 uppercase">Permissions</p>
                  {role.permissions.map((perm) => (
                    <div key={perm} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-3 h-3 text-green-600" />
                      <span>{perm}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-slate-200">
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

        {/* Add/Edit Role Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Role"
          size="xl"
        >
          <div className="space-y-4 max-h-[70vh] overflow-y-auto">
            <Input label="Role Name" placeholder="Agent" />
            <Input label="Description" placeholder="Can handle chats and view basic analytics" />
            
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">Permissions</label>
              {allPermissions.map((category) => (
                <div key={category.category} className="border border-slate-200 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 mb-2">{category.category}</h4>
                  <div className="space-y-2">
                    {category.permissions.map((perm) => (
                      <label key={perm} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-slate-300" />
                        <span className="text-sm text-slate-700">{perm}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="enabled" className="rounded border-slate-300" defaultChecked />
              <label htmlFor="enabled" className="text-sm text-slate-700">
                Enable this role
              </label>
            </div>
            <div className="flex gap-3 pt-4">
              <Button onClick={() => setIsModalOpen(false)} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1">Save Role</Button>
            </div>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
}