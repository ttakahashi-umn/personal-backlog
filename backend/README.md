# Personal Backlog Backend

FastAPI backend for personal backlog management.

## Setup

This project uses [uv](https://github.com/astral-sh/uv) for Python package management.

### Prerequisites

- Python 3.12 or higher
- uv package manager

### Installation

```bash
# Install dependencies
uv sync

# Run the development server
uv run uvicorn main:app --reload
```

The API will be available at http://localhost:8000

## API Documentation

- Interactive API docs: http://localhost:8000/docs
- Alternative API docs: http://localhost:8000/redoc

## Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `GET /api/items` - Get all backlog items

## Development

### Run tests

```bash
# Add test dependencies first
uv add --dev pytest pytest-cov httpx

# Run tests
uv run pytest
```

### Code formatting and linting

```bash
# Add development dependencies
uv add --dev ruff

# Format code
uv run ruff format .

# Lint code
uv run ruff check .
```

## Project Structure

```
backend/
├── app/              # Application modules (to be added)
├── main.py          # FastAPI application entry point
├── pyproject.toml   # Project configuration and dependencies
└── README.md        # This file
```
