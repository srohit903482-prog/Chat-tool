'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus, Zap, Smartphone, Globe, Puzzle, Calendar, ShoppingBag, Mail } from 'lucide-react';

export default function AppsPage() {
  const installedApps = [
    {
      id: 'app-1',
      name: 'Salesforce',
      description: 'Sync chats and contacts with Salesforce CRM',
      icon: Globe,
      color: 'bg-blue-50 text-blue-600',
      status: 'connected',
      lastSync: '2 hours ago',
    },
    {
      id: 'app-2',
      name: 'Slack',
      description: 'Receive chat notifications in Slack',
      icon: Zap,
      color: 'bg-purple-50 text-purple-600',
      status: 'connected',
      lastSync: '5 mins ago',
    },
    {
      id: 'app-3',
      name: 'Google Calendar',
      description: 'Schedule follow-ups and meetings',
      icon: Calendar,
      color: 'bg-green-50 text-green-600',
      status: 'connected',
      lastSync: '1 day ago',
    },
  ];

  const availableApps = [
    {
      id: 'app-4',
      name: 'Shopify',
      description: 'Integrate with Shopify for e-commerce support',
      icon: ShoppingBag,
      color: 'bg-orange-50 text-orange-600',
      category: 'E-commerce',
    },
    {
      id: 'app-5',
      name: 'HubSpot',
      description: 'Connect with HubSpot CRM',
      icon: Globe,
      color: 'bg-orange-50 text-orange-600',
      category: 'CRM',
    },
    {
      id: 'app-6',
      name: 'Mailchimp',
      description: 'Email marketing integration',
      icon: Mail,
      color: 'bg-yellow-50 text-yellow-600',
      category: 'Marketing',
    },
    {
      id: 'app-7',
      name: 'Intercom Migration',
      description: 'Import chats from Intercom',
      icon: Smartphone,
      color: 'bg-blue-50 text-blue-600',
      category: 'Migration',
    },
    {
      id: 'app-8',
      name: 'Zendesk Migration',
      description: 'Import chats from Zendesk',
      icon: Globe,
      color: 'bg-red-50 text-red-600',
      category: 'Migration',
    },
    {
      id: 'app-9',
      name: 'Custom Integration',
      description: 'Build your own integration using our API',
      icon: Puzzle,
      color: 'bg-slate-50 text-slate-600',
      category: 'Developer',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Apps & Integrations</h1>
          <p className="text-slate-600 mt-1">Extend functionality with third-party integrations</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Installed Apps ({installedApps.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {installedApps.map((app) => (
                <div
                  key={app.id}
                  className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-lg ${app.color}`}>
                      <app.icon className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Connected
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{app.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">{app.description}</p>
                  <p className="text-xs text-slate-500">Last sync: {app.lastSync}</p>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      Configure
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600">
                      Disconnect
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Available Integrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableApps.map((app) => (
                <div
                  key={app.id}
                  className="p-4 border border-slate-200 rounded-lg hover:shadow-md hover:border-primary-300 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-lg ${app.color}`}>
                      <app.icon className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                      {app.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{app.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{app.description}</p>
                  <Button size="sm" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Install
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Integration Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <Zap className="w-6 h-6 text-primary-600 mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Automate Workflows</h4>
                <p className="text-sm text-slate-600">
                  Connect your tools and automate repetitive tasks
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <Globe className="w-6 h-6 text-primary-600 mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Centralize Data</h4>
                <p className="text-sm text-slate-600">
                  Keep all customer data synchronized across platforms
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <Smartphone className="w-6 h-6 text-primary-600 mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Expand Features</h4>
                <p className="text-sm text-slate-600">
                  Add new capabilities with our growing app ecosystem
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}