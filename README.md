# BuddySurf: Instant Meetup App

BuddySurf is a real-time location-based social platform that enables spontaneous meetups for social, professional, and hobby-based activities.

## Core Features
- Real-time matching using AI and location-based algorithms
- Built-in safety features including ID verification and live tracking
- Gamification system with points, badges, and leaderboards
- Flexible meetup scheduling with instant or planned options

## Tech Stack
- **Frontend**: Next.js (React) with Material-UI
- **Backend**: Firebase (Firestore, Authentication, Functions)
- **APIs**: Google Maps API, Windsurf AI, Twilio
- **Deployment**: Google Cloud Run with Cloud Build

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Firebase CLI
- Google Cloud SDK
- Docker (for local container testing)

### Local Development
1. Clone the repository
```bash
git clone [repository-url]
cd buddysurf
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```
Edit `.env.local` with your API keys and Firebase configuration.

4. Start the development server
```bash
npm run dev
```

### Cloud Deployment

#### Initial Setup
1. Create a new Google Cloud project
2. Enable the following APIs:
   - Cloud Build API
   - Cloud Run API
   - Container Registry API

3. Set up Cloud Build trigger:
   - Go to Cloud Build > Triggers
   - Connect your repository
   - Choose "Dockerfile" as build configuration
   - Set the branch pattern to ^main$
   - Use the root directory (/) as build context

4. Set environment variables in Cloud Run:
   - Go to Cloud Run > Service
   - Add your environment variables from .env.example

#### Continuous Deployment
The application will automatically deploy when you push to the main branch:
```bash
git push origin main
```

You can monitor builds in the Cloud Build console and deployments in the Cloud Run console.

## Project Structure
```
buddysurf/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/        # Next.js pages
│   ├── services/     # Firebase and API services
│   ├── hooks/        # Custom React hooks
│   ├── utils/        # Utility functions
│   └── styles/       # Global styles and themes
├── public/           # Static assets
└── firebase/        # Firebase configuration and functions
```

## Documentation
- [API Documentation](./docs/API_DOCS.md)
- [Feature Documentation](./docs/FEATURES.md)
- [Testing Guide](./docs/TESTING.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
