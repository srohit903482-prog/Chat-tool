// Mock Database for Live Chat Platform
// In production, this would be replaced with PostgreSQL/MongoDB

import {
  Agent,
  Role,
  Permission,
  Department,
  Visitor,
  Chat,
  Message,
  Trigger,
  Shortcut,
  BannedIP,
  Goal,
  WidgetConfig,
  Analytics,
} from './schema';

// In-memory storage
const db = {
  agents: [] as Agent[],
  roles: [] as Role[],
  departments: [] as Department[],
  visitors: [] as Visitor[],
  chats: [] as Chat[],
  messages: [] as Message[],
  triggers: [] as Trigger[],
  shortcuts: [] as Shortcut[],
  bannedIPs: [] as BannedIP[],
  goals: [] as Goal[],
  widgetConfig: null as WidgetConfig | null,
};

// Initialize database with seed data
export function initializeDatabase() {
  // Create permissions
  const permissions: Permission[] = [
    { id: '1', name: 'analytics.view', resource: 'analytics', action: 'view', description: 'View analytics' },
    { id: '2', name: 'analytics.export', resource: 'analytics', action: 'export', description: 'Export analytics' },
    { id: '3', name: 'settings.view', resource: 'settings', action: 'view', description: 'View settings' },
    { id: '4', name: 'settings.manage', resource: 'settings', action: 'manage', description: 'Manage settings' },
    { id: '5', name: 'agents.view', resource: 'agents', action: 'view', description: 'View agents' },
    { id: '6', name: 'agents.manage', resource: 'agents', action: 'manage', description: 'Manage agents' },
    { id: '7', name: 'reports.view', resource: 'reports', action: 'view', description: 'View reports' },
    { id: '8', name: 'reports.export', resource: 'reports', action: 'export', description: 'Export reports' },
    { id: '9', name: 'triggers.view', resource: 'triggers', action: 'view', description: 'View triggers' },
    { id: '10', name: 'triggers.manage', resource: 'triggers', action: 'manage', description: 'Manage triggers' },
  ];

  // Create roles
  const adminRole: Role = {
    id: 'role-admin',
    name: 'Admin',
    description: 'Full access to all features',
    permissions,
    enabled: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const agentRole: Role = {
    id: 'role-agent',
    name: 'Agent',
    description: 'Can handle chats and view basic analytics',
    permissions: [
      permissions[0], // analytics.view
      permissions[3], // settings.view
      permissions[4], // agents.view
      permissions[6], // reports.view
      permissions[8], // triggers.view
    ],
    enabled: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const supervisorRole: Role = {
    id: 'role-supervisor',
    name: 'Supervisor',
    description: 'Can manage agents and view advanced analytics',
    permissions: [
      permissions[0], permissions[1], // analytics
      permissions[2], permissions[3], // settings
      permissions[4], permissions[5], // agents
      permissions[6], permissions[7], // reports
      permissions[8], permissions[9], // triggers
    ],
    enabled: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  db.roles = [adminRole, agentRole, supervisorRole];

  // Create departments
  const departments: Department[] = [
    {
      id: 'dept-sales',
      name: 'Sales',
      description: 'Sales team handling product inquiries',
      enabled: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'dept-support',
      name: 'Support',
      description: 'Technical support team',
      enabled: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'dept-billing',
      name: 'Billing',
      description: 'Billing and account inquiries',
      enabled: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  db.departments = departments;

  // Create agents
  const agents: Agent[] = [
    {
      id: 'agent-1',
      displayName: 'John Smith',
      name: 'John Smith',
      email: 'john@company.com',
      password: '$2a$10$8K1p/a0dY4Y5Y5Y5Y5Y5Yu Example hashed password',
      chatLimit: 5,
      roleId: 'role-admin',
      departmentId: 'dept-sales',
      enabled: true,
      avatar: 'https://i.pravatar.cc/150?img=1',
      tagline: 'Senior Sales Representative',
      skills: ['sales', 'product-knowledge', 'negotiation'],
      preferences: {
        language: 'en',
        offlineMessageNotifications: true,
        emailReports: true,
      },
      idleTimeout: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'agent-2',
      displayName: 'Sarah Johnson',
      name: 'Sarah Johnson',
      email: 'sarah@company.com',
      password: '$2a$10$8K1p/a0dY4Y5Y5Y5Y5Y5Yu Example hashed password',
      chatLimit: 5,
      roleId: 'role-supervisor',
      departmentId: 'dept-support',
      enabled: true,
      avatar: 'https://i.pravatar.cc/150?img=5',
      tagline: 'Support Team Lead',
      skills: ['technical-support', 'customer-service', 'troubleshooting'],
      preferences: {
        language: 'en',
        offlineMessageNotifications: true,
        emailReports: true,
      },
      idleTimeout: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'agent-3',
      displayName: 'Mike Wilson',
      name: 'Mike Wilson',
      email: 'mike@company.com',
      password: '$2a$10$8K1p/a0dY4Y5Y5Y5Y5Y5Yu Example hashed password',
      chatLimit: 5,
      roleId: 'role-agent',
      departmentId: 'dept-support',
      enabled: true,
      avatar: 'https://i.pravatar.cc/150?img=3',
      tagline: 'Support Agent',
      skills: ['technical-support', 'customer-service'],
      preferences: {
        language: 'en',
        offlineMessageNotifications: false,
        emailReports: false,
      },
      idleTimeout: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'agent-4',
      displayName: 'Emily Davis',
      name: 'Emily Davis',
      email: 'emily@company.com',
      password: '$2a$10$8K1p/a0dY4Y5Y5Y5Y5Y5Yu Example hashed password',
      chatLimit: 5,
      roleId: 'role-agent',
      departmentId: 'dept-billing',
      enabled: true,
      avatar: 'https://i.pravatar.cc/150?img=9',
      tagline: 'Billing Specialist',
      skills: ['billing', 'account-management'],
      preferences: {
        language: 'en',
        offlineMessageNotifications: true,
        emailReports: true,
      },
      idleTimeout: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  db.agents = agents;

  // Create visitors
  const visitors: Visitor[] = [
    {
      id: 'visitor-1',
      sessionId: 'session-1',
      ipAddress: '192.168.1.100',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      referrer: 'https://google.com',
      currentPage: '/products/plans',
      country: 'United States',
      city: 'New York',
      online: true,
      numChats: 3,
      numVisits: 5,
      firstVisit: new Date('2024-01-01'),
      lastVisit: new Date(),
    },
    {
      id: 'visitor-2',
      sessionId: 'session-2',
      ipAddress: '192.168.1.101',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      referrer: 'https://linkedin.com',
      currentPage: '/pricing',
      country: 'United Kingdom',
      city: 'London',
      online: true,
      numChats: 1,
      numVisits: 2,
      firstVisit: new Date('2024-01-15'),
      lastVisit: new Date(),
    },
    {
      id: 'visitor-3',
      sessionId: 'session-3',
      ipAddress: '192.168.1.102',
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15',
      referrer: 'https://twitter.com',
      currentPage: '/contact',
      country: 'Canada',
      city: 'Toronto',
      online: false,
      numChats: 0,
      numVisits: 1,
      firstVisit: new Date(),
      lastVisit: new Date(),
    },
  ];

  db.visitors = visitors;

  // Create chats
  const chats: Chat[] = [
    {
      id: 'chat-1',
      visitorId: 'visitor-1',
      agentId: 'agent-1',
      departmentId: 'dept-sales',
      status: 'completed',
      satisfaction: 5,
      duration: 450, // seconds
      startTime: new Date(Date.now() - 3600000),
      endTime: new Date(Date.now() - 3150000),
      tags: ['sales', 'product'],
    },
    {
      id: 'chat-2',
      visitorId: 'visitor-2',
      agentId: 'agent-2',
      departmentId: 'dept-support',
      status: 'active',
      satisfaction: undefined,
      duration: 180,
      startTime: new Date(Date.now() - 180000),
      tags: ['support', 'technical'],
    },
    {
      id: 'chat-3',
      visitorId: 'visitor-1',
      agentId: 'agent-1',
      departmentId: 'dept-sales',
      status: 'pending',
      satisfaction: undefined,
      duration: 0,
      startTime: new Date(),
      tags: ['sales'],
    },
  ];

  db.chats = chats;

  // Create messages
  const messages: Message[] = [
    {
      id: 'msg-1',
      chatId: 'chat-1',
      senderId: 'visitor-1',
      senderType: 'visitor',
      content: 'Hi, I\'m interested in your premium plan. Can you tell me more about it?',
      type: 'text',
      sentAt: new Date(Date.now() - 3550000),
    },
    {
      id: 'msg-2',
      chatId: 'chat-1',
      senderId: 'agent-1',
      senderType: 'agent',
      content: 'Hello! I\'d be happy to help. Our premium plan includes unlimited chats, advanced analytics, and priority support. Would you like me to go into more detail?',
      type: 'text',
      sentAt: new Date(Date.now() - 3500000),
    },
    {
      id: 'msg-3',
      chatId: 'chat-1',
      senderId: 'visitor-1',
      senderType: 'visitor',
      content: 'Yes please, what\'s the pricing?',
      type: 'text',
      sentAt: new Date(Date.now() - 3450000),
    },
    {
      id: 'msg-4',
      chatId: 'chat-2',
      senderId: 'visitor-2',
      senderType: 'visitor',
      content: 'I\'m having trouble logging in to my account',
      type: 'text',
      sentAt: new Date(Date.now() - 170000),
    },
    {
      id: 'msg-5',
      chatId: 'chat-2',
      senderId: 'agent-2',
      senderType: 'agent',
      content: 'I can help you with that. Are you seeing any specific error message?',
      type: 'text',
      sentAt: new Date(Date.now() - 160000),
    },
  ];

  db.messages = messages;

  // Create triggers
  const triggers: Trigger[] = [
    {
      id: 'trigger-1',
      name: 'Welcome New Visitors',
      description: 'Show welcome message to first-time visitors',
      enabled: true,
      conditions: [
        { type: 'returningVisitor', operator: 'equals', value: 'false' },
      ],
      actions: [
        { type: 'showMessage', value: 'Welcome! How can I help you today?' },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'trigger-2',
      name: 'Pricing Page Engagement',
      description: 'Proactively offer help on pricing page',
      enabled: true,
      conditions: [
        { type: 'pageUrl', operator: 'contains', value: '/pricing' },
        { type: 'timeOnPage', operator: 'greaterThan', value: '15' },
      ],
      actions: [
        { type: 'proactiveChat', value: 'I see you\'re looking at our pricing. Do you have any questions?' },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  db.triggers = triggers;

  // Create shortcuts
  const shortcuts: Shortcut[] = [
    {
      id: 'shortcut-1',
      keyword: '/welcome',
      message: 'Welcome to our chat! How can I assist you today?',
      availableFor: {
        roles: ['role-admin', 'role-supervisor', 'role-agent'],
        departments: ['dept-sales', 'dept-support', 'dept-billing'],
      },
      tag: 'greeting',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'shortcut-2',
      keyword: '/hold',
      message: 'Please hold for a moment while I check that information for you.',
      availableFor: {
        roles: ['role-admin', 'role-supervisor', 'role-agent'],
        departments: ['dept-support'],
      },
      tag: 'support',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'shortcut-3',
      keyword: '/thanks',
      message: 'Thank you for contacting us. Is there anything else I can help you with?',
      availableFor: {
        roles: ['role-admin', 'role-supervisor', 'role-agent'],
        departments: ['dept-sales', 'dept-support', 'dept-billing'],
      },
      tag: 'closing',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  db.shortcuts = shortcuts;

  // Create banned IPs
  const bannedIPs: BannedIP[] = [
    {
      id: 'banned-1',
      ipAddress: '10.0.0.50',
      reason: 'Spam and abusive behavior',
      createdAt: new Date('2024-01-10'),
    },
  ];

  db.bannedIPs = bannedIPs;

  // Create goals
  const goals: Goal[] = [
    {
      id: 'goal-1',
      name: 'Increase Sales Conversions',
      description: 'Convert visitors to paid customers through chat',
      conversationsCompleted: 45,
      enabled: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'goal-2',
      name: 'Improve Customer Satisfaction',
      description: 'Achieve high satisfaction ratings on support chats',
      conversationsCompleted: 128,
      enabled: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'goal-3',
      name: 'Reduce Response Time',
      description: 'Respond to chats within 30 seconds',
      conversationsCompleted: 89,
      enabled: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  db.goals = goals;

  // Create widget config
  const widgetConfig: WidgetConfig = {
    id: 'widget-1',
    appearance: {
      chatTitle: 'Chat with us',
      themeColor: '#0ea5e9',
      position: 'right',
      badgeColor: '#10b981',
      badgeImage: undefined,
    },
    concierge: {
      title: 'Customer Support',
      byline: 'We typically reply in a few minutes',
      avatar: 'https://i.pravatar.cc/150?img=68',
    },
    forms: {
      preChat: {
        greeting: 'Please provide your name and email to start chatting',
        requireIdentity: true,
        requirePhone: false,
        requireQuestion: true,
      },
      offline: {
        greeting: 'Sorry, we\'re offline right now. Leave us a message and we\'ll get back to you soon.',
        requirePhone: false,
        allowMessagingChannels: true,
      },
    },
    settings: {
      notificationSounds: true,
      satisfactionRating: true,
    },
    security: {
      blockedCountries: [],
      allowedDomains: ['example.com', 'mycompany.com'],
      visitorAuthentication: false,
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  db.widgetConfig = widgetConfig;

  return db;
}

// Export database instance
export { db };