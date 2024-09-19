# Restaurant Demo Project

This is a demo project for a restaurant web application using **Next.js**, **Prisma**, **tRPC**, **PostgreSQL**, and **Docker**. The project uses **pnpm** as the package manager.

## Prerequisites

- [pnpm](https://pnpm.io/installation)
- [Docker](https://docs.docker.com/get-docker/)
- [Node.js v20.9.0+](https://nodejs.org/en/download/)

## Tech Stack

- **Next.js** (with App Router)
- **Prisma** (ORM)
- **tRPC** (for typesafe APIs)
- **PostgreSQL** (database)
- **Docker** & **Docker Compose** (for containerization)
- **SuperJSON** (for transforming data between server and client)
- **pnpm** (for package management)

## Getting Started

### Make the wait-for-it.sh Script Executable

```bash
chmod +x scripts/wait-for-it.sh
```

### 1. Install Dependencies

```bash
npm install -g pnpm
pnpm install
```

### 2. Environment Variables

```bash
// create .env in the folder /docker
DB_USER=<REPLACE_ME>
DB_PASS=<REPLACE_ME>
DB_NAME=<REPLACE_ME>
```

```bash
// create .env at the root folder
DATABASE_URL=<REPLACE_ME>
```

### 3. Setting up the Project

```bash
make setup
```

### 5. Running the Development Web Application

```bash
make next-dev
```

[Watch the video](./assets/nextjs-trpc.mp4)
