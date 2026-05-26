# SnipURL ✂️

> Turn long, ugly URLs into clean, shareable links — instantly.

SnipURL is a fast and minimal URL shortener built with a React + TypeScript frontend and a Node.js + Express backend. Paste a long link, get a short one. That's it.

---

## 🚀 Features

- 🔗 Shorten any valid URL in one click
- ⚡ Blazing fast redirects via Express
- 🎨 Clean, responsive UI built with React + Tailwind CSS
- 🔒 Input validation on both client and server
- 🆔 Unique short codes generated on the backend

---

## 🛠 Tech Stack

**Frontend**

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool
- [Tailwind CSS](https://tailwindcss.com/) — styling

**Backend**

- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- Unique code generation for short URLs

---

## 📁 Project Structure

```
snipurl/
├── client/                 # Vite + React frontend
│   ├── src/
│   │   ├── api/            # API call functions
│   │   ├── components/     # UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── types/          # Shared TypeScript types
│   │   └── utils/          # Helpers (e.g. URL validation)
│   └── vite.config.ts
│
└── server/                 # Node.js + Express backend
    ├── routes/             # Express route handlers
    ├── controllers/        # Business logic
    └── index.ts            # Entry point
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### 1. Clone the repo

```bash
git clone https://github.com/your-username/snipurl.git
cd snipurl
```

### 2. Set up the backend

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### 3. Set up the frontend

```bash
cd client
npm install
cp .env.example .env.local
npm run dev
```

The frontend runs on `http://localhost:5173` and the backend on `http://localhost:3000`.

---

## 🔑 Environment Variables

**Backend (`server/.env`)**

| Variable   | Description                     | Example                 |
| ---------- | ------------------------------- | ----------------------- |
| `PORT`     | Port for the Express server     | `3000`                  |
| `BASE_URL` | Public base URL for short links | `http://localhost:3000` |

**Frontend (`client/.env.local`)**

| Variable            | Description          | Example                 |
| ------------------- | -------------------- | ----------------------- |
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:3000` |

---

## 📡 API Reference

| Method | Endpoint   | Description              |
| ------ | ---------- | ------------------------ |
| `POST` | `/shorten` | Create a short URL       |
| `GET`  | `/:code`   | Redirect to original URL |

### `POST /shorten`

**Request body:**

```json
{
  "originalUrl": "https://some-very-long-url.com/path?query=value"
}
```

**Response:**

```json
{
  "code": "aB3xZ9",
  "shortUrl": "http://localhost:3000/aB3xZ9",
  "originalUrl": "https://some-very-long-url.com/path?query=value",
  "createdAt": "2025-05-26T10:00:00.000Z"
}
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a [GitHub Issue](https://github.com/your-username/snipurl/issues).

1. Fork the repo
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

[MIT](./LICENSE)

---

<p align="center">Built with ☕ and too many long URLs</p>
