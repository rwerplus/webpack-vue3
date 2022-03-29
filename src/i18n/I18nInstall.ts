import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { I18n, I18nOptions } from 'vue-i18n'
import { useI18nStoreWithOut } from '@/store/modules/i18n'

export let i18nInterface: ReturnType<typeof createI18n>

async function createI18nOptions (): Promise<I18nOptions> {
  const i18nStore = useI18nStoreWithOut()
  const locale = i18nStore.getI18n
  const defaultLocal = await import(`./language/${locale}.ts`)
  const message = defaultLocal.default?.message ?? {}

  return {
    legacy: false,
    // fallbackLocale: fallback,
    messages: {
      [locale]: message
    },
    // availableLocales: availableLocales,
    // If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
    sync: true,
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true,
  }
}

export const I18nInstall = async (app: App) => {
  const options = await createI18nOptions();
  i18nInterface = createI18n(options) as I18n;
  app.use(i18nInterface);
}
