# Barangay Info Hub Backend

This is the backend server for the Barangay Info Hub application, handling chat functionality and file uploads.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create required directories:
```bash
mkdir public
mkdir public/uploads
```

3. Start the development server:
```bash
npm run dev
```

The server will run on http://localhost:5000 by default.

## API Endpoints

### Chat Endpoint
- **POST** `/api/chat`
- Handles text, voice, and video messages
- Request body:
```json
{
  "message": "Your message here",
  "type": "text|voice|video"
}
```

### File Upload Endpoint
- **POST** `/api/upload`
- Handles file uploads for voice and video messages
- Form data:
  - `file`: The file to upload
  - `type`: The type of file (voice/video)

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
PORT=5000
```

## Features

- Text message processing
- Voice message handling
- Video message support (for ASL)
- File upload functionality
- CORS enabled for frontend integration
- Static file serving for uploaded files
