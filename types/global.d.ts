// types/global.d.ts

declare namespace global {
  type RequireContext = ReturnType<typeof require.context>
  type Recordable<T = any> = Record<string, T>
  declare let window: any
  type I18nType = 'zh_CN' | 'en_US';
}
