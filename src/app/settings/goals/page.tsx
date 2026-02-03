'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { Plus, Edit, Trash2, Target, TrendingUp, ToggleLeft, ToggleRight } from 'lucide-react';

export default function GoalsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goals = [
    {
      id: 'goal-1',
      name: 'Increase Sales Conversions',
      description: 'Convert visitors to paid customers through chat',
      conversationsCompleted: 45,
      target: 50,
      enabled: true,
      progress: 90,
    },
    {
      id: 'goal-2',
      name: 'Improve Customer Satisfaction',
      description: 'Achieve high satisfaction ratings on support chats',
      conversationsCompleted: 128,
      target: 150,
      enabled: true,
      progress: 85,
    },
    {
      id: 'goal-3',
      name: 'Reduce Response Time',
      description: 'Respond to chats within 30 seconds',
      conversationsCompleted: 89,
      target: 100,
      enabled: true,
      progress: 89,
    },
    {
      id: 'goal-4',
      name: 'Increase First Contact Resolution',
      description: 'Resolve issues on first chat attempt',
      conversationsCompleted: 67,
      target: 80,
      enabled: false,
      progress: 84,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Goals</h1>
            <p className="text-slate-600 mt-1">Track conversation goals and team performance</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Goal
          </Button>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {goals.map((goal) => (
            <Card key={goal.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{goal.name}</h3>
                      <p className="text-sm text-slate-600">{goal.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      className={`flex items-center gap-1 text-sm ${
                        goal.enabled ? 'text-green-600' : 'text-slate-400'
                      }`}
                    >
                      {goal.enabled ? (
                        <ToggleRight className="w-5 h-5" />
                      ) : (
                        <ToggleLeft className="w-5 h-5" />
                      )}
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

                {/* Progress */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Progress</span>
                    <span className="text-sm font-medium text-slate-900">
                      {goal.conversationsCompleted} / {goal.target}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all ${
                        goal.progress >= 90 ? 'bg-green-500' :
                        goal.progress >= 70 ? 'bg-blue-500' :
                        goal.progress >= 50 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-slate-500">{goal.progress}% complete</span>
                    <div className="flex items-center gap-1 text-xs text-slate-600">
                      <TrendingUp className="w-3 h-3" />
                      <span>Last 7 days</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Goal Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Goal"
          size="lg"
        >
          <div className="space-y-4">
            <Input label="Goal Name" placeholder="Increase Sales Conversions" />
            <Input
              label="Description"
              placeholder="Convert visitors to paid customers through chat"
            />
            <Input label="Target Number of Conversations" type="number" placeholder="50" />

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> Goal progress will be tracked based on conversations completed in the last 7 days.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="enabled" className="rounded border-slate-300" defaultChecked />
              <label htmlFor="enabled" className="text-sm text-slate-700">
                Enable this goal
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <Button onClick={() => setIsModalOpen(false)} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1">Save Goal</Button>
            </div>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
}