'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  History, 
  BarChart3, 
  Monitor, 
  Settings, 
  Users2, 
  Grid,
  Menu,
  X,
  MessageSquare,
  Code,
  User,
  CreditCard,
  Smartphone,
  Globe,
  Bell,
  Palette,
  Shield,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  subItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <LayoutDashboard className="w-5 h-5" />,
    subItems: [
      { label: 'Widget', href: '/widget' },
      { label: 'Visitors', href: '/home/visitors' },
      { label: 'Analytics', href: '/home/analytics' },
      { label: 'Triggers', href: '/home/triggers' },
    ],
  },
  {
    label: 'Visitors',
    href: '/visitors',
    icon: <Users className="w-5 h-5" />,
  },
  {
    label: 'History',
    href: '/history',
    icon: <History className="w-5 h-5" />,
  },
  {
    label: 'Analytics',
    href: '/analytics',
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    label: 'Monitor',
    href: '/monitor',
    icon: <Monitor className="w-5 h-5" />,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <Settings className="w-5 h-5" />,
    subItems: [
      { label: 'Agents', href: '/settings/agents' },
      { label: 'Departments', href: '/settings/departments' },
      { label: 'Roles & Permissions', href: '/settings/roles' },
      { label: 'Routing', href: '/settings/routing' },
      { label: 'Shortcuts', href: '/settings/shortcuts' },
      { label: 'Banned Visitors', href: '/settings/banned' },
      { label: 'Triggers', href: '/settings/triggers' },
      { label: 'Goals', href: '/settings/goals' },
    ],
  },
  {
    label: 'Team',
    href: '/team',
    icon: <Users2 className="w-5 h-5" />,
  },
  {
    label: 'View All',
    href: '/view-all',
    icon: <Grid className="w-5 h-5" />,
  },
  {
    label: 'Widget',
    href: '/widget',
    icon: <MessageSquare className="w-5 h-5" />,
    subItems: [
      { label: 'Getting Started', href: '/widget/getting-started' },
      { label: 'Appearance', href: '/widget/appearance' },
      { label: 'Forms', href: '/widget/forms' },
      { label: 'Settings', href: '/widget/settings' },
      { label: 'Security', href: '/widget/security' },
    ],
  },
  {
    label: 'Personal',
    href: '/personal',
    icon: <User className="w-5 h-5" />,
    subItems: [
      { label: 'Profile', href: '/personal/profile' },
      { label: 'Preferences', href: '/personal/preferences' },
      { label: 'Sounds', href: '/personal/sounds' },
      { label: 'Idle Timeout', href: '/personal/timeout' },
      { label: 'Email Reports', href: '/personal/reports' },
    ],
  },
  {
    label: 'Account',
    href: '/account',
    icon: <CreditCard className="w-5 h-5" />,
    subItems: [
      { label: 'Subscription', href: '/account/subscription' },
      { label: 'Apps', href: '/account/apps' },
      { label: 'API & SDKs', href: '/account/api' },
      { label: 'Settings', href: '/account/settings' },
    ],
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Home']);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isItemActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out lg:translate-x-0',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full',
          className
        )}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-200">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">LiveChat</h1>
              <p className="text-xs text-slate-500">Customer Support</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto scrollbar-thin p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      if (item.subItems) {
                        toggleExpanded(item.label);
                      }
                      setIsMobileOpen(false);
                    }}
                    className={cn(
                      'w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors',
                      isItemActive(item.href)
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-slate-700 hover:bg-slate-100'
                    )}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 flex-1"
                      onClick={(e) => {
                        if (item.subItems) {
                          e.preventDefault();
                          toggleExpanded(item.label);
                        }
                      }}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                    {item.subItems && (
                      <svg
                        className={cn(
                          'w-4 h-4 transition-transform',
                          expandedItems.includes(item.label) ? 'rotate-90' : ''
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Sub Items */}
                  {item.subItems && expandedItems.includes(item.label) && (
                    <ul className="mt-1 ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className={cn(
                              'block px-3 py-2 rounded-lg text-sm transition-colors',
                              pathname === subItem.href
                                ? 'bg-primary-50 text-primary-700 font-medium'
                                : 'text-slate-600 hover:bg-slate-50'
                            )}
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">
                  John Smith
                </p>
                <p className="text-xs text-slate-500 truncate">
                  Senior Sales Rep
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}