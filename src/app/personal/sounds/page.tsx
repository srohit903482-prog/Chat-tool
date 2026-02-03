'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Save, VolumeUp, Volume2, Bell, Play, Pause } from 'lucide-react';

export default function SoundsPage() {
  const soundOptions = [
    { id: 'default', name: 'Default Chime', icon: Bell },
    { id: 'gentle', name: 'Gentle Ding', icon: Volume2 },
    { id: 'modern', name: 'Modern Tone', icon: VolumeUp },
    { id: 'soft', name: 'Soft Pop', icon: Bell },
    { id: 'urgent', name: 'Urgent Alert', icon: VolumeUp },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Sounds & Notifications</h1>
            <p className="text-slate-600 mt-1">Configure notification sounds</p>
          </div>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Notification Sounds</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                New Chat Sound
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {soundOptions.map((sound) => (
                  <div
                    key={sound.id}
                    className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      sound.id === 'default'
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-50 p-2 rounded-lg">
                        <sound.icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{sound.name}</p>
                        <p className="text-sm text-slate-600">Click to preview</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                New Message Sound
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {soundOptions.map((sound) => (
                  <div
                    key={sound.id}
                    className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      sound.id === 'gentle'
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-50 p-2 rounded-lg">
                        <sound.icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{sound.name}</p>
                        <p className="text-sm text-slate-600">Click to preview</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sound Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Play Sound on New Chat</p>
                <p className="text-sm text-slate-600">Hear a notification when a new chat starts</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300" />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Play Sound on New Message</p>
                <p className="text-sm text-slate-600">Hear a notification when a new message arrives</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300" />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Mute Sounds During Off Hours</p>
                <p className="text-sm text-slate-600">Automatically mute notifications outside working hours</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300" />
            </label>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Volume Level
              </label>
              <div className="flex items-center gap-4">
                <VolumeUp className="w-5 h-5 text-slate-400" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="80"
                  className="flex-1"
                />
                <span className="text-sm font-medium text-slate-900 w-12">80%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}