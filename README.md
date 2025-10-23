# New Frontiers Project

This is the main repository for the New Frontiers project.

## Project Structure

```
├── backend/                  # Серверная часть (FastAPI, Workers)
│   ├── app/                  # Основной код приложения (API эндпойнты, логика, adapters)
│   ├── workers/              # Код для асинхронных задач (обработка ffmpeg, STT)
│   ├── db/                   # Модели БД, миграции
│   ├── Dockerfile            # Для сборки API и Worker
│   └── requirements.txt      # Зависимости Python
├── frontend/                 # Клиентская часть (Next.js)
│   ├── pages/                # Страницы (index, upload, tasks/[id])
│   ├── components/           # Компоненты React
│   ├── public/
│   ├── Dockerfile            # Для сборки Next.js
│   └── package.json          # Зависимости Node.js
├── .env.example              # Пример переменных окружения
├── docker-compose.yml        # Конфигурация локального окружения
├── install_dependencies.bat  # Windows installation script
├── install_dependencies.sh   # Linux/WSL installation script
└── install_dependencies.py   # Cross-platform installation helper
```

## Prerequisites

Before installing dependencies, ensure you have the following installed:
- Python 3.8 or higher
- Node.js 14 or higher
- Docker and Docker Compose (optional but recommended)

## Installing Dependencies

### Option 1: Using Installation Scripts (Recommended)

For Windows users:
```cmd
install_dependencies.bat
```

For Linux/WSL users:
```bash
chmod +x install_dependencies.sh
./install_dependencies.sh
```

For cross-platform helper:
```bash
python install_dependencies.py
```

### Option 2: Manual Installation

#### Backend Dependencies (Python/FastAPI)

Navigate to the backend directory and install Python packages:

```bash
cd backend
pip install -r requirements.txt
```

Or install each package individually:
```bash
pip install fastapi==0.68.0
pip install uvicorn[standard]==0.15.0
pip install sqlalchemy==1.4.23
pip install alembic==1.7.3
pip install python-dotenv==0.19.0
pip install celery==5.1.2
pip install redis==3.5.3
```

#### Frontend Dependencies (Node.js/Next.js)

Navigate to the frontend directory and install Node packages:

```bash
cd frontend
npm install
```

Or install each package individually:
```bash
npm install next@^11.1.2
npm install react@^17.0.2
npm install react-dom@^17.0.2
npm install -D eslint@^7.32.0
npm install -D eslint-config-next@^11.1.2
```

## Running the Application

### Option 1: Using Docker (Recommended)

Make sure Docker Desktop is installed and running on your machine, then from the project root directory:

```bash
docker-compose up
```

This will automatically:
- Build the backend and frontend containers
- Install all dependencies inside containers
- Start all services (PostgreSQL, Redis, API, Worker, Frontend)

Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Backend API Docs: http://localhost:8000/docs

### Option 2: Running Services Locally

1. Start the database and Redis services using Docker:
```bash
docker-compose up db redis
```

2. In a new terminal, start the backend:
```bash
cd backend
uvicorn app.main:app --reload
```

3. In another terminal, start the frontend:
```bash
cd frontend
npm run dev
```

## Backend Dependencies

- FastAPI for REST API
- SQLAlchemy for database ORM
- Alembic for database migrations
- Celery for background tasks
- Redis for task queue
- PostgreSQL for database

## Frontend Dependencies

- Next.js for React framework
- React for UI components