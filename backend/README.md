# New Frontiers Backend

This is the backend service for the New Frontiers project, built with FastAPI.

## Project Structure

```
├── app/                  # Main application code
│   ├── main.py           # Application entry point
│   ├── config.py         # Configuration settings
│   └── routers.py        # API routes
├── workers/              # Background task processors
│   └── tasks.py          # Celery tasks
├── db/                   # Database models and migrations
│   ├── models.py         # Database models
│   └── migrations/       # Alembic migrations
├── Dockerfile            # Docker configuration
├── requirements.txt      # Python dependencies
├── .env                  # Environment variables
└── .gitignore            # Git ignore file
```

## Dependencies

- FastAPI for REST API
- SQLAlchemy for database ORM
- Alembic for database migrations
- Celery for background tasks
- Redis for task queue
- PostgreSQL for database

## Installation

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Set up environment variables in `.env` file

3. Run the application:
   ```bash
   uvicorn app.main:app --reload
   ```

## Docker

To build and run with Docker:
```bash
docker-compose up
```

The API will be available at http://localhost:8000