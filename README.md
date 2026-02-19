# personal-backlog

Personal backlog management system with FastAPI backend and React/TypeScript frontend.

## Overview

This is a full-stack application for managing personal backlogs, built with:

- **Backend**: Python 3.12+ with FastAPI framework, managed by uv
- **Frontend**: React 19 with TypeScript, built with Vite

## Project Structure

```
personal-backlog/
├── backend/           # FastAPI backend application
│   ├── app/          # Application modules
│   ├── main.py       # FastAPI entry point
│   ├── pyproject.toml # Python dependencies (uv)
│   └── README.md     # Backend documentation
├── frontend/         # React/TypeScript frontend
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   ├── package.json  # Node.js dependencies
│   └── README.md     # Frontend documentation
└── README.md         # This file
```

## Quick Start

### Prerequisites

- Python 3.12 or higher
- [uv](https://github.com/astral-sh/uv) package manager for Python
- Node.js 24.x or higher
- npm 11.x or higher

### Backend Setup

```bash
cd backend
uv sync
uv run uvicorn main:app --reload
```

Backend will be available at http://localhost:8000
- API Documentation: http://localhost:8000/docs

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at http://localhost:5173

## Development Workflow (cc-sdd)

This project follows the **cc-sdd** (Component-Centric Software Development Design) approach:

### Key Principles

1. **Component-First Development**: Design and develop features as self-contained components
2. **API-Driven Architecture**: Backend and frontend communicate through well-defined REST APIs
3. **Iterative Development**: Build incrementally with continuous testing and validation
4. **Documentation-Driven**: Document components and APIs as they are developed

### Workflow Steps

1. **Design**: Define component interfaces and API contracts
2. **Backend Development**: 
   - Implement API endpoints in FastAPI
   - Write tests for API functionality
   - Document endpoints with OpenAPI/Swagger
3. **Frontend Development**:
   - Create React components that consume the APIs
   - Implement TypeScript interfaces matching API schemas
   - Style components with CSS
4. **Integration Testing**: Verify end-to-end functionality
5. **Iteration**: Refine based on testing and feedback

### Best Practices

- Keep backend and frontend loosely coupled through APIs
- Use TypeScript types that match backend data models
- Write tests for both backend endpoints and frontend components
- Document API changes in OpenAPI spec
- Use environment variables for configuration

## API Documentation

The backend provides interactive API documentation:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Contributing

1. Create a feature branch
2. Develop following cc-sdd principles
3. Test both backend and frontend
4. Submit a pull request

## License

See [LICENSE](LICENSE) file for details.