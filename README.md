# thriftbyval  
*A one-stop shop for deals you won't regret—because you barely committed.*

## 🛠️ Project Overview
**thriftbyval** is a full-stack e-commerce scaffold powered by:
- 🔧 Django + DRF (backend)
- 🧬 PostgreSQL (database)
- ⚡ Next.js with TypeScript, App Router, Tailwind CSS & Turbopack (frontend)

It’s designed to be minimal, modular, and dangerously close to functional.

## 📦 Features
- 🔗 API-ready backend with product listing endpoint
- 💅 Tailwind-styled frontend with dynamic routing
- 🔁 Next.js proxy to Django via `/api/*` rewrite
- ⚙️ Live `/product/[id]` route
- 📄 Static legacy HTML support via `public/`

## 🚀 Setup Instructions

### Backend (Django + DRF)
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
````

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore.

> Note: Django API must be running on `127.0.0.1:8000` for frontend fetches to succeed.

## 💡 Status

Currently renders product list from an empty database.
Feel free to populate it or just stare at the beautiful emptiness.

---

Built for contributions.
Finished for peace.
**#thriftbyval**