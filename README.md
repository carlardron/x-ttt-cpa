# X-TTT-CPA :: Modernised Multiplayer Tic-Tac-Toe

A containerised, full-stack multiplayer game application demonstrating modern DevOps practices and architectural patterns through the modernisation of a legacy React/Node.js application.

## 🎯 Project Overview

This project was forked from [xims/x-ttt](https://github.com/xims/x-ttt) as a technical demonstration of modernising legacy web applications whilst preserving core functionality. The focus was on containerisation, reverse proxy architecture, and creating a contemporary frontend wrapper.

**Original Application**: Classic multiplayer Tic-Tac-Toe built with React.js and Node.js  
**Modernisation Goal**: Containerise legacy code and wrap it in a modern Next.js interface

## 🏗️ Architecture

### Multi-Layer Nginx Reverse Proxy Pattern

```
┌─────────────────────────────────────────┐
│  nginx-frontend (Port 8080)             │
│  ├─ / → Next.js Wrapper (Port 3002)     │
│  └─ /game/ → nginx-backend              │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  nginx-backend (Port 8081)              │
│  ├─ / → React App (Port 3000)           │
│  ├─ /ws → WebSocket Server (Port 3001)  │
│  └─ /images → Static Assets             │
└─────────────────────────────────────────┘
```

### Technology Stack

**Frontend Wrapper (New)**
- Next.js 15 (App Router)
- Material-UI (MUI) v6
- TypeScript
- Retro terminal-inspired design

**Original Application (Preserved)**
- React.js with Webpack
- Socket.io for real-time multiplayer
- Node.js/Express backend
- SASS styling

**Infrastructure**
- Docker & Docker Compose
- Nginx reverse proxies (dual-layer)
- Named volumes for dependency persistence

## 🚀 Getting Started

### Prerequisites
- Docker Desktop (Windows/Mac) or Docker Engine + Docker Compose (Linux)
- Git

### Development Environment

```bash
# Clone the repository
git clone https://github.com/carlardron/x-ttt-cpa.git
cd x-ttt-cpa

# Start development environment
docker-compose -f docker-compose.dev.yml up --build

# Access points:
# - Main site (Next.js wrapper): http://localhost:8080
# - Direct game access: http://localhost:8081
```

### Architecture Highlights

**Containerisation Strategy**
- Each service runs in isolated Docker containers
- Named volumes prevent `node_modules` conflicts between host and container
- Development volumes enable hot-reload capabilities
- Multi-stage nginx routing preserves direct access to legacy app

**Key Technical Decisions**
1. **Dual Nginx Pattern**: Frontend proxy routes to wrapper OR legacy app, backend proxy handles legacy services
2. **Iframe Integration**: Legacy app embedded without code modification
3. **Path Rewriting**: URL manipulation via nginx to maintain legacy app routing
4. **Volume Management**: Named volumes for dependencies, bind mounts for live code updates

## 📁 Project Structure

```
x-ttt-cpa/
├── nextjs-wrapper/               # New Next.js frontend wrapper
│   ├── app/                      # Next.js App Router pages & components
│   ├── Dockerfile.dev            # Development container config
│   └── package.json
├── react_ws_src/                 # Original React application source
│   ├── src/                      # React components & game logic (unchanged)
│   ├── Dockerfile.dev            # Containerised development environment
│   └── webpack.config.js
├── WS/                           # Original Node.js WebSocket server
│   ├── server.js                 # Express + Socket.io server (unchanged)
│   └── Dockerfile
├── nginx/                        # Reverse proxy configurations
│   ├── nginx.frontend.dev.conf   # Main entry point routing
│   └── nginx.dev.conf            # Backend service routing
├── docker-compose.dev.yml        # Development orchestration
└── wip/                          # Experimental scripts (not production-ready)
```

## 🎨 Features

### Implemented
- ✅ Fully containerised development environment
- ✅ Dual-layer nginx reverse proxy architecture
- ✅ Next.js wrapper with retro terminal aesthetic
- ✅ Legacy app preserved and accessible via iframe
- ✅ Hot-reload support for both Next.js and React apps
- ✅ Direct access to original app maintained (port 8081)

## 🔧 Development Notes

**What Was Modified**
- Added complete Docker containerisation
- Implemented dual nginx reverse proxy architecture
- Created Next.js wrapper application
- Added development environment configuration
- Implemented named volume strategy for dependency management

**What Was Preserved**
- Original React game logic and components
- WebSocket server implementation
- Game mechanics and state management
- Original styling and user experience
- XML configuration system

**AI Assistance**
AI tools were used to accelerate development of boilerplate code, initial configurations, and this README! All architectural decisions, implementation strategies, and problem-solving approaches were human-directed. Code generated by AI was reviewed, tested, and often significantly modified to meet project requirements.

## 👤 Author

**Carl Ardron**

This modernisation project demonstrates:
- Full-stack development capabilities
- DevOps and containerisation expertise
- Reverse proxy architecture design
- Legacy application modernisation strategies
- Modern frontend framework integration

Original application by [xims](https://github.com/xims)

## 📝 Licence

This project maintains the licensing of the original [x-ttt](https://github.com/xims/x-ttt) repository.

---

**Note**: This is a demonstration project showcasing containerisation and modernisation techniques. It is provided as-is with no planned further development. The focus was on architectural implementation rather than production deployment.
