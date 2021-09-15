import { defineStore } from 'pinia';


/**
 * Pinia Configuration Store
 */
export const useConfigStore = defineStore({
  // unique id of the store across your application
  id: 'config',

  state: () => ({
    config: {} as any
  }),

  getters: {
  },

  actions: {
    load(config: any) {
      this.config = config;
    }
  }

});
