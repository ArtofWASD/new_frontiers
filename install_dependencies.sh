#!/bin/bash

# Linux/WSL installation script for New Frontiers project dependencies

echo "New Frontiers - Dependency Installation Script"
echo "================================================"

# Check if we're in the right directory
if [ ! -f "backend/requirements.txt" ]; then
    echo "Error: backend/requirements.txt not found"
    echo "Please run this script from the project root directory"
    exit 1
fi

if [ ! -f "frontend/package.json" ]; then
    echo "Error: frontend/package.json not found"
    echo "Please run this script from the project root directory"
    exit 1
fi

echo "Installing backend dependencies..."
pip install -r backend/requirements.txt
if [ $? -ne 0 ]; then
    echo "Failed to install backend dependencies"
    exit 1
fi

echo "Installing frontend dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "Failed to install frontend dependencies"
    exit 1
fi

echo ""
echo "All dependencies installed successfully!"