# Personal Backlog Frontend

React + TypeScript frontend for personal backlog management.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

## Setup

### Prerequisites

- Node.js 24.x or higher
- npm 11.x or higher

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at http://localhost:5173

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Backend Connection

The frontend connects to the FastAPI backend at `http://localhost:8000`. Make sure the backend is running before starting the frontend.

To start the backend:
```bash
cd ../backend
uv run uvicorn main:app --reload
```

## Project Structure

```
frontend/
├── src/
│   ├── App.tsx         # Main application component
│   ├── App.css         # Application styles
│   ├── main.tsx        # Application entry point
│   └── assets/         # Static assets
├── public/             # Public static files
├── index.html          # HTML template
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Development

This project uses Vite for fast development with Hot Module Replacement (HMR).

### Code Style

The project uses ESLint for code quality. Run `npm run lint` to check for issues.
