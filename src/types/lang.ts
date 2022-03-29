export type I18nType = 'zh_CN' | 'en_US';

export const LOCALE: { [key: string]: I18nType } = {
  ZH_CN: 'zh_CN',
  EN_US: 'en_US',
};
export interface I18nSetting {
  i18n: I18nType,
  available: boolean,
}

export interface I18nState {
  i18nInfo: I18nSetting;
}
