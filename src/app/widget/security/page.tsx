'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Save, Shield, Globe, Lock } from 'lucide-react';

export default function WidgetSecurityPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Widget - Security</h1>
            <p className="text-slate-600 mt-1">Configure security and access controls</p>
          </div>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        {/* Country Blocking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Country-Based Blocking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" id="blockCountries" className="rounded border-slate-300" />
              <label htmlFor="blockCountries" className="text-sm text-slate-700">
                Enable country blocking
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Blocked Countries
              </label>
              <Input
                placeholder="Add countries to block..."
                className="mb-2"
              />
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-800">
                  Unknown Country
                  <button className="ml-2 text-red-600 hover:text-red-700">×</button>
                </span>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-900">
                <strong>Warning:</strong> Visitors from blocked countries will not be able to see or interact with the chat widget.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Domain Whitelist */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Allowed Domains
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Allowed Domains
              </label>
              <Input
                placeholder="example.com, mycompany.com"
                value="example.com, mycompany.com"
              />
              <p className="text-sm text-slate-500 mt-1">
                Enter domains separated by commas. The widget will only load on these domains.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-700">Current Domains:</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  example.com
                  <button className="ml-2 text-green-600 hover:text-green-700">×</button>
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  mycompany.com
                  <button className="ml-2 text-green-600 hover:text-green-700">×</button>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Visitor Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Visitor Authentication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-900">Enable Visitor Authentication</p>
                <p className="text-sm text-slate-600">
                  Allow visitors to authenticate to maintain chat history across sessions
                </p>
              </div>
              <div className="text-slate-400">
                <button className="flex items-center gap-1">
                  <ToggleLeft className="w-8 h-8" />
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Authentication URL
                </label>
                <Input
                  type="url"
                  placeholder="https://yourdomain.com/auth/verify"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  API Secret Key
                </label>
                <Input
                  type="password"
                  placeholder="Enter your secret key"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>How it works:</strong> When enabled, authenticated visitors can maintain their chat history across devices and sessions. This requires integration with your authentication system.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-slate-900">Require HTTPS</p>
                <p className="text-sm text-slate-600">
                  Only allow widget to load on secure connections
                </p>
              </div>
              <div className="text-green-600">
                <ToggleRight className="w-8 h-8" />
              </div>
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-slate-900">Rate Limiting</p>
                <p className="text-sm text-slate-600">
                  Protect against spam and abuse
                </p>
              </div>
              <div className="text-green-600">
                <ToggleRight className="w-8 h-8" />
              </div>
            </label>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Max Messages Per Minute
              </label>
              <Input
                type="number"
                placeholder="10"
                defaultValue="10"
              />
            </div>

            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-slate-900">Bot Detection</p>
                <p className="text-sm text-slate-600">
                  Automatically detect and block bot traffic
                </p>
              </div>
              <div className="text-green-600">
                <ToggleRight className="w-8 h-8" />
              </div>
            </label>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}