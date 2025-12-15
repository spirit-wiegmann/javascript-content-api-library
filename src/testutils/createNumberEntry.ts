import { faker } from '@faker-js/faker'
import { CaaSApi_CMSInputNumber } from '../types'

export const createNumberEntry = (num?: number): CaaSApi_CMSInputNumber => {
  const fsType = 'CMS_INPUT_NUMBER'
  const name = faker.lorem.word()
  const value = typeof num !== 'number' || Number.isNaN(num) ? faker.number.int(42) : num
  return { fsType, name, value }
}
