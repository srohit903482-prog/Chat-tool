'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Save, Clock, UserCheck, Moon } from 'lucide-react';

export default function TimeoutPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Idle Timeout Settings</h1>
            <p className="text-slate-600 mt-1">Configure your availability and automatic status changes</p>
          </div>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Idle Timeout Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Auto-Away After Inactivity
              </label>
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  placeholder="15"
                  defaultValue="15"
                  className="w-32"
                />
                <span className="text-slate-600">minutes of inactivity</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Your status will automatically change to "Away" after this period of inactivity
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Auto-Offline After Idle
              </label>
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  placeholder="30"
                  defaultValue="30"
                  className="w-32"
                />
                <span className="text-slate-600">minutes of inactivity</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Your status will change to "Offline" after this period and you won't receive new chats
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Resume Activity Detection
              </label>
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  placeholder="5"
                  defaultValue="5"
                  className="w-32"
                />
                <span className="text-slate-600">seconds of activity</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Your status will automatically return to "Available" when you resume activity
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="w-5 h-5" />
              Status Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Notify Before Auto-Away</p>
                <p className="text-sm text-slate-600">Get a warning 1 minute before going auto-away</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300" />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Notify Before Auto-Offline</p>
                <p className="text-sm text-slate-600">Get a warning 5 minutes before going offline</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300" />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Play Sound on Status Change</p>
                <p className="text-sm text-slate-600">Hear a sound when your status changes automatically</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300" />
            </label>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Moon className="w-5 h-5" />
              Working Hours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Use Working Hours for Status</p>
                <p className="text-sm text-slate-600">Automatically set availability based on working hours</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300" />
            </label>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Start Time
                </label>
                <input
                  type="time"
                  defaultValue="09:00"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  End Time
                </label>
                <input
                  type="time"
                  defaultValue="17:00"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Working Days
              </label>
              <div className="flex flex-wrap gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <label key={day} className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                    <input
                      type="checkbox"
                      defaultChecked={['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day)}
                      className="rounded border-slate-300"
                    />
                    <span className="text-sm font-medium text-slate-700">{day}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Timezone
              </label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                <option>Pacific Time (PT) - UTC-8</option>
                <option>Mountain Time (MT) - UTC-7</option>
                <option>Central Time (CT) - UTC-6</option>
                <option>Eastern Time (ET) - UTC-5</option>
                <option>UTC</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}