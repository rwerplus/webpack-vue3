import { defineStore } from 'pinia'
import { I18N_KEY } from '@/enum/cacheEnum'

export type I18nType = 'zh_CN' | 'en_US';

export interface I18nSetting {
  i18n: I18nType,
  available: boolean,
}

export interface I18nState {
  i18nInfo: I18nSetting;
}

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const i18nModule = defineStore({
  id: 'i18n-module',
  state: (): I18nState => ({
    i18nInfo: {
      i18n: 'zh_CN',
      available: true,
    },
  }),
  getters: {
    getI18n(): I18nType {
      return this.i18nInfo?.i18n ?? 'zh_CN';
    }
  },
  actions: {
    /**
     *
     * @param info
     * @constructor
     */
    SET_I18n(info: Partial<I18nSetting>) {
      this.i18nInfo = { ...this.i18nInfo, ...info };
      localStorage.set(I18N_KEY, this.i18nInfo);
    },
  }
});
