import { nextTick } from 'vue'
import type { I18n } from 'vue-i18n'

/**
 * require.context是webpack提供的方法,用这个方法我们可以批量引入我们想要的文件,
 * require.context可以返回一个具有 resolve, keys, id 三个属性的方法
 * @param files
 * @returns
 */

export function getMessage (files: global.RequireContext) {
  const modules: global.Recordable = {}
  files.keys().forEach((key: string) => {
    modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default
  })
  return modules
}

export async function setI18nLanguage (i18n, locale: global.I18nType) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  await loadLocaleMessages(i18n, locale)
  setHtmlLang(locale)
}

export async function loadLocaleMessages (i18n: I18n, locale: global.I18nType) {
  const defaultLocal = await import(`./language/${locale}.ts`)
  const messages = defaultLocal.default?.message ?? {}
  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages)
  return nextTick()
}

export function setHtmlLang (locale: string) {
  document.querySelector('html')?.setAttribute('lang', locale)
}
