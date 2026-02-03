'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Save, VolumeUp, Star, ToggleLeft, ToggleRight } from 'lucide-react';

export default function WidgetSettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Widget - Settings</h1>
            <p className="text-slate-600 mt-1">Configure widget behavior and notifications</p>
          </div>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-slate-900">Notification Sounds</p>
                <p className="text-sm text-slate-600">
                  Play sound when new messages arrive
                </p>
              </div>
              <div className="text-green-600">
                <ToggleRight className="w-8 h-8" />
              </div>
            </label>

            <div className="flex items-center gap-3 pl-2">
              <VolumeUp className="w-5 h-5 text-slate-400" />
              <select className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Default</option>
                <option>Chime</option>
                <option>Bell</option>
                <option>Pop</option>
              </select>
            </div>

            <label className="flex items-center justify-between cursor-pointer pt-2">
              <div className="flex-1">
                <p className="font-medium text-slate-900">Desktop Notifications</p>
                <p className="text-sm text-slate-600">
                  Show browser notifications for new chats
                </p>
              </div>
              <div className="text-green-600">
                <ToggleRight className="w-8 h-8" />
              </div>
            </label>
          </CardContent>
        </Card>

        {/* Satisfaction Rating */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              Satisfaction Rating
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-slate-900">Enable Satisfaction Rating</p>
                <p className="text-sm text-slate-600">
                  Ask visitors to rate their chat experience
                </p>
              </div>
              <div className="text-green-600">
                <ToggleRight className="w-8 h-8" />
              </div>
            </label>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Rating Prompt Message
              </label>
              <input
                type="text"
                placeholder="How would you rate your experience?"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Show Rating After
              </label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Immediately after chat ends</option>
                <option>1 minute after chat ends</option>
                <option>5 minutes after chat ends</option>
                <option>Never show automatically</option>
              </select>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Tip:</strong> Satisfaction ratings help improve your support quality. Track ratings in Analytics → Reports.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Auto-Response */}
        <Card>
          <CardHeader>
            <CardTitle>Auto-Response</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-slate-900">Enable Auto-Response</p>
                <p className="text-sm text-slate-600">
                  Send automatic message when no agent is available
                </p>
              </div>
              <div className="text-slate-400">
                <ToggleLeft className="w-8 h-8" />
              </div>
            </label>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Auto-Response Message
              </label>
              <textarea
                placeholder="All our agents are currently busy. Please leave a message and we'll get back to you as soon as possible."
                rows={4}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Send After
              </label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>30 seconds</option>
                <option>1 minute</option>
                <option>2 minutes</option>
                <option>5 minutes</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}