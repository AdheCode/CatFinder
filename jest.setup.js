export {}

jest.mock('next/config', () => () => ({
    publicRuntimeConfig: {
        api_url_host: process.env.API_URL_HOST,
    }
  }))