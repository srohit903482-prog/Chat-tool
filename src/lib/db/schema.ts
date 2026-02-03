// Database Schema Definition
// This file defines all database entities for the Live Chat Platform

export interface Agent {
  id: string;
  displayName: string;
  name: string;
  email: string;
  password: string;
  chatLimit: number;
  roleId: string;
  departmentId?: string;
  enabled: boolean;
  avatar?: string;
  tagline?: string;
  skills: string[];
  preferences: {
    language: string;
    offlineMessageNotifications: boolean;
    emailReports: boolean;
  };
  idleTimeout: number;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Permission {
  id: string;
  name: string;
  resource: string;
  action: string;
  description: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Visitor {
  id: string;
  sessionId: string;
  ipAddress: string;
  userAgent: string;
  referrer?: string;
  currentPage: string;
  country?: string;
  city?: string;
  online: boolean;
  numChats: number;
  numVisits: number;
  firstVisit: Date;
  lastVisit: Date;
  customData?: Record<string, any>;
}

export interface Chat {
  id: string;
  visitorId: string;
  agentId?: string;
  departmentId?: string;
  status: 'pending' | 'active' | 'completed' | 'missed';
  satisfaction?: number;
  duration: number;
  startTime: Date;
  endTime?: Date;
  tags: string[];
  goalId?: string;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  senderType: 'visitor' | 'agent' | 'system';
  content: string;
  type: 'text' | 'file' | 'image' | 'system';
  fileUrl?: string;
  fileName?: string;
  sentAt: Date;
  readAt?: Date;
}

export interface Trigger {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  conditions: TriggerCondition[];
  actions: TriggerAction[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TriggerCondition {
  type: 'timeOnPage' | 'pageUrl' | 'scrollDepth' | 'returningVisitor' | 'referrer';
  operator: 'equals' | 'contains' | 'greaterThan' | 'lessThan';
  value: string | number;
}

export interface TriggerAction {
  type: 'showMessage' | 'proactiveChat' | 'redirect' | 'customEvent';
  value: string;
}

export interface Shortcut {
  id: string;
  keyword: string;
  message: string;
  availableFor: {
    roles: string[];
    departments: string[];
  };
  tag?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BannedIP {
  id: string;
  ipAddress: string;
  reason: string;
  createdAt: Date;
}

export interface Goal {
  id: string;
  name: string;
  description: string;
  conversationsCompleted: number;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface WidgetConfig {
  id: string;
  appearance: {
    chatTitle: string;
    themeColor: string;
    position: 'left' | 'right';
    badgeColor: string;
    badgeImage?: string;
  };
  concierge: {
    title: string;
    byline: string;
    avatar?: string;
  };
  forms: {
    preChat: {
      greeting: string;
      requireIdentity: boolean;
      requirePhone: boolean;
      requireQuestion: boolean;
    };
    offline: {
      greeting: string;
      requirePhone: boolean;
      allowMessagingChannels: boolean;
    };
  };
  settings: {
    notificationSounds: boolean;
    satisfactionRating: boolean;
  };
  security: {
    blockedCountries: string[];
    allowedDomains: string[];
    visitorAuthentication: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Analytics {
  chatReports: {
    totalChats: number;
    completedChats: number;
    missedChats: number;
    averageDuration: number;
    satisfactionScore: number;
  };
  agentReports: {
    agentId: string;
    agentName: string;
    chatsHandled: number;
    averageResponseTime: number;
    availability: number;
    satisfactionScore: number;
  }[];
  dateRange: {
    start: Date;
    end: Date;
  };
}