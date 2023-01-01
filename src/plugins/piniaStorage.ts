import type { Plugin } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import localforage from 'localforage'
import logger from '@/utils/logger'

export const pinia = createPinia()
export const installStorage: Plugin = (app) => {
  logger.info('installStorage plugin instanced')
  localforage.config({
    driver: localforage.INDEXEDDB,
    name: 'Portfolio',
    version: 1.0,
    storeName: 'PortfolioDataStore', // Should be alphanumeric, with underscores.
    description: 'Portfolio data store'
  })
  pinia.use(
    createPersistedStatePlugin({
      storage: {
        getItem: async (key) => {
          return localforage.getItem(key)
        },
        setItem: async (key, value) => {
          return localforage.setItem(key, value)
        },
        removeItem: async (key) => {
          return localforage.removeItem(key)
        },
      },
    }),
  )
  app.use(pinia)
}
