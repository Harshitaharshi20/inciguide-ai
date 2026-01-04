# InciGuide AI 🧴🤖

**InciGuide AI** is an AI-powered skincare ingredient analysis platform that helps users understand product safety, ingredient risks, and routine compatibility based on their skin type.

---

## 🌟 Features

- 🧪 Ingredient risk analysis (Low / Medium / High)
- 🧴 Skin-type–based recommendations
- 📋 Routine guidance for skincare steps
- 🤖 AI confidence & authenticity scoring
- ⚡ FastAPI backend + React frontend
- 🐳 Fully Dockerized (production-ready setup)

---

## 🏗️ System Architecture

Frontend (React + Vite)
↓
Docker Network
↓
Backend (FastAPI)
↓
AI Analysis Engines


---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- JavaScript
- CSS (Dark UI)
- Docker

### Backend
- FastAPI
- Python
- Modular AI engines
- Docker

### DevOps
- Docker
- Docker Compose

---

## 📂 Project Structure

inciguide-ai/
│── backend/
│ ├── services/
│ ├── main.py
│ ├── Dockerfile
│ └── requirements.txt
│
│── frontend_web/
│ ├── src/
│ ├── public/
│ ├── Dockerfile
│ └── package.json
│
│── docker-compose.yml
│── ARCHITECTURE.md
│── CORE_LOGIC.md
│── PROJECT_SCOPE.md
│── README.md


---

## ▶️ How to Run Locally (Docker)

### Prerequisites
- Docker Desktop installed

### Run the project
```bash
docker-compose up --build

🧠 AI Logic Overview

Ingredient Engine → evaluates ingredient safety

Routine Engine → checks skincare routine compatibility

Confidence Engine → calculates reliability score

Response Formatter → combines results into clean output

Detailed explanation available in CORE_LOGIC.md.

📸 Demo Screenshots



🚀 Future Improvements

User authentication

Product database

Recommendation history

Mobile app version

👩‍💻 Author

Harshita and Mandira Datta
MCA Students | Full-Stack Developers (React + FastAPI)
Project built as a company-level AI product.
