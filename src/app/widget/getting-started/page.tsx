'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Code, 
  Copy, 
  Check, 
  Globe, 
  Layout, 
  MessageSquare, 
  ArrowRight,
  Terminal
} from 'lucide-react';

export default function WidgetGettingStartedPage() {
  const [copied, setCopied] = useState(false);

  const embedCode = `<!-- Live Chat Widget -->
<script>
  window.liveChatConfig = {
    accountId: 'YOUR_ACCOUNT_ID',
    widgetId: 'YOUR_WIDGET_ID'
  };
</script>
<script src="https://cdn.yourdomain.com/widget.js" async></script>

<!-- Alternative: Async Loading -->
<script>
  (function(w, d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://cdn.yourdomain.com/widget.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'live-chat-widget'));
</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const integrationSteps = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Copy the embed code',
      description: 'Copy the JavaScript snippet from the code block above',
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Add to your website',
      description: 'Paste the code before the closing </body> tag in your HTML',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Start chatting',
      description: 'The widget will appear automatically on your site',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Widget - Getting Started</h1>
          <p className="text-slate-600 mt-1">Add the live chat widget to your website</p>
        </div>

        {/* Integration Steps */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integrationSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-primary-50 p-4 rounded-full mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                  {index < integrationSteps.length - 1 && (
                    <div className="hidden md:block absolute mt-16 ml-24">
                      <ArrowRight className="w-6 h-6 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Embed Code */}
        <Card>
          <CardHeader>
            <CardTitle>Embed Code</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2 z-10"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Code
                  </>
                )}
              </Button>
              <pre className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto">
                <code>{embedCode}</code>
              </pre>
            </div>
            <div className="mt-4 flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <Terminal className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-900">
                  <strong>Important:</strong> Replace <code className="bg-yellow-100 px-1 rounded">YOUR_ACCOUNT_ID</code> and{' '}
                  <code className="bg-yellow-100 px-1 rounded">YOUR_WIDGET_ID</code> with your actual account and widget IDs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Platform-Specific Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>WordPress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-slate-600">
                <p>1. Go to your WordPress dashboard</p>
                <p>2. Navigate to <code>Appearance → Widgets</code></p>
                <p>3. Add a "Custom HTML" widget</p>
                <p>4. Paste the embed code</p>
                <p>5. Save your changes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Wix / Squarespace</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-slate-600">
                <p>1. Open your website editor</p>
                <p>2. Add a "Embed Code" element</p>
                <p>3. Paste the embed code</p>
                <p>4. Position the widget as needed</p>
                <p>5. Publish your site</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>React / Next.js</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-slate-600">
                <p>1. Install the package: <code>npm install livechat-widget</code></p>
                <p>2. Import in your layout file</p>
                <p>3. Add the component to your app</p>
                <p>4. Configure with your account ID</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Website</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-slate-600">
                <p>1. Open your HTML file</p>
                <p>2. Find the closing </code></body></code> tag</p>
                <p>3. Paste the code before it</p>
                <p>4. Save and upload to your server</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testing */}
        <Card>
          <CardHeader>
            <CardTitle>Test Your Widget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Globe className="w-12 h-12 text-slate-400" />
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 mb-1">Preview Your Widget</h3>
                <p className="text-sm text-slate-600">
                  Open your website in a browser to see the live chat widget in action. Make sure you're not logged in to see the visitor view.
                </p>
              </div>
              <Button>
                Open Preview
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}