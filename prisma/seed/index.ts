import { PrismaClient } from '@prisma/client'
import { data as restaurants } from './data/restaurant'
import { transformKeysToCamelCase } from '../../src/utils/transformKeysToCamelCase'

const prisma = new PrismaClient()

async function main() {
  await prisma.restaurant.createMany({
    data: transformKeysToCamelCase(
      restaurants.map((i) => ({
        ...i,
        images: JSON.stringify(i.images),
        featured: JSON.stringify(i.featured),
      }))
    ),
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
