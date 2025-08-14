// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // target: 'static',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@vueuse/nuxt'],
  fonts: {
    families: [{name: 'inter', provider: 'google'}]
  },
  css: ["~/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/_vars.scss" as *;`
        }
      }
    }
  }

})