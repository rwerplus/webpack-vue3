<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'
import { useI18n } from 'vue-i18n'
import { i18nInterface } from '@/i18n/I18nInstall'
import { useI18nModule } from '@/store/modules/i18n'
import { setI18nLanguage } from '@/i18n/tool'

const store = useUserStore()
const i18nStore = useI18nModule()
const { t } = useI18n()
const handleClick = () => {
  store.setUserInfo({
    username: 'admin-enal',
    userId: 12
  })
}
const handleReset = () => {
  setI18nLanguage(i18nInterface, 'en_US')
  i18nStore.SET_I18n({ i18n: 'en_US' })
  store.$reset()
}
</script>
<template>
  <div class="home">
    <p>{{ t('system.app.logoutTip') }}</p>
    <p>{{ t('app.subTitle500') }}</p>
    {{ store.userInfo!.username }}
    <button @click="handleClick">changeUserName</button>
    <button @click="handleReset">resetStore</button>
  </div>
</template>
