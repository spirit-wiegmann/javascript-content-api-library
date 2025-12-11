import { faker } from '@faker-js/faker'
import { FSXAContentMode } from '../enums'
import { LogLevel } from '../modules'

export const generateRandomConfig = () => {
  const API_KEY = faker.string.uuid()
  const CAAS_URL = faker.internet.url()
  const NAVIGATION_SERVICE_URL = faker.internet.url()
  const TENANT_ID = faker.internet.domainWord()
  const PROJECT_ID = faker.string.uuid()
  const CONTENT_MODE: FSXAContentMode = faker.datatype.boolean()
    ? FSXAContentMode.PREVIEW
    : FSXAContentMode.RELEASE
  const REMOTES = {
    remote: {
      id: faker.string.uuid(),
      locale: `${faker.location.countryCode().toLowerCase()}_${faker.location.countryCode().toLowerCase().toUpperCase()}`,
    },
    secondRemote: {
      id: faker.string.uuid(),
      locale: `${faker.location.countryCode().toLowerCase()}_${faker.location.countryCode().toLowerCase().toUpperCase()}`,
    },
  }

  return {
    apikey: API_KEY,
    caasURL: CAAS_URL,
    navigationServiceURL: NAVIGATION_SERVICE_URL,
    tenantID: TENANT_ID,
    projectID: PROJECT_ID,
    remotes: REMOTES,
    contentMode: CONTENT_MODE,
    logLevel: LogLevel.NONE,
  }
}
