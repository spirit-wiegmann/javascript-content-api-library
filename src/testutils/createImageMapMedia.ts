import { faker } from '@faker-js/faker'
import { CaaSApi_ImageMapMedia } from '../types'
import { createDataEntry } from './createDataEntry'

export const createImageMapMedia = (id = faker.string.uuid()): CaaSApi_ImageMapMedia => {
  const base = createDataEntry(id)
  const name = faker.lorem.word()
  return {
    ...base,
    fsType: 'Media',
    name,
    mediaType: 'PICTURE',
    url: faker.lorem.word(),
    pictureMetaData: {
      fileSize: faker.number.int(),
      extension: 'jpeg',
      mimeType: 'image/jpeg',
      width: 4500,
      height: 3000,
    },
  }
}
