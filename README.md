# Live Chat Platform

A comprehensive, production-ready web-based live chat and visitor engagement platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Core Modules
- **Home Dashboard**: Overview of visitors, chats, analytics, and triggers
- **Visitors**: Real-time visitor monitoring and engagement
- **History**: Complete chat history with search and filtering
- **Analytics**: Detailed performance reports and metrics
- **Monitor**: Real-time dashboard with live KPIs
- **Settings**: Complete configuration management
  - Agents management
  - Departments organization
  - Roles & Permissions (RBAC)
  - Chat routing configuration
  - Shortcuts / canned responses
  - Banned visitors management
  - Triggers automation
  - Goal tracking
- **Widget Configuration**: Complete customization for chat widget
  - Appearance settings
  - Pre-chat and offline forms
  - Notification settings
  - Security controls
- **Personal Settings**: Agent profile and preferences
- **Account**: Subscription management, API & SDKs

### Key Capabilities
- Real-time visitor tracking via WebSocket
- Role-based access control (RBAC)
- Automated triggers and routing
- Comprehensive analytics and reporting
- Multi-tenant architecture ready
- GDPR-compliant data handling
- Responsive design for all devices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Real-time**: Socket.IO (ready for integration)
- **Authentication**: JWT tokens
- **Database**: Mock database (ready for PostgreSQL/MongoDB)
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd live-chat-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
live-chat-platform/
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── page.tsx             # Home dashboard
│   │   ├── visitors/            # Visitors module
│   │   ├── history/             # Chat history
│   │   ├── analytics/           # Analytics dashboard
│   │   ├── monitor/             # Real-time monitor
│   │   ├── settings/            # Settings pages
│   │   ├── widget/              # Widget configuration
│   │   ├── personal/            # Personal settings
│   │   ├── account/             # Account management
│   │   ├── team/                # Team overview
│   │   └── view-all/            # Comprehensive view
│   ├── components/
│   │   ├── layout/              # Layout components
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Header.tsx
│   │   └── ui/                  # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Select.tsx
│   │       ├── Card.tsx
│   │       └── Modal.tsx
│   ├── lib/
│   │   ├── auth/                # Authentication utilities
│   │   ├── db/                  # Database layer
│   │   └── utils/               # Helper functions
│   └── app/
│       ├── globals.css          # Global styles
│       └── layout.tsx           # Root layout
├── public/                      # Static assets
└── package.json                 # Dependencies
```

## Database Schema

### Core Entities
- **Agents**: User accounts with roles and permissions
- **Roles**: Role definitions with permissions
- **Departments**: Agent organization
- **Visitors**: Website visitor tracking
- **Chats**: Chat sessions
- **Messages**: Chat messages
- **Triggers**: Automation rules
- **Shortcuts**: Canned responses
- **BannedIPs**: Blocked visitors
- **Goals**: Performance goals
- **WidgetConfig**: Widget settings

See `src/lib/db/schema.ts` for complete schema definitions.

## API Endpoints (Ready for Implementation)

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

### Agents
- `GET /api/agents` - List all agents
- `GET /api/agents/:id` - Get agent details
- `POST /api/agents` - Create agent
- `PUT /api/agents/:id` - Update agent
- `DELETE /api/agents/:id` - Delete agent

### Visitors
- `GET /api/visitors` - List visitors
- `GET /api/visitors/:id` - Get visitor details
- `POST /api/visitors/:id/chat` - Start chat

### Chats
- `GET /api/chats` - List chats
- `GET /api/chats/:id` - Get chat details
- `POST /api/chats` - Create chat
- `PUT /api/chats/:id` - Update chat status

### Messages
- `GET /api/chats/:id/messages` - Get chat messages
- `POST /api/chats/:id/messages` - Send message

## Configuration

### Environment Variables

Create a `.env.local` file:

```env
JWT_SECRET=your-secret-key
DATABASE_URL=your-database-url
WS_PORT=3001
```

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
vercel deploy
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License

## Support

For support and questions, please open an issue in the repository.

## Roadmap

- [ ] WebSocket server implementation
- [ ] PostgreSQL/MongoDB integration
- [ ] Real-time updates via Socket.IO
- [ ] File upload/download
- [ ] Email notifications
- [ ] Mobile responsive optimization
- [ ] Performance optimization
- [ ] Comprehensive testing
- [ ] API documentation (Swagger)
- [ ] Docker containerization

