@echo off
title YERKIN Dev Studio - Development Server
color 0A

echo ========================================
echo   YERKIN Dev Studio
echo   Starting Development Server...
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] Installing dependencies...
    echo.
    call npm install
    echo.
)

echo [INFO] Starting Next.js development server...
echo.
echo [SUCCESS] Server will be available at:
echo           http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev

pause
