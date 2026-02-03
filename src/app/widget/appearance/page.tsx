'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { MessageSquare, Palette, Badge as BadgeIcon, User, Upload, Save } from 'lucide-react';

export default function WidgetAppearancePage() {
  const positionOptions = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Widget - Appearance</h1>
            <p className="text-slate-600 mt-1">Customize the look and feel of your chat widget</p>
          </div>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        {/* Chat Window Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Chat Window
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Chat Title" placeholder="Chat with us" />
              <Input
                label="Theme Color"
                type="color"
                defaultValue="#0ea5e9"
              />
            </div>

            <Select
              label="Widget Position"
              options={positionOptions}
              defaultValue="right"
            />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Preview
              </label>
              <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg p-8 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-4 w-72">
                  <div
                    className="h-8 rounded-t-lg flex items-center px-3 mb-2"
                    style={{ backgroundColor: '#0ea5e9' }}
                  >
                    <MessageSquare className="w-5 h-5 text-white" />
                    <span className="text-white font-medium ml-2">Chat with us</span>
                  </div>
                  <div className="h-48 bg-slate-50 rounded-b-lg flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Chat window preview</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chat Badge Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BadgeIcon className="w-5 h-5" />
              Chat Badge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Badge Background Color"
                type="color"
                defaultValue="#10b981"
              />
              <Input
                label="Badge Text Color"
                type="color"
                defaultValue="#ffffff"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Custom Badge Image
              </label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
                  <Upload className="w-6 h-6 text-slate-400" />
                </div>
                <div className="flex-1">
                  <Input
                    type="file"
                    accept="image/*"
                    label="Upload Image"
                    className="mb-2"
                  />
                  <p className="text-sm text-slate-500">
                    Recommended: 64x64px, PNG or JPG
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Concierge Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Concierge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Display Title" placeholder="Customer Support" />
              <Input label="Byline" placeholder="We typically reply in a few minutes" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Avatar
              </label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center border-2 border-dashed border-slate-300">
                  <Upload className="w-6 h-6 text-slate-400" />
                </div>
                <div className="flex-1">
                  <Input
                    type="file"
                    accept="image/*"
                    label="Upload Avatar"
                    className="mb-2"
                  />
                  <p className="text-sm text-slate-500">
                    Recommended: 150x150px, PNG or JPG
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Live Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden max-w-sm">
              {/* Header */}
              <div className="bg-blue-500 px-4 py-3 flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=68"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-white">Customer Support</h3>
                  <p className="text-xs text-blue-100">We typically reply in a few minutes</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 bg-slate-50">
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm text-slate-900">Hi! How can I help you today?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white rounded-lg rounded-tr-none p-3 max-w-[80%]">
                    <p className="text-sm">I have a question about your pricing</p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-3 bg-white border-t border-slate-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button size="sm">Send</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}