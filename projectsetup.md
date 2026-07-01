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

===============================
Changing the docker-compose.yml file does not automatically update or apply to already running containers. You must tell Docker Compose to apply the new environment settings.

To apply the hot-reloading fix, please follow these steps:

Step 1: Recreate the Containers
Run this command from your root directory (f:\External_study_app):

powershell
# docker compose up -d --build
Docker will detect the changes in docker-compose.yml and recreate the frontend container with the WATCHPACK_POLLING=true setting.

Step 2: Clear Next.js Cache (If hot reloading is still stuck)
Next.js caches build data inside the .next directory. If it fails to update after recreating the container, clear the cache and restart the frontend:

Delete the .next cache directory in your frontend folder:
powershell
# Remove-Item -Recurse -Force f:\External_study_app\frontend\.next
Restart the frontend container:
powershell
# docker compose restart frontend
==============================