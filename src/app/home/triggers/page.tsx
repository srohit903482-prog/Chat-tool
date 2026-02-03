'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus, Zap, Clock, Globe, ScrollText, RotateCcw } from 'lucide-react';

export default function HomeTriggersPage() {
  const triggers = [
    {
      id: 'trigger-1',
      name: 'Welcome New Visitors',
      description: 'Show welcome message to first-time visitors',
      enabled: true,
      icon: RotateCcw,
      color: 'bg-green-50 text-green-600',
      conditions: 1,
      actions: 1,
    },
    {
      id: 'trigger-2',
      name: 'Pricing Page Engagement',
      description: 'Proactively offer help on pricing page',
      enabled: true,
      icon: Globe,
      color: 'bg-blue-50 text-blue-600',
      conditions: 2,
      actions: 1,
    },
    {
      id: 'trigger-3',
      name: 'Cart Abandonment',
      description: 'Offer help when user has items in cart for 5 minutes',
      enabled: false,
      icon: Clock,
      color: 'bg-orange-50 text-orange-600',
      conditions: 2,
      actions: 1,
    },
    {
      id: 'trigger-4',
      name: 'Scroll Depth Trigger',
      description: 'Trigger message after scrolling 75% of page',
      enabled: true,
      icon: ScrollText,
      color: 'bg-purple-50 text-purple-600',
      conditions: 1,
      actions: 1,
    },
  ];

  const getTriggerIcon = (icon: any, color: string) => {
    return (
      <div className={`p-2 rounded-lg ${color}`}>
        <icon className="w-6 h-6" />
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Triggers Overview</h1>
            <p className="text-slate-600 mt-1">Automate proactive chat interactions</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Trigger
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8 text-yellow-600" />
                <div>
                  <p className="text-2xl font-bold text-slate-900">{triggers.filter(t => t.enabled).length}</p>
                  <p className="text-sm text-slate-600">Active Triggers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-slate-900">127</p>
                  <p className="text-sm text-slate-600">Fired Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-slate-900">89%</p>
                  <p className="text-sm text-slate-600">Engagement Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Triggers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {triggers.map((trigger) => (
                <div
                  key={trigger.id}
                  className={`p-4 border rounded-lg transition-all ${
                    trigger.enabled
                      ? 'border-green-300 bg-green-50/50'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {getTriggerIcon(trigger.icon, trigger.color)}
                      <div>
                        <h3 className="font-semibold text-slate-900">{trigger.name}</h3>
                        <p className="text-sm text-slate-600">{trigger.description}</p>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        trigger.enabled
                          ? 'bg-green-100 text-green-800'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {trigger.enabled ? 'Active' : 'Disabled'}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>{trigger.conditions} condition{trigger.conditions > 1 ? 's' : ''}</span>
                    <span>•</span>
                    <span>{trigger.actions} action{trigger.actions > 1 ? 's' : ''}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}