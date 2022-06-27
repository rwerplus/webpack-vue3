<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <nav>
    <Icon icon="mdi-light:home"  width="16" height="24"/>
    <Icon icon="eva:alert-triangle-fill" color="red" />
    <Icon icon="et:circle-compass" :h-flip="true" flip="horizontal" :horizontal-flip="true"/>
    <router-view/>
  </nav>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
