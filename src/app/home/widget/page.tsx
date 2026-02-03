'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Code, Zap, ArrowRight } from 'lucide-react';

export default function HomeWidgetPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Widget Overview</h1>
          <p className="text-slate-600 mt-1">Quick access to widget configuration</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <div className="bg-primary-50 p-4 rounded-lg">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Chat Widget Integration
                </h3>
                <p className="text-slate-600 mb-4">
                  Add the live chat widget to your website to start engaging with visitors in real-time.
                </p>
                <Button>
                  Configure Widget
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">Active Widgets</p>
                <p className="text-2xl font-bold text-slate-900">3</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">Total Impressions</p>
                <p className="text-2xl font-bold text-slate-900">12,450</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">Engagement Rate</p>
                <p className="text-2xl font-bold text-slate-900">8.5%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Widget Configuration Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300" />
                <span>Customize widget appearance</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300" />
                <span>Set up pre-chat form</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300" />
                <span>Configure offline messages</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300" />
                <span>Set up notifications</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300" />
                <span>Configure security settings</span>
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}