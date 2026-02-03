'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Save, Globe, Lock, Bell, CreditCard, Clock, Database } from 'lucide-react';

export default function AccountSettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
            <p className="text-slate-600 mt-1">Configure your account preferences and security</p>
          </div>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Account Name
              </label>
              <Input placeholder="My Company LLC" defaultValue="My Company LLC" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Default Language
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
                  Default Timezone
                </label>
                <Select
                  options={[
                    { value: 'utc-8', label: 'Pacific Time (PT)' },
                    { value: 'utc-5', label: 'Eastern Time (ET)' },
                    { value: 'utc-0', label: 'UTC' },
                    { value: 'utc+1', label: 'Central European Time' },
                  ]}
                  defaultValue="utc-8"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Business Website
              </label>
              <Input
                type="url"
                placeholder="https://yourcompany.com"
                defaultValue="https://mycompany.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Support Email
              </label>
              <Input
                type="email"
                placeholder="support@company.com"
                defaultValue="support@mycompany.com"
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Account Password
              </label>
              <div className="flex gap-2">
                <Input type="password" placeholder="••••••••••••" className="flex-1" />
                <Button variant="outline">Change</Button>
              </div>
            </div>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Two-Factor Authentication</p>
                <p className="text-sm text-slate-600">Add an extra layer of security to your account</p>
              </div>
              <Button size="sm">Enable</Button>
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">IP Whitelist</p>
                <p className="text-sm text-slate-600">Restrict access to specific IP addresses only</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300" />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Session Timeout</p>
                <p className="text-sm text-slate-600">Automatically log out after inactivity</p>
              </div>
              <select className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                <option value="30">30 minutes</option>
                <option value="60" selected>1 hour</option>
                <option value="120">2 hours</option>
                <option value="480">8 hours</option>
              </select>
            </label>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Email Notifications</p>
                <p className="text-sm text-slate-600">Receive important account updates via email</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300" />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Billing Alerts</p>
                <p className="text-sm text-slate-600">Get notified about billing events and renewals</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300" />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Usage Alerts</p>
                <p className="text-sm text-slate-600">Alert when approaching plan limits</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300" />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Marketing Emails</p>
                <p className="text-sm text-slate-600">Receive product updates and promotional content</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300" />
            </label>
          </CardContent>
        </Card>

        {/* Chat Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Chat Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Operating Hours
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Start Time</label>
                  <input
                    type="time"
                    defaultValue="09:00"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">End Time</label>
                  <input
                    type="time"
                    defaultValue="17:00"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Chat Tags
              </label>
              <Input
                placeholder="sales, support, billing, technical"
                defaultValue="sales, support, billing, technical"
              />
              <p className="text-sm text-slate-500 mt-1">
                Comma-separated list of tags for organizing chats
              </p>
            </div>

            <div>
              <label className="flex items-center justify-between cursor-pointer mb-2">
                <div>
                  <p className="font-medium text-slate-900">Allow File Sharing</p>
                  <p className="text-sm text-slate-600">Enable file attachments in chats</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300" />
              </label>
            </div>

            <div>
              <label className="flex items-center justify-between cursor-pointer mb-2">
                <div>
                  <p className="font-medium text-slate-900">Email Piping</p>
                  <p className="text-sm text-slate-600">Convert emails to chat conversations</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300" />
              </label>
              {true && (
                <div className="pl-7">
                  <Input
                    placeholder="support@mycompany.com"
                    defaultValue="support@mycompany.com"
                    className="mt-2"
                  />
                  <p className="text-sm text-slate-500 mt-1">
                    Email address to receive support emails
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-slate-900">Export Account Data</h4>
                  <p className="text-sm text-slate-600">Download all your account data</p>
                </div>
                <Button variant="outline">Export</Button>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-slate-900">Clear Chat History</h4>
                  <p className="text-sm text-slate-600">Delete all past chat conversations</p>
                </div>
                <Button variant="outline" className="text-red-600 hover:text-red-700">
                  Clear
                </Button>
              </div>
            </div>

            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-red-900">Delete Account</h4>
                  <p className="text-sm text-red-700">Permanently delete your account and all data</p>
                </div>
                <Button variant="danger">Delete Account</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}