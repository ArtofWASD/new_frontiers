@echo off
REM Windows installation script for New Frontiers project dependencies

echo New Frontiers - Dependency Installation Script
echo ================================================

REM Check if we're in the right directory
if not exist "backend\requirements.txt" (
    echo Error: backend\requirements.txt not found
    echo Please run this script from the project root directory
    pause
    exit /b 1
)

if not exist "frontend\package.json" (
    echo Error: frontend\package.json not found
    echo Please run this script from the project root directory
    pause
    exit /b 1
)

echo Installing backend dependencies...
pip install -r backend\requirements.txt
if %errorlevel% neq 0 (
    echo Failed to install backend dependencies
    pause
    exit /b 1
)

echo Installing frontend dependencies...
npm install
if %errorlevel% neq 0 (
    echo Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo All dependencies installed successfully!
pause