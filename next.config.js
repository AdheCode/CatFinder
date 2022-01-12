module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    // api_url_host: process.env.API_URL_HOST,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    api_url_host: process.env.API_URL_HOST,
  },
  images: {
    domains: ['cdn2.thecatapi.com']
  }
}
