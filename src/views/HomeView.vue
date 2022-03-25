<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'

const store = useUserStore()
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
