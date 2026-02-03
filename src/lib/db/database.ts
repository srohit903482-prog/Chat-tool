// Database interface with CRUD operations
import { db, initializeDatabase } from './mockDatabase';
import {
  Agent,
  Role,
  Department,
  Visitor,
  Chat,
  Message,
  Trigger,
  Shortcut,
  BannedIP,
  Goal,
  WidgetConfig,
} from './schema';

// Initialize database on import
initializeDatabase();

// Agent operations
export const agentRepository = {
  findAll: () => db.agents,
  findById: (id: string) => db.agents.find(a => a.id === id),
  findByEmail: (email: string) => db.agents.find(a => a.email === email),
  create: (agent: Omit<Agent, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newAgent: Agent = {
      ...agent,
      id: `agent-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.agents.push(newAgent);
    return newAgent;
  },
  update: (id: string, updates: Partial<Agent>) => {
    const index = db.agents.findIndex(a => a.id === id);
    if (index === -1) return null;
    db.agents[index] = { ...db.agents[index], ...updates, updatedAt: new Date() };
    return db.agents[index];
  },
  delete: (id: string) => {
    const index = db.agents.findIndex(a => a.id === id);
    if (index === -1) return false;
    db.agents.splice(index, 1);
    return true;
  },
};

// Role operations
export const roleRepository = {
  findAll: () => db.roles,
  findById: (id: string) => db.roles.find(r => r.id === id),
  create: (role: Omit<Role, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newRole: Role = {
      ...role,
      id: `role-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.roles.push(newRole);
    return newRole;
  },
  update: (id: string, updates: Partial<Role>) => {
    const index = db.roles.findIndex(r => r.id === id);
    if (index === -1) return null;
    db.roles[index] = { ...db.roles[index], ...updates, updatedAt: new Date() };
    return db.roles[index];
  },
  delete: (id: string) => {
    const index = db.roles.findIndex(r => r.id === id);
    if (index === -1) return false;
    db.roles.splice(index, 1);
    return true;
  },
};

// Department operations
export const departmentRepository = {
  findAll: () => db.departments,
  findById: (id: string) => db.departments.find(d => d.id === id),
  create: (dept: Omit<Department, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newDept: Department = {
      ...dept,
      id: `dept-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.departments.push(newDept);
    return newDept;
  },
  update: (id: string, updates: Partial<Department>) => {
    const index = db.departments.findIndex(d => d.id === id);
    if (index === -1) return null;
    db.departments[index] = { ...db.departments[index], ...updates, updatedAt: new Date() };
    return db.departments[index];
  },
  delete: (id: string) => {
    const index = db.departments.findIndex(d => d.id === id);
    if (index === -1) return false;
    db.departments.splice(index, 1);
    return true;
  },
};

// Visitor operations
export const visitorRepository = {
  findAll: () => db.visitors,
  findById: (id: string) => db.visitors.find(v => v.id === id),
  findBySessionId: (sessionId: string) => db.visitors.find(v => v.sessionId === sessionId),
  create: (visitor: Omit<Visitor, 'id' | 'firstVisit' | 'lastVisit' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date();
    const newVisitor: Visitor = {
      ...visitor,
      id: `visitor-${Date.now()}`,
      numChats: 0,
      numVisits: 1,
      firstVisit: now,
      lastVisit: now,
      createdAt: now,
      updatedAt: now,
    };
    db.visitors.push(newVisitor);
    return newVisitor;
  },
  update: (id: string, updates: Partial<Visitor>) => {
    const index = db.visitors.findIndex(v => v.id === id);
    if (index === -1) return null;
    db.visitors[index] = { ...db.visitors[index], ...updates, updatedAt: new Date() };
    return db.visitors[index];
  },
  delete: (id: string) => {
    const index = db.visitors.findIndex(v => v.id === id);
    if (index === -1) return false;
    db.visitors.splice(index, 1);
    return true;
  },
  findOnline: () => db.visitors.filter(v => v.online),
};

// Chat operations
export const chatRepository = {
  findAll: () => db.chats,
  findById: (id: string) => db.chats.find(c => c.id === id),
  findByVisitorId: (visitorId: string) => db.chats.filter(c => c.visitorId === visitorId),
  findByAgentId: (agentId: string) => db.chats.filter(c => c.agentId === agentId),
  findActive: () => db.chats.filter(c => c.status === 'active'),
  findPending: () => db.chats.filter(c => c.status === 'pending'),
  create: (chat: Omit<Chat, 'id' | 'startTime' | 'createdAt' | 'updatedAt'>) => {
    const newChat: Chat = {
      ...chat,
      id: `chat-${Date.now()}`,
      startTime: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.chats.push(newChat);
    return newChat;
  },
  update: (id: string, updates: Partial<Chat>) => {
    const index = db.chats.findIndex(c => c.id === id);
    if (index === -1) return null;
    db.chats[index] = { ...db.chats[index], ...updates, updatedAt: new Date() };
    return db.chats[index];
  },
  delete: (id: string) => {
    const index = db.chats.findIndex(c => c.id === id);
    if (index === -1) return false;
    db.chats.splice(index, 1);
    return true;
  },
};

// Message operations
export const messageRepository = {
  findAll: () => db.messages,
  findById: (id: string) => db.messages.find(m => m.id === id),
  findByChatId: (chatId: string) => db.messages.filter(m => m.chatId === chatId),
  create: (message: Omit<Message, 'id' | 'sentAt' | 'createdAt' | 'updatedAt'>) => {
    const newMessage: Message = {
      ...message,
      id: `msg-${Date.now()}`,
      sentAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.messages.push(newMessage);
    return newMessage;
  },
  update: (id: string, updates: Partial<Message>) => {
    const index = db.messages.findIndex(m => m.id === id);
    if (index === -1) return null;
    db.messages[index] = { ...db.messages[index], ...updates, updatedAt: new Date() };
    return db.messages[index];
  },
  delete: (id: string) => {
    const index = db.messages.findIndex(m => m.id === id);
    if (index === -1) return false;
    db.messages.splice(index, 1);
    return true;
  },
};

// Trigger operations
export const triggerRepository = {
  findAll: () => db.triggers,
  findById: (id: string) => db.triggers.find(t => t.id === id),
  findEnabled: () => db.triggers.filter(t => t.enabled),
  create: (trigger: Omit<Trigger, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTrigger: Trigger = {
      ...trigger,
      id: `trigger-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.triggers.push(newTrigger);
    return newTrigger;
  },
  update: (id: string, updates: Partial<Trigger>) => {
    const index = db.triggers.findIndex(t => t.id === id);
    if (index === -1) return null;
    db.triggers[index] = { ...db.triggers[index], ...updates, updatedAt: new Date() };
    return db.triggers[index];
  },
  delete: (id: string) => {
    const index = db.triggers.findIndex(t => t.id === id);
    if (index === -1) return false;
    db.triggers.splice(index, 1);
    return true;
  },
};

// Shortcut operations
export const shortcutRepository = {
  findAll: () => db.shortcuts,
  findById: (id: string) => db.shortcuts.find(s => s.id === id),
  findByKeyword: (keyword: string) => db.shortcuts.find(s => s.keyword === keyword),
  create: (shortcut: Omit<Shortcut, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newShortcut: Shortcut = {
      ...shortcut,
      id: `shortcut-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.shortcuts.push(newShortcut);
    return newShortcut;
  },
  update: (id: string, updates: Partial<Shortcut>) => {
    const index = db.shortcuts.findIndex(s => s.id === id);
    if (index === -1) return null;
    db.shortcuts[index] = { ...db.shortcuts[index], ...updates, updatedAt: new Date() };
    return db.shortcuts[index];
  },
  delete: (id: string) => {
    const index = db.shortcuts.findIndex(s => s.id === id);
    if (index === -1) return false;
    db.shortcuts.splice(index, 1);
    return true;
  },
};

// Banned IP operations
export const bannedIPRepository = {
  findAll: () => db.bannedIPs,
  findById: (id: string) => db.bannedIPs.find(b => b.id === id),
  findByIP: (ipAddress: string) => db.bannedIPs.find(b => b.ipAddress === ipAddress),
  create: (bannedIP: Omit<BannedIP, 'id' | 'createdAt'>) => {
    const newBannedIP: BannedIP = {
      ...bannedIP,
      id: `banned-${Date.now()}`,
      createdAt: new Date(),
    };
    db.bannedIPs.push(newBannedIP);
    return newBannedIP;
  },
  delete: (id: string) => {
    const index = db.bannedIPs.findIndex(b => b.id === id);
    if (index === -1) return false;
    db.bannedIPs.splice(index, 1);
    return true;
  },
};

// Goal operations
export const goalRepository = {
  findAll: () => db.goals,
  findById: (id: string) => db.goals.find(g => g.id === id),
  create: (goal: Omit<Goal, 'id' | 'conversationsCompleted' | 'createdAt' | 'updatedAt'>) => {
    const newGoal: Goal = {
      ...goal,
      id: `goal-${Date.now()}`,
      conversationsCompleted: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.goals.push(newGoal);
    return newGoal;
  },
  update: (id: string, updates: Partial<Goal>) => {
    const index = db.goals.findIndex(g => g.id === id);
    if (index === -1) return null;
    db.goals[index] = { ...db.goals[index], ...updates, updatedAt: new Date() };
    return db.goals[index];
  },
  delete: (id: string) => {
    const index = db.goals.findIndex(g => g.id === id);
    if (index === -1) return false;
    db.goals.splice(index, 1);
    return true;
  },
};

// Widget config operations
export const widgetConfigRepository = {
  getConfig: () => db.widgetConfig,
  updateConfig: (updates: Partial<WidgetConfig>) => {
    if (!db.widgetConfig) return null;
    db.widgetConfig = { ...db.widgetConfig, ...updates, updatedAt: new Date() };
    return db.widgetConfig;
  },
};

export default { db };