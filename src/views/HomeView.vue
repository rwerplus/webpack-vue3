<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'
import { useI18n } from 'vue-i18n'

const store = useUserStore()
const t = useI18n()
console.log(t)
const handleClick = () => {
  store.setUserInfo({
    username: 'admin-enal',
    userId: 12
  })
}
const handleReset = () => {
  store.$reset();
}
</script>
<template>
  <div class="home">
    {{ store.userInfo.username }}
    <button @click="handleClick">changeUserName</button>
    <button @click="handleReset">resetStore</button>
  </div>
</template>
