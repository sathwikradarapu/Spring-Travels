# 🌍 Spring Travels

A full-stack travel management application built with **React** on the frontend and **Django REST Framework** on the backend.

---

## 📁 Project Structure

```
spring-travels/
├── django/           # Django backend (DRF API)
│   ├── manage.py
│   ├── db.sqlite3
│   ├── bookings/     # Main Django app
│   ├── travels/      # Main Django project
│   └── ...
├── react/            # React frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
├── README.md
└── .gitignore
```

---

## 🚀 Features

- ✅ RESTful API with Django REST Framework
- ✅ User-friendly React UI
- ✅ Create, Read, Update, Delete (CRUD) for travel-related data
- ✅ Responsive design with Bootstrap or Tailwind
- ✅ Frontend-backend integration using Axios and useEffect hook of react

---

## 🛠️ Tech Stack

### Backend:

- Python 3.x
- Django 4.x
- Django REST Framework
- SQLite (default, can switch to PostgreSQL)

### Frontend:

- React 18+
- Bootstrap or Tailwind CSS
- React Router
- Axios and useEffect

---

## 🧑‍💻 Getting Started

### 1️⃣ Backend Setup

```bash
cd django
python -m venv aenv
source aenv/bin/activate  # On Windows: aenv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

> API will be available at: `http://127.0.0.1:8000/`

---

### 2️⃣ Frontend Setup

```bash
cd react
npm install
npm run dev
```

> React app runs at: `http://localhost:5173/`

---
