# Dattebayo 🍥

> _From the hidden leaf, to your screen._

![Preview](./preview.png)

A minimal full-stack app that serves random iconic quotes from Naruto characters. Built with Bun, Express, React, Prisma, and PostgreSQL.

---

## Stack

- **Runtime** — Bun
- **Backend** — Express
- **Frontend** — React + Vite + Tailwind CSS + shadcn/ui
- **Database** — PostgreSQL + Prisma 7
- **Monorepo** — Bun Workspaces

---

## Project Structure

```
/
├── packages/
│   ├── client/        # React frontend
│   └── server/        # Express backend
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── config.ts
└── package.json
```

---

## Getting Started

### 1. Clone the repo

```bash
bun create biplob-codes/bun-express-react-starter my-app
cd my-app
```

### 2. Install dependencies

```bash
bun install
```

### 3. Set up environment variables

Create a `.env` file in the root:

```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/dattebayo"
```

### 4. Set up the database

```bash
bunx prisma migrate dev
bunx prisma generate
bunx prisma db seed
```

### 5. Run in development

```bash
bun run dev
```

---

## API

### `GET /api/quote`

Returns a single random quote with author info.

**Response**

```json
{
   "id": 4,
   "title": "People live their lives bound by what they accept as correct and true...",
   "author": {
      "id": 3,
      "name": "Itachi Uchiha",
      "email": "itachi@uchiha.konoha",
      "image": "https://..."
   }
}
```

---

## Database Schema

```prisma
model User {
  id     Int     @id @default(autoincrement())
  email  String  @unique
  name   String
  image  String
  quotes Quote[]
}

model Quote {
  id       Int    @id @default(autoincrement())
  title    String
  author   User   @relation(fields: [authorId], references: [id])
  authorId Int
}
```

---

## Characters

The seed includes 14 iconic characters:

Naruto · Sasuke · Itachi · Kakashi · Minato · Jiraiya · Tsunade · Madara · Obito · Hashirama · Tobirama · Gaara · Shikamaru · Neji · Hinata

---

## License

MIT
