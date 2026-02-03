'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { Plus, Edit, Trash2, Building2, Users, ToggleLeft, ToggleRight } from 'lucide-react';

export default function DepartmentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const departments = [
    {
      id: 'dept-1',
      name: 'Sales',
      description: 'Sales team handling product inquiries and conversions',
      enabled: true,
      agentCount: 2,
      agents: ['John Smith', 'Mike Wilson'],
    },
    {
      id: 'dept-2',
      name: 'Support',
      description: 'Technical support team for troubleshooting and assistance',
      enabled: true,
      agentCount: 2,
      agents: ['Sarah Johnson', 'Mike Wilson'],
    },
    {
      id: 'dept-3',
      name: 'Billing',
      description: 'Billing and account management team',
      enabled: true,
      agentCount: 1,
      agents: ['Emily Davis'],
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Departments</h1>
            <p className="text-slate-600 mt-1">Organize agents into departments</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Department
          </Button>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((dept) => (
            <Card key={dept.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-50 p-3 rounded-lg">
                      <Building2 className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{dept.name}</h3>
                      <p className="text-sm text-slate-600">{dept.description}</p>
                    </div>
                  </div>
                  <button
                    className={`flex items-center gap-1 text-sm ${
                      dept.enabled ? 'text-green-600' : 'text-slate-400'
                    }`}
                  >
                    {dept.enabled ? (
                      <ToggleRight className="w-5 h-5" />
                    ) : (
                      <ToggleLeft className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                  <Users className="w-4 h-4" />
                  <span>{dept.agentCount} agents</span>
                </div>

                <div className="space-y-2 mb-4">
                  {dept.agents.map((agent) => (
                    <div key={agent} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>{agent}</span>
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

        {/* Add/Edit Department Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Department"
          size="lg"
        >
          <div className="space-y-4">
            <Input label="Department Name" placeholder="Sales" />
            <Input label="Description" placeholder="Sales team handling product inquiries" />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Assigned Agents</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                  <input type="checkbox" className="rounded border-slate-300" />
                  <span className="text-sm text-slate-700">John Smith</span>
                </label>
                <label className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                  <input type="checkbox" className="rounded border-slate-300" />
                  <span className="text-sm text-slate-700">Sarah Johnson</span>
                </label>
                <label className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                  <input type="checkbox" className="rounded border-slate-300" />
                  <span className="text-sm text-slate-700">Mike Wilson</span>
                </label>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="enabled" className="rounded border-slate-300" defaultChecked />
              <label htmlFor="enabled" className="text-sm text-slate-700">
                Enable this department
              </label>
            </div>
            <div className="flex gap-3 pt-4">
              <Button onClick={() => setIsModalOpen(false)} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1">Save Department</Button>
            </div>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
}