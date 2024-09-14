/* eslint-disable @typescript-eslint/no-explicit-any */
import camelCase from 'lodash/camelCase'

export const transformKeysToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(transformKeysToCamelCase)
  } else if (obj !== null && typeof obj === 'object') {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const camelKey = camelCase(key)
      acc[camelKey] = transformKeysToCamelCase(value)
      return acc
    }, {} as any)
  } else {
    return obj
  }
}
