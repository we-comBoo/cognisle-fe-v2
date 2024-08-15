const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: { nextauth_secret: process.env.NEXTAUTH_SECRET },
  e2e: {
    baseUrl: 'https://cognisle-fe-v2.vercel.app',
    supportFile: false,
    video: true,
    chromeWebSecurity: false,
  },
  defaultCommandTimeout: 30000,
})
