const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: { nextauth_secret: process.env.NEXTAUTH_SECRET },
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    video: true,
    chromeWebSecurity: false,
  },
  defaultCommandTimeout: 30000,
})
