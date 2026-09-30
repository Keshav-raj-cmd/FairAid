# FairAid

FairAid is a web-based platform that connects NGOs and volunteers to seamlessly manage, map, and allocate critical resources for community needs and emergencies using robust geolocation and survey data.

## Features

- **Resource Allocation:** Connects NGOs and Volunteers to efficiently allocate resources.
- **Geolocation & Mapping:** Interactive maps using Leaflet to view and track emergency and non-emergency needs.
- **Survey Management:** Bulk upload field survey data via CSV to instantly register community needs.
- **Role-based Dashboards:** Dedicated experiences tailored for NGOs and Volunteers.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, React-Leaflet, MediaPipe Vision
- **Backend:** FastAPI, Python, Pandas, SQLite (PostgreSQL supported)

## Run both backend and frontend together

```bash
./scripts/run_dev.sh
```

Backend: `http://127.0.0.1:8000`  
Frontend: `http://localhost:3000`

## Database

Default storage is SQLite at `data/fairaid.db`.

To use PostgreSQL, set:

```bash
export FAIRAID_DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<db_name>"
```

Then start backend normally:

```bash
backend/venv/bin/uvicorn backend.main:app --reload --port 8000
```

## Demo credentials

- NGO: `ngo@fairaid.org` / `demo123`
- Volunteer: `volunteer@fairaid.org` / `demo123`
