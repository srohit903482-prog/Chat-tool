'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Copy, Check, Code, Smartphone, Terminal } from 'lucide-react';

export default function APIPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/chats',
      description: 'Create a new chat session',
      code: `curl -X POST https://api.example.com/v1/chats \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "visitorId": "visitor-123",
    "department": "support"
  }'`,
    },
    {
      method: 'GET',
      endpoint: '/api/v1/chats/:id',
      description: 'Retrieve chat details',
      code: `curl -X GET https://api.example.com/v1/chats/chat-123 \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
    },
    {
      method: 'POST',
      endpoint: '/api/v1/chats/:id/messages',
      description: 'Send a message to a chat',
      code: `curl -X POST https://api.example.com/v1/chats/chat-123/messages \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "Hello!",
    "senderId": "agent-1"
  }'`,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Account - API & SDKs</h1>
          <p className="text-slate-600 mt-1">REST API and Mobile SDK documentation</p>
        </div>

        {/* API Key */}
        <Card>
          <CardHeader>
            <CardTitle>API Credentials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  API Key
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value="sk_live_xxxxxxxxxxxxxxxxxxxxxxxxx"
                    readOnly
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 font-mono text-sm"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => handleCopy('apikey', 'sk_live_xxxxxxxxxxxxxxxxxxxxxxxxx')}
                  >
                    {copied === 'apikey' ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-900">
                  <strong>Important:</strong> Keep your API key secret. Never expose it in client-side code.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Endpoints */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              REST API Endpoints
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${
                      endpoint.method === 'POST'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-sm font-mono text-slate-700">{endpoint.endpoint}</code>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{endpoint.description}</p>
                  <div className="relative">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-2 top-2 z-10"
                      onClick={() => handleCopy(`endpoint-${index}`, endpoint.code)}
                    >
                      {copied === `endpoint-${index}` ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{endpoint.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* SDKs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mobile SDK */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Mobile SDKs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">iOS SDK</h4>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <code className="text-sm font-mono">pod install LiveChatSDK</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Android SDK</h4>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <code className="text-sm font-mono">implementation 'com.example:livechat:1.0.0'</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">React Native</h4>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <code className="text-sm font-mono">npm install react-native-livechat</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Web SDK */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Web SDK
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">JavaScript SDK</h4>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <code className="text-sm font-mono">npm install livechat-js-sdk</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">React SDK</h4>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <code className="text-sm font-mono">npm install @livechat/react</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Vue SDK</h4>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <code className="text-sm font-mono">npm install @livechat/vue</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}