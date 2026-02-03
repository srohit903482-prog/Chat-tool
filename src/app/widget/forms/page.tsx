'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Save, MessageSquare, Clock } from 'lucide-react';

export default function WidgetFormsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Widget - Forms</h1>
            <p className="text-slate-600 mt-1">Configure pre-chat and offline forms</p>
          </div>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        {/* Pre-Chat Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Pre-Chat Form
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Input
              label="Pre-Chat Greeting"
              placeholder="Please provide your name and email to start chatting"
            />

            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">
                Required Fields
              </label>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="rounded border-slate-300"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Require Identity</p>
                    <p className="text-sm text-slate-600">Ask for name and email before chat starts</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-slate-300"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Require Phone Number</p>
                    <p className="text-sm text-slate-600">Ask for phone number before chat starts</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="rounded border-slate-300"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Require Question</p>
                    <p className="text-sm text-slate-600">Ask what the visitor needs help with</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Form Preview
              </label>
              <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-md">
                <p className="text-sm text-slate-600 mb-4">Please provide your name and email to start chatting</p>
                <div className="space-y-3">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                  <Input placeholder="How can we help you?" />
                  <Button className="w-full">Start Chat</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Offline Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Offline Form
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Input
              label="Offline Greeting"
              placeholder="Sorry, we're offline right now. Leave us a message and we'll get back to you soon."
            />

            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">
                Form Settings
              </label>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-slate-300"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Require Phone Number</p>
                    <p className="text-sm text-slate-600">Ask for phone number in offline message</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="rounded border-slate-300"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Allow Messaging Channels</p>
                    <p className="text-sm text-slate-600">Let visitors choose email or SMS for follow-up</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Form Preview
              </label>
              <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-md">
                <p className="text-sm text-slate-600 mb-4">
                  Sorry, we're offline right now. Leave us a message and we'll get back to you soon.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center gap-2 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50">
                      <input type="radio" name="channel" className="text-primary-600" />
                      <span className="text-sm text-slate-700">Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50">
                      <input type="radio" name="channel" className="text-primary-600" />
                      <span className="text-sm text-slate-700">SMS</span>
                    </label>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}