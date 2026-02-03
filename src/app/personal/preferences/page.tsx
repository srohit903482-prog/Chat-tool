'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Save, Globe, MessageCircle, Bell, Mail } from 'lucide-react';

export default function PreferencesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Personal - Preferences</h1>
            <p className="text-slate-600 mt-1">Configure your personal settings</p>
          </div>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        {/* Language & Region */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Language & Region
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Dashboard Language
              </label>
              <Select
                options={[
                  { value: 'en', label: 'English (US)' },
                  { value: 'en-gb', label: 'English (UK)' },
                  { value: 'es', label: 'Spanish' },
                  { value: 'fr', label: 'French' },
                  { value: 'de', label: 'German' },
                ]}
                defaultValue="en"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Timezone
              </label>
              <Select
                options={[
                  { value: 'utc-8', label: 'Pacific Time (PT)' },
                  { value: 'utc-5', label: 'Eastern Time (ET)' },
                  { value: 'utc-0', label: 'UTC' },
                  { value: 'utc+1', label: 'Central European Time' },
                  { value: 'utc+8', label: 'China Standard Time' },
                ]}
                defaultValue="utc-8"
              />
            </div>
          </CardContent>
        </Card>

        {/* Chat Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Chat Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Maximum Chat Limit
              </label>
              <Input
                type="number"
                placeholder="5"
                defaultValue="5"
              />
              <p className="text-sm text-slate-500 mt-1">
                Maximum number of simultaneous chats you can handle
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Skills & Tags
              </label>
              <Input
                placeholder="sales, product-knowledge, negotiation"
                defaultValue="sales, product-knowledge, negotiation"
              />
              <p className="text-sm text-slate-500 mt-1">
                Comma-separated list of your skills and specialties
              </p>
            </div>

            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-slate-900">Auto-Accept Chats</p>
                <p className="text-sm text-slate-600">
                  Automatically accept new chats when available
                </p>
              </div>
              <div className="text-green-600">
                <ToggleRight className="w-8 h-8" />
              </div>
            </label>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-slate-900">Email Notifications</p>
                <p className="text-sm text-slate-600">
                  Receive email alerts for important events
                </p>
              </div>
              <div className="text-green-600">
                <ToggleRight className="w-8 h-8" />
              </div>
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-slate-900">New Chat Alerts</p>
                <p className="text-sm text-slate-600">
                  Get notified when new chats are assigned
                </p>
              </div>
              <div className="text-green-600">
                <ToggleRight className="w-8 h-8" />
              </div>
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-slate-900">Message Alerts</p>
                <p className="text-sm text-slate-600">
                  Get notified for new messages in active chats
                </p>
              </div>
              <div className="text-green-600">
                <ToggleRight className="w-8 h-8" />
              </div>
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-slate-900">Offline Message Alerts</p>
                <p className="text-sm text-slate-600">
                  Get notified when offline messages are received
                </p>
              </div>
              <div className="text-slate-400">
                <ToggleLeft className="w-8 h-8" />
              </div>
            </label>
          </CardContent>
        </Card>

        {/* Email Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Reports
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-slate-900">Enable Email Reports</p>
                <p className="text-sm text-slate-600">
                  Receive scheduled performance reports via email
                </p>
              </div>
              <div className="text-green-600">
                <ToggleRight className="w-8 h-8" />
              </div>
            </label>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Report Frequency
              </label>
              <Select
                options={[
                  { value: 'daily', label: 'Daily' },
                  { value: 'weekly', label: 'Weekly' },
                  { value: 'monthly', label: 'Monthly' },
                ]}
                defaultValue="weekly"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Report Type
              </label>
              <Select
                options={[
                  { value: 'summary', label: 'Summary Report' },
                  { value: 'detailed', label: 'Detailed Report' },
                ]}
                defaultValue="summary"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}