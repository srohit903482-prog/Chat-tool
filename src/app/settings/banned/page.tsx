'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { Plus, Trash2, Shield, Ban, Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils/date';

export default function BannedVisitorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bannedIPs = [
    {
      id: 'banned-1',
      ipAddress: '10.0.0.50',
      reason: 'Spam and abusive behavior',
      createdAt: new Date('2024-01-10'),
    },
    {
      id: 'banned-2',
      ipAddress: '192.168.100.25',
      reason: 'Multiple policy violations',
      createdAt: new Date('2024-01-15'),
    },
    {
      id: 'banned-3',
      ipAddress: '172.16.254.1',
      reason: 'Threats and harassment',
      createdAt: new Date('2024-01-20'),
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Banned Visitors</h1>
            <p className="text-slate-600 mt-1">Manage IP-based visitor blocking</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Ban IP Address
          </Button>
        </div>

        {/* Info Banner */}
        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-orange-600 mt-0.5" />
              <div>
                <p className="font-medium text-orange-900">
                  Blocked visitors cannot see or interact with the chat widget
                </p>
                <p className="text-sm text-orange-700 mt-1">
                  Use this feature to prevent spam and abusive behavior from specific IP addresses.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Banned IPs List */}
        <Card>
          <CardHeader>
            <CardTitle>Banned IP Addresses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bannedIPs.map((banned) => (
                <div
                  key={banned.id}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <Ban className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{banned.ipAddress}</p>
                      <p className="text-sm text-slate-600">{banned.reason}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(banned.createdAt)}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Add Ban Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Ban IP Address"
          size="lg"
        >
          <div className="space-y-4">
            <Input
              label="IP Address"
              placeholder="192.168.1.100"
              type="text"
            />
            <Input
              label="Reason for Banning"
              placeholder="Spam and abusive behavior"
              type="text"
            />
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-900">
                <strong>Warning:</strong> Visitors with this IP address will not be able to access the chat widget on your website.
              </p>
            </div>
            <div className="flex gap-3 pt-4">
              <Button onClick={() => setIsModalOpen(false)} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1">Ban IP Address</Button>
            </div>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
}