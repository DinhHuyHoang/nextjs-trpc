DOCKER_COMPOSE_FILE = ./docker/local/.docker-compose.yml
PROJECT_NAME = nextjs-trpc

# Command for running docker compose
DC_UP = docker-compose -f $(DOCKER_COMPOSE_FILE) up -d
DC_DOWN = docker-compose -f $(DOCKER_COMPOSE_FILE) down

# Prisma commands
PRISMA_GENERATE = npx prisma generate
PRISMA_MIGRATE = npx prisma migrate dev
PRISMA_SEED = npx prisma db seed

# Next.js commands
NEXT_DEV = npx next dev
NEXT_BUILD = npx next build
NEXT_START = npx next start

# Default target
setup: start

# Start up everything (Docker, Prisma, and Seed)
start: docker-up prisma-setup

# Set up Docker containers
docker-up:
	@echo "Starting Docker containers..."
	$(DC_UP)
	@echo "Waiting for PostgreSQL to be ready..."
	@./scripts/wait-for-it.sh db:5432 -- echo "PostgreSQL is up and ready"

# Tear down Docker containers
docker-down:
	@echo "Stopping Docker containers..."
	$(DC_DOWN)

# Build the Docker image for the Next.js app
docker-build:
	docker build -t ${PROJECT_NAME} .

docker-build-nocache:
	docker build --no-cache -t ${PROJECT_NAME} .

# Set up Prisma
prisma-setup:
	@echo "Running Prisma generate and migrate..."
	$(PRISMA_GENERATE)
	$(PRISMA_MIGRATE)

# Seed the database
prisma-seed: prisma-setup
	@echo "Seeding the database..."
	$(PRISMA_SEED)

# Clean up everything (Docker and volumes)
clean:
	@echo "Cleaning up Docker containers and volumes..."
	docker-compose down -v

# Start Next.js in development mode
next-dev:
	@echo "Starting Next.js in development mode..."
	$(NEXT_DEV)

# Build Next.js for production
next-build:
	@echo "Building Next.js for production..."
	$(NEXT_BUILD)

# Start Next.js in production mode (after build)
next-start:
	@echo "Starting Next.js in production mode..."
	$(NEXT_START)

# Build the app for production and then start Docker containers
build-and-run:
	make docker-build
	make docker-up
	make prisma-setup
