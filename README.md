# 🚀 MERN Stack Project with Docker

## 📌 Overview

This is a **full-stack MERN application** where:

* **Frontend** is built using React
* **Backend** is built using Node.js + Express
* **Database** is MongoDB
* Everything is containerized using **Docker** and managed with **Docker Compose**

Think of it like this:
Frontend 🎨 → talks to → Backend ⚙️ → talks to → Database 🗄️

---

## 🛠️ What I Did

Here’s what this project includes:

### 🔹 1. Built a MERN Application

* Created a frontend (React) with a signup form
* Built a backend API using Express
* Connected backend to MongoDB

---

### 🔹 2. Dockerized the Project 🐳

* Created separate **Dockerfiles** for:

  * Frontend
  * Backend
* Used **Docker Compose** to run:

  * Frontend container
  * Backend container
  * MongoDB container
  * Mongo Express (for DB UI)

---

### 🔹 3. Connected Services using Docker Network

* Instead of `localhost`, services communicate using container names
* Example:

  * Backend connects to Mongo using `mongodb://mongo:27017`

---

### 🔹 4. Managed Everything with docker-compose

* One command runs the entire project 🎯
* No need to start frontend, backend, and DB separately

---

## 📂 Project Structure

```
Docker_MERN/
│
├── Backend/
│   ├── Dockerfile
│   └── (Node.js backend code)
│
├── Frontend/
│   ├── Dockerfile
│   └── (React frontend code)
│
├── compose.yaml
└── README.md
```

---

## ⚙️ How to Run This Project

### ✅ Prerequisites

Make sure you have installed:

* Docker
* Docker Compose

---

### ▶️ Steps to Run

#### 1. Clone the repository

```bash
git clone <repo-link>
cd Docker_MERN
```

---

#### 2. Start the project

```bash
docker compose up -d
```

This will:

* Build images
* Start all containers
* Connect everything automatically

---

#### 3. Open in browser 🌐

* Frontend → `http://localhost:5173` *(or your frontend port)*
* Backend → `http://localhost:3000`
* Mongo Express → `http://localhost:8081`  (admin: admin, password: pass)

---

#### 4. Stop the project

```bash
docker compose down
```

---

## 🧠 Key Learnings

* Difference between **images** and **containers**
* How Docker networking works (no `localhost`, use service names)
* How to connect multiple services using Docker Compose
* Debugging common Docker issues (ports, container names, DB connection)

---

## ⚠️ Common Issues & Fixes

### ❌ Port already in use

👉 Change port in `compose.yaml`

---

### ❌ Mongo connection error

👉 Use:

```
mongodb://mongo:27017
```

instead of `localhost`

---

### ❌ Container not running

```bash
docker ps
docker logs <container-name>
```

---

## 🎯 Future Improvements

* Add authentication
* Deploy on cloud (AWS / Render / Railway)
* Optimize Docker image size
* Add environment variables

---

## 💡 Final Note

This project demonstrates how to run a full-stack application using Docker in a clean and scalable way.

Instead of running everything manually, Docker Compose lets you spin up the entire system with a single command ⚡

---
## Screenshots


<img width="1919" height="1029" alt="Screenshot 2026-03-27 104448" src="https://github.com/user-attachments/assets/537a54aa-45b6-4358-a8ce-c73d5b21dcce" />
<img width="1919" height="1022" alt="Screenshot 2026-03-27 104554" src="https://github.com/user-attachments/assets/c8a730ed-7dbc-48cc-a3c7-6410567aec8b" />
<img width="1918" height="1026" alt="Screenshot 2026-03-27 104611" src="https://github.com/user-attachments/assets/29e0051c-30bd-4d94-8309-40ac2adb2650" />
<img width="1919" height="1031" alt="Screenshot 2026-03-27 104635" src="https://github.com/user-attachments/assets/795b5518-02ba-46be-8a31-6992b2117c07" />
