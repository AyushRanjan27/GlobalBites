# GlobalBites — Run Instructions

Quick steps to run the project locally.

Prerequisites
- Node.js (16+)
- npm

Backend
1. Open a terminal and install dependencies:

```bash
cd backend
npm install
```

2. Create a `.env` in `backend/` with at minimum:

```
MONGODB_URI=<your mongodb connection string>
PORT=8080
CORS_ORIGIN=http://localhost:5173
RATE_LIMIT_MAX=300
```

3. Start the backend (development):

```bash
npm run dev
```

The API will be available at `http://localhost:8080` and includes `/health`.

Frontend
1. Open a second terminal and install dependencies:

```bash
cd frontend
npm install
```

2. Start the frontend dev server:

```bash
npm run dev
```

The dev site will be at `http://localhost:5173` by default.

Notes
- If `MONGODB_URI` is not provided the backend will run without DB-backed routes (503 returned for API routes).
- To attempt fixing vulnerabilities run `npm audit fix` in each package folder.
- For production builds run `cd frontend && npm run build`.

If you want, I can add a `launch.json` to enable VS Code debugging or run `npm audit fix` now.
