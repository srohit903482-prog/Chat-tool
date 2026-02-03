'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Save, Mail, FileText, Calendar, TrendingUp } from 'lucide-react';

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Email Reports</h1>
            <p className="text-slate-600 mt-1">Configure scheduled email reports</p>
          </div>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Report Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Enable Email Reports</p>
                <p className="text-sm text-slate-600">Receive performance reports via email</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300" />
            </label>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Report Frequency
              </label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                <option value="daily">Daily</option>
                <option value="weekly" selected>Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Delivery Day
              </label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday" selected>Friday</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Delivery Time
              </label>
              <input
                type="time"
                defaultValue="09:00"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Report Types
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="rounded border-slate-300" />
                <div>
                  <p className="font-medium text-slate-900">Chat Performance Report</p>
                  <p className="text-sm text-slate-600">Summary of chat volume, duration, and satisfaction</p>
                </div>
              </div>
              <TrendingUp className="w-5 h-5 text-primary-600" />
            </label>

            <label className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="rounded border-slate-300" />
                <div>
                  <p className="font-medium text-slate-900">Personal Performance Report</p>
                  <p className="text-sm text-slate-600">Your individual chat statistics and metrics</p>
                </div>
              </div>
              <TrendingUp className="w-5 h-5 text-primary-600" />
            </label>

            <label className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded border-slate-300" />
                <div>
                  <p className="font-medium text-slate-900">Visitor Analytics Report</p>
                  <p className="text-sm text-slate-600">Visitor engagement and behavior insights</p>
                </div>
              </div>
              <TrendingUp className="w-5 h-5 text-primary-600" />
            </label>

            <label className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded border-slate-300" />
                <div>
                  <p className="font-medium text-slate-900">Trigger Performance Report</p>
                  <p className="text-sm text-slate-600">Automated trigger effectiveness and engagement</p>
                </div>
              </div>
              <TrendingUp className="w-5 h-5 text-primary-600" />
            </label>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Additional Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Include Charts and Visualizations</p>
                <p className="text-sm text-slate-600">Add visual data representations to email reports</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300" />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Include CSV Attachment</p>
                <p className="text-sm text-slate-600">Attach raw data as CSV file for further analysis</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300" />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-slate-900">Send to Additional Recipients</p>
                <p className="text-sm text-slate-600">Copy team members or managers on reports</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300" />
            </label>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}