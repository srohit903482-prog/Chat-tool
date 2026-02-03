'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Route, ArrowRight, Building2, Users } from 'lucide-react';

export default function RoutingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Chat Routing</h1>
          <p className="text-slate-600 mt-1">Configure how chats are assigned to agents</p>
        </div>

        {/* Routing Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Routing Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Routing Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Routing Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center gap-3 p-4 border-2 border-primary-500 rounded-lg cursor-pointer bg-primary-50">
                  <input
                    type="radio"
                    name="routingType"
                    value="broadcast"
                    defaultChecked
                    className="text-primary-600"
                  />
                  <div>
                    <p className="font-medium text-slate-900">Broadcast</p>
                    <p className="text-sm text-slate-600">
                      Send chat to all available agents simultaneously
                    </p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-slate-300">
                  <input
                    type="radio"
                    name="routingType"
                    value="assigned"
                    className="text-primary-600"
                  />
                  <div>
                    <p className="font-medium text-slate-900">Assigned</p>
                    <p className="text-sm text-slate-600">
                      Route chat to specific agents based on rules
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Chat Limits */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Maximum Chat Limit per Agent
              </label>
              <Input type="number" placeholder="5" value="5" />
              <p className="text-sm text-slate-500 mt-1">
                Maximum number of simultaneous chats an agent can handle
              </p>
            </div>

            {/* Department-Based Routing */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Department-Based Routing
              </label>
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  id="deptRouting"
                  className="rounded border-slate-300"
                  defaultChecked
                />
                <label htmlFor="deptRouting" className="text-sm text-slate-700">
                  Enable department-based routing
                </label>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900">Sales</p>
                      <p className="text-sm text-slate-600">2 agents available</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900">Support</p>
                      <p className="text-sm text-slate-600">2 agents available</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900">Billing</p>
                      <p className="text-sm text-slate-600">1 agent available</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
            </div>

            {/* Routing Priority */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Routing Priority
              </label>
              <Select
                options={[
                  { value: 'least-busy', label: 'Least Busy Agent' },
                  { value: 'round-robin', label: 'Round Robin' },
                  { value: 'longest-idle', label: 'Longest Idle' },
                  { value: 'random', label: 'Random' },
                ]}
                defaultValue="least-busy"
              />
              <p className="text-sm text-slate-500 mt-1">
                Determine which agent receives the chat first
              </p>
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4">
              <Button>Save Settings</Button>
            </div>
          </CardContent>
        </Card>

        {/* Routing Flow Diagram */}
        <Card>
          <CardHeader>
            <CardTitle>Routing Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center gap-4 py-8">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <Route className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">New Chat</p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-slate-400" />
              
              <div className="flex flex-col items-center gap-2">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Department Check</p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-slate-400" />
              
              <div className="flex flex-col items-center gap-2">
                <div className="bg-green-100 p-4 rounded-lg">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Agent Selection</p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-slate-400" />
              
              <div className="flex flex-col items-center gap-2">
                <div className="bg-orange-100 p-4 rounded-lg">
                  <Route className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Chat Assigned</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}