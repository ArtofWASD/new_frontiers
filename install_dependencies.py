#!/usr/bin/env python3
"""
Cross-platform installation script for New Frontiers project dependencies.
"""

import os
import platform
import subprocess
import sys

def run_command(command):
    """Run a shell command and handle errors."""
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(result.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {command}")
        print(e.stderr)
        return False

def install_backend_dependencies():
    """Install Python dependencies for the backend."""
    print("Installing backend dependencies...")
    if os.path.exists("backend/requirements.txt"):
        return run_command("pip install -r backend/requirements.txt")
    else:
        print("backend/requirements.txt not found")
        return False

def install_frontend_dependencies():
    """Install Node.js dependencies for the frontend."""
    print("Installing frontend dependencies...")
    if os.path.exists("frontend/package.json"):
        return run_command("npm install")
    else:
        print("frontend/package.json not found")
        return False

def main():
    """Main installation function."""
    print("New Frontiers - Dependency Installation Script")
    print("=" * 50)
    
    # Change to project root directory
    project_root = os.path.dirname(os.path.abspath(__file__))
    os.chdir(project_root)
    
    print(f"Working directory: {os.getcwd()}")
    
    # Install backend dependencies
    if not install_backend_dependencies():
        print("Failed to install backend dependencies")
        return 1
    
    # Install frontend dependencies
    if not install_frontend_dependencies():
        print("Failed to install frontend dependencies")
        return 1
    
    print("\nAll dependencies installed successfully!")
    return 0

if __name__ == "__main__":
    sys.exit(main())