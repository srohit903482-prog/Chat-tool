'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Check, 
  X, 
  Zap, 
  TrendingUp, 
  ArrowRight,
  Crown,
  Building,
  Sparkles
} from 'lucide-react';

export default function SubscriptionPage() {
  const plans = [
    {
      name: 'Basic',
      icon: <Zap className="w-8 h-8" />,
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        { included: true, text: '1 Agent' },
        { included: true, text: '1,000 chats/month' },
        { included: true, text: 'Basic analytics' },
        { included: true, text: 'Email support' },
        { included: false, text: 'Custom branding' },
        { included: false, text: 'API access' },
        { included: false, text: 'Priority support' },
      ],
      popular: false,
    },
    {
      name: 'Pro',
      icon: <TrendingUp className="w-8 h-8" />,
      price: '$79',
      period: '/month',
      description: 'For growing businesses',
      features: [
        { included: true, text: '5 Agents' },
        { included: true, text: 'Unlimited chats' },
        { included: true, text: 'Advanced analytics' },
        { included: true, text: 'Priority support' },
        { included: true, text: 'Custom branding' },
        { included: true, text: 'API access' },
        { included: false, text: 'Dedicated account manager' },
      ],
      popular: true,
      current: true,
    },
    {
      name: 'Enterprise',
      icon: <Building className="w-8 h-8" />,
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        { included: true, text: 'Unlimited Agents' },
        { included: true, text: 'Unlimited chats' },
        { included: true, text: 'Enterprise analytics' },
        { included: true, text: '24/7 phone support' },
        { included: true, text: 'Custom branding' },
        { included: true, text: 'Full API access' },
        { included: true, text: 'Dedicated account manager' },
      ],
      popular: false,
    },
  ];

  const usageStats = [
    { label: 'Chats Used', used: 2450, limit: 5000, percentage: 49 },
    { label: 'Agents', used: 3, limit: 5, percentage: 60 },
    { label: 'Storage', used: 2.4, limit: 10, unit: 'GB', percentage: 24 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Account - Subscription</h1>
          <p className="text-slate-600 mt-1">Manage your subscription and billing</p>
        </div>

        {/* Current Plan */}
        <Card className="bg-gradient-to-r from-primary-500 to-primary-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="w-5 h-5" />
                  <span className="text-sm font-medium">Current Plan: Pro</span>
                </div>
                <h2 className="text-3xl font-bold mb-1">$79/month</h2>
                <p className="text-primary-100 text-sm">
                  Your plan renews on January 15, 2024
                </p>
              </div>
              <div className="text-right">
                <Button variant="secondary">
                  Manage Billing
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {usageStats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">{stat.label}</span>
                    <span className="text-sm text-slate-600">
                      {stat.used} / {stat.limit}{stat.unit || ''}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-primary-500 h-2 rounded-full transition-all"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pricing Plans */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Upgrade Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.popular ? 'border-2 border-primary-500 shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                {plan.current && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Current Plan
                    </span>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-full mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-slate-900">
                        {plan.price}
                      </span>
                      <span className="text-slate-600">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.current ? 'outline' : 'primary'}
                  >
                    {plan.current ? 'Current Plan' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cancellation */}
        <Card className="border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <Sparkles className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">Need to cancel?</h3>
                <p className="text-sm text-slate-600 mt-1">
                  You can cancel your subscription at any time. Your access will continue until the end of your billing period.
                </p>
              </div>
              <Button variant="outline" className="text-red-600">
                Cancel Subscription
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}