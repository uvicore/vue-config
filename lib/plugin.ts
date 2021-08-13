import { App, inject } from 'vue';

/**
 * Vue plugin for Uvicore Configuration Library
 * @param config any
 * @returns
 */
export function createConfig(config: any) {
  return {
    install(app: App): void {
      // Add config to our globalProperties
      // Accessible from components with this.$config
      app.config.globalProperties.$config = config

      // But in setup() we don't have access to this so we also
      // provide the config through injection.
      app.provide('config', config)
    }
  }
}
