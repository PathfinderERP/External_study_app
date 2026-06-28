# External Study App Setup Guide

This guide describes how to start, stop, monitor, and troubleshoot the External Study App project using Docker Compose.

---

## How to Start the Project

* **Normal Start (Fast)** - Use this for everyday development. Code changes are automatically synced via Docker volumes.
  ```bash
  docker compose up -d
  ```

* **Build & Start** - Use this **only** when modifying dependencies (like `package.json` or `requirements.txt`) or editing a `Dockerfile`:
  ```bash
  docker compose up --build -d
  ```

---

## How to Stop the Project

To stop all running services and clean up network resources:
```bash
docker compose down
```

---

## How to Restart Services

To restart all services or a specific service (useful for clearing application caches like Next.js Turbopack):
```bash
# Restart all services:
docker compose restart

# Restart a specific service (e.g., frontend):
docker compose restart frontend
```

---

## How to View Logs

To stream live logs from the containers:

* **View logs for all services:**
  ```bash
  docker compose logs -f
  ```

* **View combined logs for frontend and backend only:**
  ```bash
  docker compose logs -f frontend backend
  ```

* **View logs for a single service (e.g., backend):**
  ```bash
  docker compose logs -f backend
  ```

---

## Troubleshooting: 502 Bad Gateway

If Nginx fails to route request traffic and responds with a **502 Bad Gateway**, force Nginx to re-resolve the service IP addresses by running:
```bash
docker compose exec nginx nginx -s reload
```
> [!NOTE]
> We have configured dynamic DNS resolution (`resolver 127.0.0.11 valid=10s`) inside [nginx.conf](file:///f:/External_study_app/nginx/nginx.conf) to minimize this issue.
