# The Excuse Machine

A simple web app where students can submit and upvote reasons why an assignment is late.

Production is available at: https://excuse-machine.vercel.app

Built with Next.js 16.1, React 19.2.3, Prisma 6.18.0, and PostgreSQL.

## Prerequisites

- **Node.js**: Version 20.9.0 or higher (22.11.0+ recommended)
- **PostgreSQL**: A running PostgreSQL database instance
- **npm** or **yarn**: Package manager

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd excuse-machine
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the `DATABASE_URL` in `.env` with your PostgreSQL connection string:
     ```
     DATABASE_URL="postgresql://user:password@localhost:5432/excuse_machine?schema=public"
     ```

4. **Set up the database**:
   - Ensure PostgreSQL is running
   - Create the database (if it doesn't exist):
     ```bash
     createdb excuse_machine
     ```
   - Generate the Prisma client:
     ```bash
     npm run prisma:generate
     ```
   - Run migrations to create the database schema:
     ```bash
     npm run prisma:migrate
     ```

## Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio (database GUI)

## Project Structure

```
excuse-machine/
├── prisma/
│   └── schema.prisma          # Prisma schema with Excuse model
├── src/
│   └── app/
│       ├── layout.tsx         # Root layout
│       ├── page.tsx           # Home page
│       └── globals.css        # Global styles
├── .env                       # Environment variables (not committed)
├── .env.example               # Example environment variables
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
└── README.md                  # This file
```

## Tech Stack

- **Next.js 16.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5.9** - Type safety
- **Prisma 6.18.0** - Database ORM
- **PostgreSQL** - Database

## Next Steps

This is the initial scaffold. The following features are ready to be implemented:

- Excuse submission form
- Display list of excuses
- Upvote functionality
- API routes for CRUD operations
