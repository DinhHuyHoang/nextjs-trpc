-- CreateTable
CREATE TABLE "restaurants" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "rating_count" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price_range" TEXT NOT NULL,
    "images" JSONB NOT NULL,
    "is_favorite" BOOLEAN NOT NULL,
    "featured" JSONB NOT NULL,

    CONSTRAINT "restaurants_pkey" PRIMARY KEY ("id")
);
