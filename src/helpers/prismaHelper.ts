import { Prisma } from '@prisma/client'

export const prismaHelper = <T = string | number | boolean | Record<string, any> | Array<any> | null>(json: Prisma.JsonValue): T => {
  return typeof json === 'string' ? (JSON.parse(json) as unknown as T) : (json as unknown as T)
}
