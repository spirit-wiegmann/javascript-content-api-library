import { CaaSApi_BaseRef, CaaSApi_FSReference } from '../types'
import { faker } from '@faker-js/faker'
import { createDataEntry } from '../testutils'

export function createRemotePageRefReference(): CaaSApi_FSReference {
  const value: CaaSApi_BaseRef = {
    fsType: 'PageRef',
    url: faker.internet.url(),
    ...createDataEntry(),
    remoteProject: faker.string.uuid(),
  }
  return {
    fsType: 'FS_REFERENCE',
    name: faker.internet.userName(),
    value,
  }
}
