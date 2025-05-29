# Sigla App: AI-Powered Barangay Information System

## Overview
Sigla App is an innovative AI-powered barangay information system developed during the 2024 UP Diliman Hackathon. It aims to bridge the digital divide in local governance by providing an accessible platform for residents to access barangay services and information.

## Technical Architecture

### Frontend Stack
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **API Integration**: Axios
- **Authentication**: JWT

### Backend Stack
- **Framework**: Node.js with Express
- **Database**: MongoDB
- **AI Integration**: Google Vertex AI (Gemini)
- **Authentication**: JWT
- **Cloud Services**: Google Cloud Platform

## Key Features
- 🤖 AI-powered conversational agent for natural language interaction
- 📱 Responsive design for all devices
- 🔒 Secure authentication and data protection
- 📊 Real-time service tracking
- 🎯 Multi-language support
- 📝 Document generation and management

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB
- Google Cloud Platform account (for AI features)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sigla-app.git
cd sigla-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:3000
VITE_GOOGLE_CLOUD_PROJECT_ID=your-project-id
```

4. Start the development server:
```bash
npm run dev
```

## API Documentation

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/verify` - Verify JWT token

### Service Endpoints
- `GET /api/services` - List all services
- `POST /api/services/request` - Request a service
- `GET /api/services/status/:id` - Check service status

### Chat Endpoints
- `POST /api/chat` - Send message to AI assistant
- `GET /api/chat/history` - Get chat history
- `POST /api/chat/voice` - Process voice input

## Development

### Code Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── services/      # API services
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
└── types/         # TypeScript type definitions
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run linter

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- UP Diliman Hackathon 2024
- Google Cloud Platform
- All contributors and supporters 