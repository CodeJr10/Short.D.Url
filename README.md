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
# 🔗 URL Shortener — Base62 Encoding

A URL shortener maps a long URL to a short, unique code. **Base62 encoding** is the most common way to generate that short code from a numeric ID.

---

## How It Works

```
Long URL → Store in DB → Get Auto-increment ID → Base62 Encode → Short Code
https://example.com/very/long/url  →  ID: 12345  →  "dnh"
```

1. A long URL is saved to the database and gets a unique numeric ID (e.g. `12345`)
2. That ID is encoded into a short alphanumeric string using Base62
3. The short code is appended to your domain: `https://short.ly/dnh`
4. When someone visits the short URL, decode the code back to the ID and look up the original URL

---

## What is Base62?

Base62 uses **62 characters** as its alphabet:

```
0-9  →  10 digits
a-z  →  26 lowercase letters
A-Z  →  26 uppercase letters
─────────────────────────────
Total: 62 characters
```

This means every "digit" in Base62 can represent one of 62 values — making short codes compact and URL-safe with no special characters.

---

## Why Base62 (not Base64)?

Base64 adds `+` and `/` which are not URL-safe and require percent-encoding. Base62 sticks to alphanumeric characters only, making it clean for URLs.

| Encoding | Alphabet | URL-Safe |
|---|---|---|
| Base64 | A-Z, a-z, 0-9, +, / | ❌ |
| Base62 | A-Z, a-z, 0-9 | ✅ |

---

## The Algorithm

### Encode (ID → Short Code)

```python
ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
BASE = 62

def encode(num):
    if num == 0:
        return ALPHABET[0]
    result = []
    while num > 0:
        result.append(ALPHABET[num % BASE])
        num //= BASE
    return ''.join(reversed(result))
```

### Decode (Short Code → ID)

```python
def decode(code):
    num = 0
    for char in code:
        num = num * BASE + ALPHABET.index(char)
    return num
```

### Example

```
encode(0)       → "0"
encode(61)      → "Z"
encode(62)      → "10"
encode(12345)   → "dnh"
encode(3521614606207)  → "zzzzzz"  (6-char max = 62^6 unique URLs)
```

---

## How Many URLs Can It Handle?

| Code Length | Possible URLs |
|---|---|
| 1 char | 62 |
| 2 chars | 3,844 |
| 4 chars | ~14.7 million |
| 6 chars | ~56.8 billion |
| 8 chars | ~218 trillion |

A 6-character code is enough for most production systems.

---

## Key Concepts

| Term | Meaning |
|---|---|
| **Base62** | Numeral system using 62 alphanumeric characters |
| **Encode** | Convert a numeric ID into a short alphanumeric code |
| **Decode** | Convert the short code back to the original numeric ID |
| **Collision** | Two URLs getting the same short code — prevented by using unique IDs |
| **Auto-increment ID** | A DB-generated unique number used as the input to encode |
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
