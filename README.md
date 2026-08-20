# ThinkBoard 🧠

ThinkBoard is a full-stack MERN note-taking application that allows users to create, view, update, and delete notes. It features a clean and responsive interface, MongoDB data persistence, and API rate limiting using Upstash Redis.

## ✨ Features

* 📝 Create new notes
* 📚 View all notes
* 🔍 View individual notes
* ✏️ Edit and update notes
* 🗑️ Delete notes
* 📅 Notes sorted by newest first
* ⚡ API rate limiting with Upstash Redis
* 🚫 Rate limit feedback in the UI
* 🔔 User-friendly notifications with React Hot Toast
* 📱 Responsive user interface

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* React Router
* Axios
* Tailwind CSS
* DaisyUI
* Lucide React
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Upstash Redis
* Upstash Rate Limit

## 📁 Project Structure

```text
MERN-thinkboard/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
│
└── package.json
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mohammedkiwan25-glitch/MERN-thinkboard.git
cd MERN-thinkboard
```

### 2. Install dependencies

You can install all dependencies from the root directory:

```bash
npm run build
```

Or install them separately:

```bash
cd backend
npm install

cd ../frontend
npm install
```

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001

UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

## ▶️ Running the Application

### Start the backend

```bash
cd backend
npm run dev
```

The backend will run on:

```text
http://localhost:5001
```

### Start the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The frontend will typically run on:

```text
http://localhost:5173
```

## 🔌 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/notes`     | Get all notes     |
| GET    | `/api/notes/:id` | Get a single note |
| POST   | `/api/notes`     | Create a new note |
| PUT    | `/api/notes/:id` | Update a note     |
| DELETE | `/api/notes/:id` | Delete a note     |

### Example Note

```json
{
  "title": "My First Note",
  "content": "This is the content of my note."
}
```

## 🛡️ Rate Limiting

The API uses Upstash Redis and `@upstash/ratelimit` to limit requests using a sliding window.

The current configuration allows:

```text
100 requests per 60 seconds
```

When the rate limit is exceeded, the API returns:

```text
429 Too Many Requests
```

The frontend detects this response and displays a user-friendly rate limit message.

## 📦 Production Build

From the root directory, run:

```bash
npm run build
```

Then start the application:

```bash
npm start
```

In production mode, Express serves the built React application.

## 👨‍💻 Author

**Mohammed Kiwan**

GitHub: https://github.com/mohammedkiwan25-glitch

## 📄 License

This project is open source and available under the ISC License.
