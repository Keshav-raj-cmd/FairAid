@echo off
setlocal

cd /d "%~dp0\.."

echo Starting FairAid Backend and Frontend...

start "FairAid Backend" cmd /k "backend\venv\Scripts\uvicorn.exe backend.main:app --reload --port 8000"
start "FairAid Frontend" cmd /k "cd frontend && npm run dev"

echo Backend running on http://127.0.0.1:8000
echo Frontend running on http://localhost:3000
