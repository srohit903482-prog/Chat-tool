'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { Plus, Edit, Trash2, Zap, ToggleLeft, ToggleRight, Plus as PlusIcon, Trash as TrashIcon } from 'lucide-react';

export default function TriggersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const triggers = [
    {
      id: 'trigger-1',
      name: 'Welcome New Visitors',
      description: 'Show welcome message to first-time visitors',
      enabled: true,
      conditions: [
        { type: 'returningVisitor', operator: 'equals', value: 'false' },
      ],
      actions: [
        { type: 'showMessage', value: 'Welcome! How can I help you today?' },
      ],
    },
    {
      id: 'trigger-2',
      name: 'Pricing Page Engagement',
      description: 'Proactively offer help on pricing page',
      enabled: true,
      conditions: [
        { type: 'pageUrl', operator: 'contains', value: '/pricing' },
        { type: 'timeOnPage', operator: 'greaterThan', value: '15' },
      ],
      actions: [
        { type: 'proactiveChat', value: 'I see you\'re looking at our pricing. Do you have any questions?' },
      ],
    },
    {
      id: 'trigger-3',
      name: 'Cart Abandonment',
      description: 'Offer help when user has items in cart for 5 minutes',
      enabled: false,
      conditions: [
        { type: 'pageUrl', operator: 'contains', value: '/cart' },
        { type: 'timeOnPage', operator: 'greaterThan', value: '300' },
      ],
      actions: [
        { type: 'showMessage', value: 'Need help completing your order? I\'m here to assist!' },
      ],
    },
  ];

  const conditionTypes = [
    { value: 'timeOnPage', label: 'Time on Page (seconds)' },
    { value: 'pageUrl', label: 'Page URL' },
    { value: 'scrollDepth', label: 'Scroll Depth (%)' },
    { value: 'returningVisitor', label: 'Returning Visitor' },
    { value: 'referrer', label: 'Referrer URL' },
  ];

  const operators = [
    { value: 'equals', label: 'Equals' },
    { value: 'contains', label: 'Contains' },
    { value: 'greaterThan', label: 'Greater Than' },
    { value: 'lessThan', label: 'Less Than' },
  ];

  const actionTypes = [
    { value: 'showMessage', label: 'Show Message' },
    { value: 'proactiveChat', value: 'Proactive Chat' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Triggers</h1>
            <p className="text-slate-600 mt-1">Automate chat interactions based on visitor behavior</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Trigger
          </Button>
        </div>

        {/* Triggers List */}
        <div className="space-y-4">
          {triggers.map((trigger) => (
            <Card key={trigger.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-purple-50 p-2 rounded-lg">
                        <Zap className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{trigger.name}</h3>
                        <p className="text-sm text-slate-600">{trigger.description}</p>
                      </div>
                    </div>

                    {/* Conditions */}
                    <div className="mt-4">
                      <p className="text-xs font-medium text-slate-500 uppercase mb-2">Conditions</p>
                      <div className="flex flex-wrap gap-2">
                        {trigger.conditions.map((cond, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {cond.type} {cond.operator} {cond.value}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-3">
                      <p className="text-xs font-medium text-slate-500 uppercase mb-2">Actions</p>
                      <div className="flex flex-wrap gap-2">
                        {trigger.actions.map((action, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800"
                          >
                            {action.type}: {action.value}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 ml-4">
                    <button
                      className={`flex items-center gap-1 text-sm ${
                        trigger.enabled ? 'text-green-600' : 'text-slate-400'
                      }`}
                    >
                      {trigger.enabled ? (
                        <ToggleRight className="w-5 h-5" />
                      ) : (
                        <ToggleLeft className="w-5 h-5" />
                      )}
                      {trigger.enabled ? 'Enabled' : 'Disabled'}
                    </button>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Trigger Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Trigger"
          size="xl"
        >
          <div className="space-y-6 max-h-[70vh] overflow-y-auto">
            <Input label="Name" placeholder="Welcome New Visitors" />
            <Input
              label="Description"
              placeholder="Show welcome message to first-time visitors"
            />

            {/* Conditions */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-700">Conditions</label>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2 items-center">
                  <Select options={conditionTypes} className="flex-1" />
                  <Select options={operators} className="flex-1" />
                  <Input placeholder="Value" className="flex-1" />
                  <Button size="sm" variant="ghost" className="text-red-600">
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
                <Button size="sm" variant="outline">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add Condition
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Actions</label>
              <div className="space-y-3">
                <div className="flex gap-2 items-center">
                  <Select options={actionTypes} className="flex-1" />
                  <Input placeholder="Message value" className="flex-1" />
                  <Button size="sm" variant="ghost" className="text-red-600">
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
                <Button size="sm" variant="outline">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add Action
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="enabled" className="rounded border-slate-300" defaultChecked />
              <label htmlFor="enabled" className="text-sm text-slate-700">
                Enable this trigger
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <Button onClick={() => setIsModalOpen(false)} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1">Save Trigger</Button>
            </div>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
}