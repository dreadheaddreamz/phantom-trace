# PhantomTrace

PhantomTrace is a full-stack log monitoring dashboard built with React, TypeScript, and Ruby on Rails. The project simulates real-time system logs with filtering, searching, and scalable backend architecture concepts inspired by modern observability platforms.

## Features

* Live log simulation
* Severity filtering
* Search functionality
* Modular frontend architecture
* RESTful Rails API
* Pagination and sorting support
* Backend validation handling
* Scalable full-stack project structure

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* CSS

### Backend

* Ruby on Rails API
* PostgreSQL
* ActiveRecord

---

## Project Structure

```text
phantom-trace/
  frontend/
  backend/
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs locally on:

```text
http://localhost:5173
```

---

## Backend Setup

```bash
cd backend
bundle install
rails db:create
rails db:migrate
rails server
```

Backend runs locally on:

```text
http://localhost:3000
```

---

## Current Goals

* Build a scalable Rails API
* Add real-time log streaming
* Implement filtering and pagination
* Expand system monitoring features
* Explore observability and security engineering concepts

---

## Future Improvements

* WebSocket support
* Background jobs
* Redis caching
* Authentication
* Docker support
* Log analytics dashboard
* Deployment pipeline

---

## Author

Built by James Batsell

* Portfolio: jamesbatsell.dev
* GitHub: https://github.com/dreadheaddreamz
